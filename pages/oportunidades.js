import React, { useState } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import Link from 'next/link';

import Footer from '../components/Footer';
import Header from '../components/Header';
import BtnFilter from '../components/BtnFilter';

function OportunitiesPage({ data, typesData, categoriesData }) {
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

    const oportunidadeFilter = data.result.filter(op => op.type.includes(filter) && op.categories.includes(filterCategory));

    return (
        <React.Fragment>
            <Header/>
            <div class="filter__content">
                <Container>
                    <div class="row justify-content-center">
                        <div class="col-lg-12 m-auto col-sm-12 col-md-12">
                            <div class="filters">
                                {typesData.types.map(function(type) {

                                    let checked = filter == type ? "checked" : "" ;

                                    return (
                                        <React.Fragment>
                                            <BtnFilter
                                                className={`btn__filter ${checked}`}
                                                key={type}
                                                name={type}
                                                click={(name) => handleClickFilter(name = type)}
                                            />
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                        <div class="col-lg-12 col-sm-12 col-md-12">
                            <div class="filters">
                                { categoriesData.categories.map(function(category) {

                                    let checked = filterCategory == category ? "checked" : "" ;

                                    return (
                                        <BtnFilter
                                            className={`btn__filter ${checked}`}
                                            key={category}
                                            name={category}
                                            click={(name) => handleClickCategory(name = category)}
                                        />
                                    )
                                }) }
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
                <Container>
                    <Row>
                        <Col>
                            <p className="mt-3">Encontramos <strong>{oportunidadeFilter.length}</strong> {filter ? `${filter.toLocaleLowerCase()}${oportunidadeFilter.length !== 1 ? "s" : ""}` : "vagas"} { filterCategory && `de ${filterCategory.toLocaleLowerCase()}` }  para você</p>
                        </Col>
                    </Row>

                <div class="row">
                    {oportunidadeFilter.map(function(oportunidade) {

                        let color = '';
                        switch (oportunidade.type) {
                            case "Emprego":
                                color = "emprego"
                                break;
                            case "Estágio":
                                color = "estagio"
                                break;
                            case "Diária":
                                color = "diaria"
                                break;
                            default:
                                break;
                        }

                        return (
                                <div key={oportunidade._id} class="col-lg-3 col-sm-6 col-md-4">
                                    <Link href={`/oportunidade/${oportunidade._id}`}>
                                    <a class="blog-block">
                                        {/* <img src="images/blog/blog-1.jpg" alt="" class="img-fluid"> */}
                                        <div class="blog-text">
                                            <h6 class={`author-name--${color}`}><span>{oportunidade.type}</span></h6>
                                            <h4>{oportunidade.title}</h4>
                                            <p>{oportunidade.created_by}</p>
                                            <h6 class="author-name">Catete - RJ</h6>
                                        </div>
                                    </a>
                                    </Link>
                                </div>
                        )
                    })}
                    </div>
                </Container>
            


            <Footer/>
        </React.Fragment>
    )
}

export async function getServerSideProps() {
    const response = await fetch(`http://localhost:3333/opportunities`);
    const types = await fetch(`http://localhost:3333/opportunities/types`);
    const categories = await fetch(`http://localhost:3333/opportunities/categories`);

    const data = await response.json();
    const typesData = await types.json();
    const categoriesData = await categories.json();

    console.log(typesData);

    return { props: { data, typesData, categoriesData } };
}

export default OportunitiesPage;