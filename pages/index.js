import React, { useContext } from 'react';
import Image from 'next/image'

import Footer from '../components/Footer';
import Header from '../components/Header';
import Oportunities from '../components/Oportunities';

import { AuthContext } from '../contexts/AuthContext.tsx';
import imgLogos from '../public/assets/img-logos.png';

export default function Home() {
    const { user } = useContext(AuthContext);

  return (
    <React.Fragment>
      <Header/>
      <div class="banner-area banner-2">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 m-auto text-center col-sm-12 col-md-12">
                            <div class="banner-content content-padding">
                              {/* <h5 class="subtitle">A creative agency</h5> */}
                                <h1 class="banner-title">Encontre os melhores Fornecedores e Profissionais da Indústria Têxtil.</h1>
                                <p>Unimos grandes empresa em um só lugar.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 m-auto bt-0 text-center col-sm-12 col-md-12">
                        <Image
                            src={imgLogos}
                            alt="Picture of the author"
                            width={1000} automatically provided
                            height={85} automatically provided
                        /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    

    <Oportunities/>

<section id="service-head" class=" bg-feature">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-sm-12 m-auto">
                <div class="section-heading text-white">
                    <h4 class="section-title">Encontre os melhores Fornecedores</h4>
                    <p>We’re full service which means we’ve got you covered on design & content right through to digital. You’ll form a lasting relationship with us.</p>
                </div>
            </div>
        </div>
    </div>
</section>

    <section id="service">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="service-box">
                        <div class="service-img-icon">
                            {/* <img src="images/icon/007-digital-marketing-3.png" alt="service-icon" class="img-fluid"> */}
                        </div>
                        <div class="service-inner">
                            <h4>Zancanelli Malhas</h4>
                            <p>Reach a huge area of users and get a publicty of your product and service ,<span>video marketing</span> solution.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="service-box ">
                        <div class="service-img-icon">
                            {/* <img src="images/icon/008-digital-marketing-2.png" alt="service-icon" class="img-fluid"> */}
                        </div>
                        <div class="service-inner">
                            <h4>Dimona - Camisetas Personalizadas</h4>
                            <p>Email Marketing is a great solution to reach a <span>high range of customers</span> eagrerly waiting to get a service.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="service-box">
                        <div class="service-img-icon">
                            {/* <img src="images/icon/003-task.png" alt="service-icon" class="img-fluid"> */}
                        </div>
                        <div class="service-inner">
                            <h4>Cluba Confecção</h4>
                            <p>we provide wide range of<span> seo service</span> to make your site at top to reach your target customers provided.</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="service-box">
                        <div class="service-img-icon">
                            {/* <img src="images/icon/010-digital-marketing.png" alt="service-icon" class="img-fluid"> */}
                        </div>
                        <div class="service-inner">
                            <h4>IZ Têxtil</h4>
                            <p>We  provide <span>custom website</span> for any small and large company web based service in large compact package.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="service-box">
                        <div class="service-img-icon">
                            {/* <img src="images/icon/006-analytics.png" alt="service-icon" class="img-fluid"> */}
                        </div>
                        <div class="service-inner">
                            <h4>Content Growth</h4>
                            <p>Content is king,Having a blog site and want to <span>build content</span> make a platform of earning too we assist you.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="service-box">
                        <div class="service-img-icon">
                            {/* <img src="images/icon/004-hiring.png" alt="service-icon" class="img-fluid"> */}
                        </div>
                        <div class="service-inner">
                            <h4>Link Building </h4>
                            <p>Want to grow your <span>potential visitor</span> your site to make it more effective and succesful business .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </React.Fragment>
  )
}
