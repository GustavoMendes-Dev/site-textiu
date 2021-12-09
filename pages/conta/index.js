import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'antd';

import { parseCookies } from 'nookies';

import HeaderAdmin from '../../components/conta/HeaderAdmin'
import { AuthContext } from '../../contexts/AuthContext.tsx'

const Dashboard = () => {
    const { user, isAuthenticated } = useContext(AuthContext);
 
    return (
        <React.Fragment>
            <HeaderAdmin/>
            <section className="content">
                
                <section class="section-padding pt-0">
                    <div class="container">
                    <h3 class="mb-3">Olá, <b>{user?.name}</b>.</h3>
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="text-center border p-4 rounded mb-4">
                                    <span class="counter  text-dark font-weight-normal">460</span>
                                    <h5 class="text-uppercase mt-2">Fornecedores</h5>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="text-center border p-4 rounded mb-4">
                                    <span class="counter text-dark font-weight-normal">60</span>
                                    <h5 class="text-uppercase mt-2">Profissionais</h5>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="text-center border p-4 rounded mb-4">
                                    <span class="counter text-dark font-weight-normal">30</span>
                                    <h5 class="text-uppercase mt-2">Vagas</h5>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="text-center border p-4 rounded ">
                                    <span class="counter text-dark font-weight-normal">25</span>
                                    <h5 class="text-uppercase mt-2">Anúncios</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

// export const getServerSideProps = async (ctx) => {
//     const { [ 'sitetextiu.token' ] : token } = parseCookies(ctx);
//     // const auth = ctx.req.headers['x-access-token'];

//     // console.log(auth)

//     if (!token)  {
//         return {
//             redirect: {
//                 destination: "/conta/entrar",
//                 permanent: false,
//             }
//         }
//     }

//     return {
//         props: {}
//     }
// }

export default Dashboard;