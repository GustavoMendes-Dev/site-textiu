import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { Container } from 'react-bootstrap';

import TimeLineIcon from 'remixicon-react/TimeLineIcon';
import UserLineIcon from 'remixicon-react/UserLineIcon';

import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function Oportunidade({oportunidades}) {
    const { query } = useRouter();
    const oportunidade = oportunidades.result.filter(o => o._id == query.id);

    // let data = moment(oportunidade[0].created_at).format("DD/MM/YYYY");
   const data = moment(oportunidade[0].created_at).format("DD MMM YYYY");
    
    
    return (
        <React.Fragment>
            <Header/>
            <div className="filter__content">
                <Container>
                    <div className="row justify-content-center">
                        <div className="col-lg-12 m-auto col-sm-12 col-md-12">
                        Voltar
                        </div>
                    </div>
                </Container>
            </div>
            <div className="container">
        <div className="row">
            <div className="col-lg-8">
                                <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-post">
                                <div className="sidebar-widget tag">
                                    <a href="#">{oportunidade[0].type}</a>
                                </div>
                            
                                <h2 href="#" className="mb-2">{oportunidade[0].title}</h2>
                                {/* <img src="images/blog/blog-lg.jpg" alt="" className="img-fluid"> */}
                                <div className="mb-3 d-flex">
                                    <div className="post-author">
                                        <UserLineIcon/>
                                        <a className="h6">{oportunidade[0].provider.company_name}</a>
                                    </div>

                                    <div className="post-date">
                                        <TimeLineIcon/>
                                        <span>Criado em: {data}</span>
                                    </div>
                                </div>

                                <div className="mt-1 mb-3">
                                    <h5 className="d-inline-block mr-3">R$</h5>
                                    <ul className="list-inline d-inline-block">
                                        <li className="list-inline-item">{oportunidade[0].salary_range}</li>
                                    </ul>
                              
                                    <h5 className="d-inline-block mr-3">Contratação</h5>
                                    <ul className="list-inline d-inline-block">
                                        <li className="list-inline-item">{oportunidade[0].hiring}</li>
                                    </ul>
                                
                                    <h5 className="d-inline-block mr-3">Categoria</h5>
                                    <ul className="list-inline d-inline-block">
                                        <li className="list-inline-item">{oportunidade[0].categories}</li>
                                    </ul>

                                    <h5 className="d-inline-block mr-3">Vagas</h5>
                                    <ul className="list-inline d-inline-block">
                                        <li className="list-inline-item">{oportunidade[0].vacancies}</li>
                                    </ul>
                                </div>
                                
                                <h5 className="d-inline-block mr-3">Descrição:</h5>
                                <p className="mt-3">{oportunidade[0].description}</p>

                                <h5 className="d-inline-block mr-3">Requisitos:</h5>
                                <p>{oportunidade[0].requirements}</p>

                                <h5 className="d-inline-block mr-3">Desejável:</h5>
                                <p>{oportunidade[0].desirable}</p>

                                {/* <div className="mt-5 mb-3">
                                    <h5 className="d-inline-block mr-3">Tags:</h5>
                                    <ul className="list-inline d-inline-block">
                                        <li className="list-inline-item"><a href="#">Agency</a>,</li>
                                        <li className="list-inline-item"><a href="#">Marketing</a>,</li>
                                        <li className="list-inline-item"><a href="#">Business</a></li>
                                    </ul>
                                </div> */}
                                {/* <div className="my-4">
                                    <h5 className="d-inline-block mr-3">Share Now:</h5>
                                    <ul className="list-inline d-inline-block">
                                        <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                    </ul>
                                </div> */}
                            </div>

                        </div>
                    </div>
            </div>
            <div className="col-lg-4">
                                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sidebar-widget search">
                                <div className="form-group">
                                    {/* <input type="text" placeholder="search" className="form-control"> */}
                                    <i className="fa fa-search"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="sidebar-widget about-bar">
                                <h5 className="mb-3">{oportunidade[0].provider.company_name}</h5>
                                <p>{oportunidade[0].provider.description}</p>

                                <a className="btn btn-primary">Candidate-se</a>
                            </div>
                        </div>

                        

                        {/* <div className="col-lg-12">
                            <div className="sidebar-widget category">
                                <h5 className="mb-3">Category</h5>
                                <ul className="list-styled">
                                    <li>Marketing</li>
                                    <li>Digiatl</li>
                                    <li>SEO</li>
                                    <li>Web Design</li>
                                    <li>Development</li>
                                    <li>video</li>
                                    <li>audio</li>
                                    <li>slider</li>
                                </ul>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-12">
                            <div className="sidebar-widget tag">
                                <p href="#">web</p>
                                <a href="#">development</a>
                                <a href="#">seo</a>
                                <a href="#">marketing</a>
                                <a href="#">branding</a>
                                <a href="#">web deisgn</a>
                                <a href="#">Tutorial</a>
                                <a href="#">Tips</a>
                                <a href="#">Design trend</a>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-12">
                            <div className="sidebar-widget download">
                                <h5 className="mb-4">Download Files</h5>
                                <a> <i className="fa fa-file-pdf"></i>Company Manual</a>
                                <a href="#"> <i className="fa fa-file-pdf"></i>Company Profile</a>
                            </div>
                        </div> */}

                        

                    </div>
                </div>
            </div>   
        </div>
        
            <Footer/>
        </React.Fragment>
    )
}

export const getServerSideProps = async (ctx) => {
    const { [ 'sitetextiu.token' ] : token } = parseCookies(ctx);

    const data = await fetch(`http://localhost:3333/opportunities`);
    const oportunidades = await data.json();

    // if (!token)  {
    //     return {
    //         redirect: {
    //             destination: "/conta/entrar",
    //             permanent: false,
    //         }
    //     }
    // }

    return { props: { oportunidades } };
}
