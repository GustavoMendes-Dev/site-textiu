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
                
                <section className="section-padding pt-0">
                    <div className="container">
                    <h3 className="mb-3">Olá, <b>{user?.name}</b>.</h3>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="text-center border p-4 rounded mb-4">
                                    <span className="counter  text-dark font-weight-normal">460</span>
                                    <h5 className="text-uppercase mt-2">Fornecedores</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="text-center border p-4 rounded mb-4">
                                    <span className="counter text-dark font-weight-normal">60</span>
                                    <h5 className="text-uppercase mt-2">Profissionais</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="text-center border p-4 rounded mb-4">
                                    <span className="counter text-dark font-weight-normal">30</span>
                                    <h5 className="text-uppercase mt-2">Vagas</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="text-center border p-4 rounded ">
                                    <span className="counter text-dark font-weight-normal">25</span>
                                    <h5 className="text-uppercase mt-2">Anúncios</h5>
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