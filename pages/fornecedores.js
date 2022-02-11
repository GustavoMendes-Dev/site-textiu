import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Footer from '../components/Footer';
import Header from '../components/Header';
import BtnFilter from '../components/BtnFilter';

function ProvidersPage({ data, categoriesData }){
    const [ filter, setFilter ] = useState('');
    const [ filterCategory, setFilterCategory ] = useState('');

    function handleClickFilter(name) {
        filter == name ? 
            setFilter("") 
        : 
            setFilter(name)
    }
    function handleClickCategory(name) {
        filterCategory == name ? setFilterCategory("") : setFilterCategory(name)
    }

    return (
        <React.Fragment>
            <Header/>
            <div className="filter__content">
                <Container>
                    <Row className="justify-content-center">
                        <div className="col-lg-12 m-auto col-sm-12 col-md-12">
                            <div className="filters">
                                {categoriesData.categories.map(function(category) {

                                    let checked = filter == category ? "checked" : "" ;

                                    return (
                                            <BtnFilter key={category}
                                                className={`btn__filter ${checked}`}
                                                name={category}
                                                click={(name) => handleClickFilter(name = category)}
                                            />
                                    )
                                })}

                            </div>
                        </div>
                        <div className="col-lg-12 col-sm-12 col-md-12">
                            <div className="filters">
                                {/* { categoriesData.categories.map(function(category) {

                                    let checked = filterCategory == category ? "checked" : "" ;

                                    return (
                                        <BtnFilter
                                            className={`btn__filter ${checked}`}
                                            key={category}
                                            name={category}
                                            click={(name) => handleClickCategory(name = category)}
                                        />
                                    )
                                }) } */}
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
                <Container>
                <div className="row">
                    {data.result.map(function(fornecedor) {

                        // let color = '';
                        // switch (oportunidade.type) {
                        //     case "Emprego":
                        //         color = "emprego"
                        //         break;
                        //     case "Estágio":
                        //         color = "estagio"
                        //         break;
                        //     case "Diária":
                        //         color = "diaria"
                        //         break;
                        //     default:
                        //         break;
                        // }

                        return (
                            fornecedor.status == 1 && 
                            (<div key={fornecedor._id} className="col-lg-3 col-sm-6 col-md-4">
                                 <a href={`/${fornecedor._id}`} className="blog-block">
                                 <div className="blog-text">
                                         <h6 className={`author-name provider`}><span>{fornecedor.categories}</span></h6>
                                         {/* <img className="img__card" src="https://www.zancanelli.com.br/site/images/logo.png" width="65" height="auto" alt="Zancanelli Malhas"/> */}
                                         <h4>{fornecedor.company_name}</h4>
                                         <p className="description__card">{fornecedor.description.slice(0, 80)}...</p>
                                         <h6 className="author-name">{fornecedor.city} - {fornecedor.state}</h6>
                                     </div>
                                 </a>
                             </div>
                            )
                        )
                    })}
                    </div>
                </Container>
            


            <Footer/>
        </React.Fragment>
    )
}

export async function getServerSideProps() {
    const fornecedores = await fetch(`http://localhost:3333/providers`);
    const categories = await fetch(`http://localhost:3333/providers/categories`);

    const data = await fornecedores.json();
    const categoriesData = await categories.json();


    return { props: { data, categoriesData } };
}

export default ProvidersPage;