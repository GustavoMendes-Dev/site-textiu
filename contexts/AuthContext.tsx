import React, { createContext, useState, useEffect } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { useRouter } from 'next/router';
// import { api } from '../services/api'

type User = {
    name: string,
    email: string,
    permission: Number,
    prodiver: String,
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User;
    signIn: (data: SignInData) => Promise<void>;
    Logout: () => void;
}

type SignInData = {
    email: string;
    password: string;
}

type Token = {
    token: string;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
    const router = useRouter()

    const [ user, setUser ] = useState<User | null>(null);
    const isAuthenticated = !!user;
    
    useEffect(() => {
        const { 'sitetextiu.token': token } = parseCookies();
        async function Auth(token: Token) {
            try{
                if (token) {
                    await fetch('http://localhost:3333/site/auth', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-access-token': token.token,
                        },
                    }).then(response => response.json()).then((data) => {
                        const { user, result } = data;
                        if (!user || result == "error") {
                            destroyCookie({}, 'sitetextiu.token');
                        } else {
                            setUser(user);
                        }
                    });
                }
            }catch(err) {
                console.log(err);
            }
       }
       Auth({token: token});
    }, [user])

    async function signIn({ email, password }: SignInData) {
        try {
            const create = await fetch('http://localhost:3333/site/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }).then(response => response.json()).then(
                  (data) => {
                    console.log(data)
                    const { access_token, user } = data;
                    if (data.result == "success") {
                        setCookie(undefined, 'sitetextiu.token', access_token, {
                            maxAge: 60 * 60 * 1, // 1 hour
                        });
                        // api.defaults.headers['x-access-token'] = access_token;
                        setUser(user);
                        router.push("/")
                    } else {
                        // setMessage(data.message)
                    }
            });
           }catch (error) {
                alert("Estabelecendo conexão com servidor.")
           }
    }

    function Logout():void {
        router.push("/conta/entrar");
        destroyCookie({}, 'sitetextiu.token');
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, Logout  }} >
            {children}
        </AuthContext.Provider>
    )
}