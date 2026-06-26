<script setup>
import InnerHeader from '@/components/InnerHeader.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
import Preloader from '@/components/Preloader.vue'
import { onMounted, onUnmounted, nextTick } from 'vue'
import BackTo from '@/components/BackTo.vue'
import Cursor from '@/components/Cursor.vue'
</script>
<template>
  <Cursor />
  <Preloader />
  <BackTo />
  <InnerHeader />
  <Sidebar />

  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        <!-- SI BREADCUMB AREA -->
        <section class="si-breadcumb-area" style="background: url(assets/img/breadcumb/bg.jpg)">
          <div class="container container-1617">
            <div class="row">
              <div class="col-lg-12">
                <div class="si-breadcumb-box">
                  <div class="si-breadcumb-text">
                    <h2>Sobre Nos</h2>
                    <span>
                      Pagina Inicial
                      <strong><i class="fa-sharp fa-regular fa-angles-right"></i> Sobre Nos</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="si-breadcumb-shape">
            <img src="/assets/img/breadcumb/shape.png" alt="" />
          </div>
        </section>

        <!-- About area start -->
        <section class="si-about-area pt-124 pb-130">
          <div class="container container-1617">
            <div class="row">
              <div class="col-lg-4">
                <div class="si-section-title"><span>Sobre Nos</span></div>
              </div>
              <div class="col-lg-8">
                <div class="si-about-text">
                  <h4>
                    A Nave Consultoria &amp; Serviços desenvolve softwares, websites, sistemas
                    empresariais e soluções digitais personalizadas para empresas, instituições e
                    empreendedores. Combinamos tecnologia, inovação e estratégia para gerar
                    resultados concretos.
                  </h4>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="si-about-shape">
                  <img src="/assets/img/about/shape.png" alt="" />
                  <div class="si-about-text3">
                    <h3>5+</h3>
                    <span>Anos de Experiência</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="si-about-box">
                  <div class="si-about-img">
                    <div class="row">
                      <div class="col-6">
                        <img class="si-about-img2" src="/assets/img/pf1.png" alt="" />
                      </div>
                      <div class="col-6">
                        <img class="si-about-img2" src="/assets/img/pf2.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="si-about-main">
                    <!--img src="/assets/img/about/about-3.png" alt="" />

                    <h1>100+</h1>

                    <h2>Projetos Entregues com Sucesso</h2-->

                    <p>
                      Desenvolvemos soluções digitais adaptadas às necessidades de cada
                      <br class="d-none d-xxl-block" />
                      cliente, desde websites institucionais até sistemas empresariais,
                      <br class="d-none d-xxl-block" />
                      aplicações móveis e plataformas web. O nosso compromisso é criar
                      <br class="d-none d-xxl-block" />
                      tecnologia que gera valor, eficiência e crescimento sustentável.
                      <br class="d-none d-xxl-block" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- About area end -->

        <!-- Brand area start 
        <div class="si-brand-area pb-130">
          <div class="container container-1617">
            <div class="row">
              <div class="col-lg-12">
                <div class="si-brand-wrappere">
                  <div class="si-brand-box">
                    <img src="/assets/img/brand/brand.png" alt="" />
                  </div>
                  <div class="si-brand-box">
                    <img src="/assets/img/brand/brand2.png" alt="" />
                  </div>
                  <div class="si-brand-box">
                    <img src="/assets/img/brand/brand3.png" alt="" />
                  </div>
                  <div class="si-brand-box">
                    <img src="/assets/img/brand/brand4.png" alt="" />
                  </div>
                  <div class="si-brand-box">
                    <img src="/assets/img/brand/brand5.png" alt="" />
                  </div>
                  <div class="si-brand-box">
                    <img src="/assets/img/brand/brand6.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       Brand area end -->

        <!-- Video area Start 
        <div class="si-video-area" data-background="/assets/img/video/bg.jpg">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="si-video-icon">
                  <div class="si-video-icon-inner">
                    <a
                      class="popup-video si-about-playbtn"
                      href="https://www.youtube.com/watch?v=MLpWrANjFbI"
                      ><i class="fa-solid fa-play"></i
                    ></a>
                    <div class="si-video-shape">
                      <img class="rotate2" src="/assets/img/video/shape.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      Video area End -->

        <!-- Counter 3 Area Start -->
        <section class="si-counter-area pt-130 pb-124">
          <div class="container container-1617">
            <div class="si-counter-wrapper">
              <div class="si-counter-wrapper-box">
                <div class="si-counter-box">
                  <div class="si-counter-text">
                    <h1 data-purecounter-duration="1" data-purecounter-end="28" class="purecounter">
                      100
                    </h1>
                    <h2>+</h2>
                    <span>Projetos Concluídos</span>
                  </div>
                </div>
                <div class="si-counter-box counter-mt">
                  <div class="si-counter-text">
                    <h1 data-purecounter-duration="1" data-purecounter-end="9" class="purecounter">
                      80
                    </h1>
                    <h2>+</h2>
                    <span>Clientes Satisfeitos</span>
                  </div>
                </div>
                <div class="si-counter-box counter-mt">
                  <div class="si-counter-text">
                    <h1 data-purecounter-duration="1" data-purecounter-end="18" class="purecounter">
                      5
                    </h1>
                    <h2>+</h2>
                    <span>Anos de Experiência</span>
                  </div>
                </div>
                <div class="si-counter-box counter-mt">
                  <div class="si-counter-text">
                    <h1 data-purecounter-duration="1" data-purecounter-end="98" class="purecounter">
                      24
                    </h1>
                    <span>Soluções Desenvolvidas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Counter 3 Area End -->

        <!-- Testimonial area start 
        <section class="si-testimonial-area pt-124">
          <div class="container container-1617">
            <div class="row">
              <div class="col-lg-4">
                <div class="si-testimonial-shape">
                  <img class="rotate2" src="/assets/img/testimonial/shape-text.png" alt="" />
                  <div class="si-testimonial-icon">
                    <img src="/assets/img/testimonial/Icon.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-8 position-relative">
                <div class="swiper si-testimonial card-testimonial">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="si-testimonial-box">
                        <div class="si-testimonial-text">
                          <h2>
                            "A Nave transformou a nossa ideia numa solução digital moderna e
                            eficiente. Desde o primeiro contacto até à entrega do projecto, a equipa
                            demonstrou profissionalismo, competência técnica e um excelente
                            acompanhamento. Recomendamos os seus serviços a qualquer empresa que
                            procure inovação e qualidade."
                          </h2>
                        </div>
                        <div class="si-testimonial-main">
                          <div class="si-testimonial-thumb">
                            <img src="/assets/img/testimonial/testimonial1.jpg" alt="" />
                          </div>
                          <div class="si-testimonial-address">
                            <h3>Cliente Nave</h3>
                            <span>Empresário</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="si-swiper-scrollbar"></div>
              </div>
            </div>
          </div>
        </section>
        Testimonial area end -->
        <!-- Team area start 
        <section class="si-team-area pt-124 pb-130">
          <div class="container container-1617">
            <div class="row">
              <div class="col-lg-12">
                <div class="si-section-title text-center pb-40">
                  <span>Nossa Equipa</span>
                  <h2>Especialistas em Soluções Digitais</h2>
                </div>
              </div>

              <div class="col-lg-6 col-xl-3 col-xxl-3">
                <div class="si-team-box team-bottom">
                  <div class="si-team-thumb">
                    <img src="/assets/img/team/team1.jpg" alt="" />

                    <div class="si-team-text">
                      <div class="si-team-text-inner">
                        <h3>Desenvolvimento Web</h3>
                        <span>Frontend & Backend</span>

                        <ul>
                          <li>
                            <a href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path
                                  d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fa-brands fa-behance"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-xl-3 col-xxl-3">
                <div class="si-team-box team-bottom">
                  <div class="si-team-thumb">
                    <img src="/assets/img/team/team2.jpg" alt="" />

                    <div class="si-team-text">
                      <div class="si-team-text-inner">
                        <h3>Design & UX/UI</h3>
                        <span>Experiência do Utilizador</span>

                        <ul>
                          <li>
                            <a href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path
                                  d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fa-brands fa-behance"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-xl-3 col-xxl-3">
                <div class="si-team-box team-bottom2">
                  <div class="si-team-thumb">
                    <img src="/assets/img/team/team3.jpg" alt="" />

                    <div class="si-team-text">
                      <div class="si-team-text-inner">
                        <h3>Aplicações Mobile</h3>
                        <span>Android & iOS</span>

                        <ul>
                          <li>
                            <a href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path
                                  d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fa-brands fa-behance"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-xl-3 col-xxl-3">
                <div class="si-team-box team-bottom2">
                  <div class="si-team-thumb">
                    <img src="/assets/img/team/team4.jpg" alt="" />

                    <div class="si-team-text">
                      <div class="si-team-text-inner">
                        <h3>Consultoria em TI</h3>
                        <span>Transformação Digital</span>

                        <ul>
                          <li>
                            <a href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path
                                  d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fa-brands fa-behance"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
     Team area end -->
      </main>

      <Footer />
    </div>
  </div>
</template>
