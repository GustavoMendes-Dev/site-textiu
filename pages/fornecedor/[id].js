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

export default function Provider({providers}) {
    const { query } = useRouter();
    const provider = providers.result.filter(o => o._id == query.id);

    // let data = moment(provider[0].created_at).format("DD/MM/YYYY");
   const data = moment(provider[0].created_at).format("DD MMM YYYY");
    
    
    return (
        <React.Fragment>
            <Header/>
            <div class="filter__content">
                <Container>
                    <div class="row justify-content-center">
                        <div class="col-lg-12 m-auto col-sm-12 col-md-12">
                        Voltar
                        </div>
                    </div>
                </Container>
            </div>
            <div class="container">
        <div class="row">
            <div class="col-lg-8">
                                <div class="row">
                        <div class="col-lg-12">
                            <div class="blog-post">
                                <div class="sidebar-widget tag">
                                    <a href="#">{provider[0].type}</a>
                                </div>
                            
                                <h2 href="#" class="mb-2">{provider[0].company_name}</h2>
                                {/* <img src="images/blog/blog-lg.jpg" alt="" class="img-fluid"> */}
                                <div class="mb-3 d-flex">
                                    <div class="post-author">
                                        <UserLineIcon/>
                                        {/* <a class="h6">{provider[0].provider.company_name}</a> */}
                                    </div>

                                    <div class="post-date">
                                        <TimeLineIcon/>
                                        <span>Criado em: {data}</span>
                                    </div>
                                </div>

                                <div class="mt-1 mb-3">
                                    <h5 class="d-inline-block mr-3">R$</h5>
                                    <ul class="list-inline d-inline-block">
                                        <li class="list-inline-item">{provider[0].salary_range}</li>
                                    </ul>
                              
                                    <h5 class="d-inline-block mr-3">Contratação</h5>
                                    <ul class="list-inline d-inline-block">
                                        <li class="list-inline-item">{provider[0].hiring}</li>
                                    </ul>
                                
                                    <h5 class="d-inline-block mr-3">Categoria</h5>
                                    <ul class="list-inline d-inline-block">
                                        <li class="list-inline-item">{provider[0].categories}</li>
                                    </ul>

                                    <h5 class="d-inline-block mr-3">Vagas</h5>
                                    <ul class="list-inline d-inline-block">
                                        <li class="list-inline-item">{provider[0].vacancies}</li>
                                    </ul>
                                </div>
                                
                                <h5 class="d-inline-block mr-3">Sobre:</h5>
                                <p class="mt-3">{provider[0].description}</p>

                                <h5 class="d-inline-block mr-3">Requisitos:</h5>
                                <p>{provider[0].requirements}</p>

                                <h5 class="d-inline-block mr-3">Desejável:</h5>
                                <p>{provider[0].desirable}</p>

                                {/* <div class="mt-5 mb-3">
                                    <h5 class="d-inline-block mr-3">Tags:</h5>
                                    <ul class="list-inline d-inline-block">
                                        <li class="list-inline-item"><a href="#">Agency</a>,</li>
                                        <li class="list-inline-item"><a href="#">Marketing</a>,</li>
                                        <li class="list-inline-item"><a href="#">Business</a></li>
                                    </ul>
                                </div> */}
                                {/* <div class="my-4">
                                    <h5 class="d-inline-block mr-3">Share Now:</h5>
                                    <ul class="list-inline d-inline-block">
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-facebook"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                    </ul>
                                </div> */}
                            </div>

                        </div>
                    </div>
            </div>
            <div class="col-lg-4">
                                    <div class="row">
                        <div class="col-lg-12">
                            <div class="sidebar-widget search">
                                <div class="form-group">
                                    {/* <input type="text" placeholder="search" class="form-control"> */}
                                    <i class="fa fa-search"></i>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="sidebar-widget about-bar">
                                {/* <h5 class="mb-3">{provider[0].provider.company_name}</h5>
                                <p>{provider[0].provider.description}</p> */}

                                <a className="btn btn-primary">Candidate-se</a>
                            </div>
                        </div>

                        

                        {/* <div class="col-lg-12">
                            <div class="sidebar-widget category">
                                <h5 class="mb-3">Category</h5>
                                <ul class="list-styled">
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

                        {/* <div class="col-lg-12">
                            <div class="sidebar-widget tag">
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
                        {/* <div class="col-lg-12">
                            <div class="sidebar-widget download">
                                <h5 class="mb-4">Download Files</h5>
                                <a> <i class="fa fa-file-pdf"></i>Company Manual</a>
                                <a href="#"> <i class="fa fa-file-pdf"></i>Company Profile</a>
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
    const data = await fetch(`http://localhost:3333/providers`);
    const providers = await data.json();

    return { props: { providers } };
}
