import React, { useEffect, useState } from "react";
import Link from 'next/link';

export default function Header(){
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        });
    }, []);

    return (
        <React.Fragment>
            <nav class={scroll ? "navbar navbar-expand-lg fixed-top trans-navigation header-white" : "navbar navbar-expand-lg fixed-top trans-navigation"}>
                <div class="container">
                    <li>
                        <Link href="/">
                            <a class="navbar-brand">
                                {/* <img src="images/logo.png" alt="" class="img-fluid b-logo"> */}
                                Textiu
                            </a>
                        </Link>
                    </li>
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                            <i class="fa fa-bars"></i>
                        </span>
                    </button>

                    <div class="collapse navbar-collapse text-center" id="mainNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <Link href="/fornecedores">
                                    <a class="nav-link smoth-scroll">
                                        Fornecedores
                                    </a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/profissionais">
                                    <a class="nav-link smoth-scroll">
                                        Profissionais
                                    </a>
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                               <Link href="/oportunidades">
                                    <a class="nav-link smoth-scroll">
                                        Vagas
                                    </a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/anuncios">
                                    <a class="nav-link smoth-scroll">
                                        Anúncios
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div class="collapse navbar-collapse justify-content-end">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link href="/contas/criar">
                                    <a class="nav-link smoth-scroll">Cadastre-se</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/anuncios">
                                    <a class="nav-link smoth-scroll">
                                        Entrar
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </React.Fragment>
    )
}