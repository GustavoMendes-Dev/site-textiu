import React from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import HeaderAdmin from '../../../components/conta/HeaderAdmin';


const Provider = ({fornecedores}) => {
    const { query } = useRouter();
    const fornecedor = fornecedores.result.filter(f => f._id == query.id)

    return (
        <React.Fragment>
            <HeaderAdmin/>
            <section className="content">
                <div class="container">
        <div class="row">
            <div class="col-lg-8">
                                <div class="row">
                        <div class="col-lg-12">
                            <div class="blog-post">
                                {/* <img src="images/blog/blog-lg.jpg" alt="" class="img-fluid"> */}
                                <a href="#" class="h4 mt-4">{fornecedor[0].company_name}</a>
                                <div class="mb-3 d-flex">
                                    <div class="post-author mr-3">
                                        <span class="h6 text-uppercase">{fornecedor[0].corporate_name}</span>
                                    </div>

                                    <div class="post-info">
                                        <i class="fa fa-calendar-check"></i>
                                        <span>{fornecedor[0].cnpj}</span>
                                    </div>
                                </div>
                                
                                

                                {fornecedor[0].categories}
                                
                                <p class="mt-3">{fornecedor[0].description}</p>
                        
                                <div class="mt-5 mb-3">
                                    <h5 class="d-inline-block mr-3">Tags:</h5>
                                    <ul class="list-inline d-inline-block">
                                        <li class="list-inline-item"><a href={fornecedor[0].site}>{fornecedor[0].site}</a>,</li>
                                        <li class="list-inline-item"><a href="#">Marketing</a>,</li>
                                        <li class="list-inline-item"><a href="#">Business</a></li>
                                    </ul>
                                </div>
                                <div class="my-4">
                                    <h5 class="d-inline-block mr-3">Endereço:</h5>
                                    <p>{fornecedor[0].street}, {fornecedor[0].number}, {fornecedor[0].complement}.</p>
                                    <p>{fornecedor[0].neighborhood}, {fornecedor[0].city} - {fornecedor[0].state}.</p>
                                    <p>CEP: {fornecedor[0].cep}</p>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>

            </div>   
            </div>
            </section>
        </React.Fragment>
    )
}

export const getServerSideProps = async (ctx) => {
    const { [ 'sitetextiu.token' ] : token } = parseCookies(ctx);

    const data = await fetch(`http://localhost:3333/providers`);
    const fornecedores = await data.json();

    // if (!token)  {
    //     return {
    //         redirect: {
    //             destination: "/conta/entrar",
    //             permanent: false,
    //         }
    //     }
    // }

    return { props: { fornecedores } };
}

export default Provider;