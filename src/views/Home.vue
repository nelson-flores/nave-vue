<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Preloader from '@/components/Preloader.vue'
import Sidebar from '@/components/Sidebar.vue'
import BackTo from '@/components/BackTo.vue'
import Cursor from '@/components/Cursor.vue'
</script>

<template>
  <Cursor />
  <Preloader />
  <BackTo />
  <Header />
  <Sidebar />

  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        <!-- Hero area start -->
        <section class="si-hero-area">
          <div class="container container-1617">
            <div class="row">
              <div class="col-lg-12">
                <div class="si-hero-text text-uppercase">
                  <h1 class="si-text-revel-anim">
                    Da ideia <br class="d-none d-xxl-block" />à solução<br
                      class="d-none d-xxl-block"
                    />
                    digital.
                  </h1>
                </div>
                <div class="si-hero-text2 col-md-6 float-end">
                  <p>
                    Produzimos softwares sob demanda e oferecemos consultoria em sistemas, design,
                    marketing e trafego pago, criando soluções digitais que impulsionam negócios.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="si-hero-thumb fix z-index-1">
            <img class="w-100" data-speed=".4" src="/assets/img/hero-bg-3.jpg" alt="image" />
          </div>
          <div class="si-hero-shape">
            <img src="/assets/img/hero/shape.png" alt="" />
          </div>
          <div class="si-hero-shape2">
            <img src="/assets/img/hero/shape2.png" alt="" />
          </div>
        </section>
        <!-- Hero area end -->

        <!-- About area start -->
        <section class="si-about-area pt-124 pb-130">
          <div class="container container-1617">
            <div class="row">
              <div class="col-lg-4">
                <div class="si-section-title">
                  <span>Sobre N&oacute;s</span>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="si-about-text">
                  <h2 class="si-text-revel-anim">
                    Expanda sua influência <br class="d-none d-xxl-block" />
                    online!
                  </h2>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="si-about-text2">
                  <h1>2025 - Presente</h1>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="si-about-box">
                  <div class="row">
                    <div class="col-md-6 p-1">
                      <img class="w-100" src="/assets/img/pf1.png" alt="" />
                    </div>
                    <div class="col-md-6 p-1">
                      <img class="w-100" src="/assets/img/pf2.png" alt="" />
                    </div>

                    <div class="col-12">
                      <h2>100+ Clientes Satisfeitos</h2>
                      <p>
                        Leve sua marca a novos patamares. <br />
                        Conquiste mais visibilidade, conecte-se com o público certo e <br />
                        transforme sua presença digital em resultados reais, destacando-se em meio à
                        concorrência.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- About area end -->

        <!-- Brand area start -->
        <div class="si-brand-area pb-130">
          <div class="container container-1617">
            <div class="row">
              <div class="col-lg-12">
                <div class="si-brand-wrappere border-0">
                  <div class="si-brand-box border-0">
                    <img src="/assets/img/brand/fena.png" alt="" />
                  </div>
                  <div class="si-brand-box border-0">
                    <img src="https://forumlumen.online/assets/images/logo.png" alt="" />
                  </div>
                  <div class="si-brand-box border-0">
                    <img src="/assets/img/brand/badjai.png" alt="" />
                  </div>
                  <div class="si-brand-box border-0">
                    <img src="/assets/img/brand/jobradar.png" alt="" />
                  </div>
                  <div class="si-brand-box border-0">
                    <img src="/assets/img/brand/easygames.png" alt="" />
                  </div>
                  <div class="si-brand-box border-0">
                    <img src="/assets/img/brand/openshare.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Brand area end -->

        <!-- Service area start -->
        <section
          class="si-service-area pt-124 pb-130 position-relative z-1 animated-bg flowmap-deformation-wrapper"
          data-background="/assets/img/service/bg.jpg"
          data-bg-width="100%"
          data-bg-height="100%"
        >
          <div class="container container-1617">
            <div class="row justify-content-between align-items-center tw-mb-10">
              <div class="col-lg-12">
                <div class="si-service-right">
                  <div class="si-section-title pb-60 si-white">
                    <span>Nossos Serviços</span>
                    <h2 class="si-text-revel-anim">
                      Esperimente Nossos
                      <br class="d-none d-xxl-block" />Serviços.
                    </h2>
                    <p>
                      Ao selecionar um prestador de servi&ccedil;o, é essencial considerar a sua
                      reputação, experiência e as necessidades específicas do seu projeto.
                    </p>
                  </div>
                  <div class="si-service-btn">
                    <router-link class="si-btn-one black-bg-btn" to="/projects">
                      <span class="btn-text">
                        <span>Ver Portfólio</span>
                      </span>
                      <span class="btn-icon btn-icon2"
                        ><i class="fa-sharp fa-regular fa-arrow-right"></i></span
                    ></router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-xl-5 col-lg-5">
                <div
                  class="si-service-list-thumb-wrap position-relative"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div id="si-service-thumb" class="si-service-list-thumb-1">
                    <img
                      class="si-service-list-thumb-1 tw-rounded-xl"
                      src="/assets/img/work-2.png"
                      alt="thumb1"
                    />
                    <img
                      class="si-service-list-thumb-2 tw-rounded-xl"
                      src="/assets/img/work0.png"
                      alt="thumb2"
                    />
                    <img
                      class="si-service-list-thumb-3 tw-rounded-xl"
                      src="/assets/img/orbita.jpg"
                      alt="thumb3"
                    />
                    <img
                      class="si-service-list-thumb-4 tw-rounded-xl"
                      src="/assets/img/it.jpg"
                      alt="thumb4"
                    />
                  </div>
                </div>
              </div>
              <div class="col-xl-7 col-lg-7">
                <div
                  class="si-service-list-wrap"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <div
                    class="si-service-list-item d-flex align-items-center justify-content-between tw-mb-7 cursor-pointer position-relative active"
                    rel="si-service-list-thumb-1"
                  >
                    <div class="si-service-list-left">
                      <h1 class="si-service-list-title tw-text-805 fw-semibold tw-transition-3">
                        <a class="text--white tw-transition-3" href="#">Softwares sob Demanda</a>
                      </h1>
                    </div>
                  </div>
                  <div
                    class="si-service-list-item d-flex align-items-center justify-content-between tw-mb-7 cursor-pointer position-relative"
                    rel="si-service-list-thumb-2"
                  >
                    <div class="si-service-list-left">
                      <h1 class="si-service-list-title tw-text-805 fw-semibold tw-transition-3">
                        <a class="text--white tw-transition-3" href="#"
                          >Web Design & Desenvolvimento</a
                        >
                      </h1>
                    </div>
                  </div>
                  <div
                    class="si-service-list-item d-flex align-items-center justify-content-between tw-mb-7 cursor-pointer position-relative"
                    rel="si-service-list-thumb-3"
                  >
                    <div class="si-service-list-left">
                      <h1 class="si-service-list-title tw-text-805 fw-semibold tw-transition-3">
                        <a class="text--white tw-transition-3" href="#">Branding & Identidade</a>
                      </h1>
                    </div>
                  </div>
                  <div
                    class="si-service-list-item d-flex align-items-center justify-content-between tw-mb-7 cursor-pointer position-relative"
                    rel="si-service-list-thumb-4"
                  >
                    <div class="si-service-list-left">
                      <h1 class="si-service-list-title tw-text-805 fw-semibold tw-transition-3">
                        <a class="text--white tw-transition-3" href="#">Consultoria em TI</a>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Service area end -->

        <!-- Project area start -->
        <section class="si-project-area pt-124 pb-130">
          <div class="container container-1617">
            <div class="row">
              <div class="col-lg-12">
                <div class="si-section-title pb-60 text-center relative-tag">
                  <span>Projectos</span>
                  <h2 class="si-text-revel-anim">Vejos Nossos Produtos</h2>
                  <div class="si-project-navigation">
                    <div class="si-button-next navigation-icon">
                      <a href="#"><img src="/assets/img/project/left.svg" alt="" /></a>
                    </div>
                    <div class="si-button-prev navigation-icon">
                      <a href="#"><img src="/assets/img/project/right.svg" alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="si-project swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="si-project-box">
                        <div class="si-project-img">
                          <img src="/assets/img/work-3.png" alt="" />
                        </div>
                        <div class="si-project-right">
                          <div class="si-project-right-inner">
                            <div class="si-project-number">
                              <span>01</span>
                            </div>
                            <div class="si-project-text">
                              <h3>
                                <a class="underline-black" href="jobradar.online">Job-Radar</a>
                              </h3>
                              <span class="project-dot"
                                >Encontre vagas de emprego de forma facil</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="si-project-box">
                        <div class="si-project-img">
                          <img src="/assets/img/work11.png" alt="" />
                        </div>
                        <div class="si-project-right">
                          <div class="si-project-right-inner">
                            <div class="si-project-number">
                              <span>02</span>
                            </div>
                            <div class="si-project-text">
                              <h3>
                                <a class="underline-black" href="portfolio-details.html"
                                  >Forum Lumen</a
                                >
                              </h3>
                              <span class="project-dot">Web Design</span>
                              <span>Unique Visual Identity</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="si-project-box">
                        <div class="si-project-img">
                          <img src="/assets/img/work-1.png" alt="" />
                        </div>
                        <div class="si-project-right">
                          <div class="si-project-right-inner">
                            <div class="si-project-number">
                              <span>03</span>
                            </div>
                            <div class="si-project-text">
                              <h3>
                                <a class="underline-black" href="badjai.com">Badjai</a>
                              </h3>
                              <span class="project-dot">Audio, Video</span>
                              <span>Unique Visual Identity</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- project area end -->

        <!-- process area start -->
        <section class="si-process-area pt-124 pb-124">
          <div class="container container-1617">
            <div class="row">
              <div class="col-lg-6">
                <div class="si-section-title">
                  <span>Nosso Processo Criativo</span>
                  <h2 class="si-text-revel-anim">
                    Como ajudamos a expandir <br class="d-none d-xxl-block" />
                    o seu negócio
                  </h2>
                </div>
                <div class="si-process-box">
                  <div class="si-process-border">
                    <a href="#"><img src="/assets/img/process/line.svg" alt="" /></a>
                  </div>
                  <div class="si-process-right pb-70">
                    <div class="si-process-icon">
                      <a href="#"><img src="/assets/img/process/shape.png" alt="" /></a>
                    </div>
                    <div class="si-process-text">
                      <h3>Iniciação e Planeamento</h3>
                      <p>Definição de objetivos, requisitos, escopo e estratégia do projeto.</p>
                    </div>
                  </div>
                  <div class="si-process-right pb-70">
                    <div class="si-process-icon">
                      <a href="#"><img src="/assets/img/process/shape2.png" alt="" /></a>
                    </div>
                    <div class="si-process-text">
                      <h4>Execução e Desenvolvimento</h4>
                      <p>
                        Implementação de soluções, desenvolvimento de funcionalidades e gestão das
                        entregas.
                      </p>
                    </div>
                  </div>
                  <div class="si-process-right">
                    <div class="si-process-icon">
                      <a href="#"><img src="/assets/img/process/shape3.png" alt="" /></a>
                    </div>
                    <div class="si-process-text">
                      <h4>Testes e Manutenção</h4>
                      <p>
                        Garantia da qualidade, correção de falhas e manutenção contínua do sistema.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="si-process-thumb" data-background="/assets/img/al.jpg"></div>
        </section>
        <!-- process area end -->

        <!-- Testimonial area start -->
        <section class="si-testimonial-area pt-124">
          <div class="container container-1617">
            <div class="row">
              <div class="col-lg-4">
                <div class="si-testimonial-shape bg-transparent">
                  <img class="rotate2" src="/assets/img/testimonial/shape-text.png" alt="" />
                  <div class="si-testimonial-icon">
                    <!--img src="/assets/img/testimonial/Icon.svg" alt="" /-->
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
                            “A equipa da Nave compreendeu rapidamente as necessidades do nosso
                            projecto e apresentou soluções eficientes e inovadoras. O acompanhamento
                            durante todo o processo foi excelente, resultando num produto final de
                            elevada qualidade. Recomendamos os seus serviços com total confiança.”
                          </h2>
                        </div>
                        <div class="si-testimonial-main mb-4">
                          <div class="si-testimonial-thumb">
                            <img src="/3135823.png" alt="" width="80px" />
                          </div>
                          <div class="si-testimonial-address">
                            <h3>Cliente Nave</h3>
                            <span>Gestor de Marketing</span>
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
        <!-- Testimonial area end -->

        <!-- FAQ area start -->
        <section class="si-faq-area pt-124">
          <div class="container container-1617">
            <div class="row">
              <div class="col-lg-5">
                <div class="si-section-title pb-78">
                  <span>Perguntas Frequentes</span>
                  <h2 class="si-text-revel-anim">
                    Dúvidas e <br class="d-none d-xxl-block" />
                    respostas
                  </h2>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="si-faq-box">
                  <div class="si-faq-accordion-wrap">
                    <div class="accordion" id="accordionExample1">
                      <div class="accordion-items">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-buttons"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne1"
                            aria-expanded="true"
                            aria-controls="collapseOne1"
                          >
                            Quais serviços a Nave Consultoria & Serviços oferece?
                            <span class="accordion-icon"></span>
                          </button>
                        </h2>
                        <div
                          id="collapseOne1"
                          class="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample1"
                        >
                          <div class="accordion-body">
                            <p>
                              Oferecemos desenvolvimento de software, criação de websites, sistemas
                              de gestão, consultoria tecnológica, suporte informático e soluções
                              digitais personalizadas para empresas e instituições.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-items">
                        <h3 class="accordion-header">
                          <button
                            class="accordion-buttons collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo2"
                            aria-expanded="false"
                            aria-controls="collapseTwo2"
                          >
                            Quanto tempo leva para concluir um projeto?
                            <span class="accordion-icon"></span>
                          </button>
                        </h3>
                        <div
                          id="collapseTwo2"
                          class="accordion-collapse collapse"
                          data-bs-parent="#accordionExample1"
                        >
                          <div class="accordion-body">
                            <p>
                              O prazo varia conforme a complexidade do projeto. Após a análise dos
                              requisitos, apresentamos um cronograma claro e realista para a
                              execução dos trabalhos.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-items">
                        <h3 class="accordion-header">
                          <button
                            class="accordion-buttons collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree3"
                            aria-expanded="false"
                            aria-controls="collapseThree3"
                          >
                            Trabalham com empresas de qualquer dimensão?
                            <span class="accordion-icon"></span>
                          </button>
                        </h3>
                        <div
                          id="collapseThree3"
                          class="accordion-collapse collapse"
                          data-bs-parent="#accordionExample1"
                        >
                          <div class="accordion-body">
                            <p>
                              Sim. Prestamos serviços a empreendedores, pequenas e médias empresas,
                              organizações e instituições que necessitam de soluções tecnológicas
                              eficientes.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-items">
                        <h3 class="accordion-header">
                          <button
                            class="accordion-buttons collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour4"
                            aria-expanded="false"
                            aria-controls="collapseFour4"
                          >
                            Em quais áreas possuem maior experiência?
                            <span class="accordion-icon"></span>
                          </button>
                        </h3>
                        <div
                          id="collapseFour4"
                          class="accordion-collapse collapse"
                          data-bs-parent="#accordionExample1"
                        >
                          <div class="accordion-body">
                            <p>
                              Atuamos principalmente em desenvolvimento web, sistemas empresariais,
                              transformação digital, consultoria tecnológica, automação de processos
                              e soluções IoT.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-items">
                        <h3 class="accordion-header">
                          <button
                            class="accordion-buttons collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive5"
                            aria-expanded="false"
                            aria-controls="collapseFive5"
                          >
                            O que preciso fornecer para iniciar um projeto?
                            <span class="accordion-icon"></span>
                          </button>
                        </h3>
                        <div
                          id="collapseFive5"
                          class="accordion-collapse collapse"
                          data-bs-parent="#accordionExample1"
                        >
                          <div class="accordion-body">
                            <p>
                              Basta partilhar os seus objetivos e necessidades. A nossa equipa fará
                              o levantamento dos requisitos e apresentará a melhor solução para o
                              seu negócio.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-items">
                        <h3 class="accordion-header">
                          <button
                            class="accordion-buttons collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix6"
                            aria-expanded="false"
                            aria-controls="collapseSix6"
                          >
                            O que diferencia a Nave de outras empresas?
                            <span class="accordion-icon"></span>
                          </button>
                        </h3>
                        <div
                          id="collapseSix6"
                          class="accordion-collapse collapse"
                          data-bs-parent="#accordionExample1"
                        >
                          <div class="accordion-body">
                            <p>
                              Combinamos experiência técnica, atendimento personalizado e
                              compromisso com resultados, desenvolvendo soluções alinhadas aos
                              objetivos de cada cliente.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-items">
                        <h3 class="accordion-header">
                          <button
                            class="accordion-buttons collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven7"
                            aria-expanded="false"
                            aria-controls="collapseSeven7"
                          >
                            A Nave oferece suporte após a entrega do projeto?
                            <span class="accordion-icon"></span>
                          </button>
                        </h3>
                        <div
                          id="collapseSeven7"
                          class="accordion-collapse collapse"
                          data-bs-parent="#accordionExample1"
                        >
                          <div class="accordion-body">
                            <p>
                              Sim. Disponibilizamos manutenção, atualizações e suporte técnico
                              contínuo para garantir o funcionamento e a evolução das soluções
                              implementadas.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-items accordion-border">
                        <h3 class="accordion-header">
                          <button
                            class="accordion-buttons collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEight8"
                            aria-expanded="false"
                            aria-controls="collapseEight8"
                          >
                            Como posso solicitar uma cotação?
                            <span class="accordion-icon"></span>
                          </button>
                        </h3>
                        <div
                          id="collapseEight8"
                          class="accordion-collapse collapse"
                          data-bs-parent="#accordionExample1"
                        >
                          <div class="accordion-body">
                            <p>
                              Pode entrar em contacto através do formulário do website, telefone,
                              WhatsApp ou e-mail. Após analisar as suas necessidades, enviaremos uma
                              proposta personalizada.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- FAQ area end -->

        <!--section class="si-blog-area pt-120 pb-130">
          <div class="container container-1617">
            <div class="row">
              <div class="col-lg-5 p-0">
                <div class="si-blog-left">
                  <div class="si-section-title">
                    <span>Our Blog</span>
                    <h2 class="si-text-revel-anim">
                      Our Experts Team <br class="d-none d-xxl-block" />
                      Is Always Ready To <br class="d-none d-xxl-block" />
                      Help You
                    </h2>
                    <p>
                      We are digital agency that help businesses of develop
                      <br class="d-none d-xxl-block" />
                      immersive and engaging user experience.
                    </p>
                  </div>
                  <div class="si-blog-btn">
                    <a class="si-btn-one" href="#">
                      <span class="btn-text"> <span>See All Blogs</span> </span>
                      <span class="btn-icon"><img src="/assets/img/header/right.svg" alt="" /></span
                    ></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 p-0">
                <div class="si-blog-main">
                  <div class="si-blog-box mr-45">
                    <div class="si-blog-img">
                      <img src="/assets/img/blog/blog4.jpg" alt="" />
                    </div>
                    <div class="si-blog-text">
                      <h3>
                        <span class="project-dot2">Web Desing</span> <span>02 March, 2026</span>
                      </h3>
                      <h4>
                        <a class="underline-black" href="blog-details.html"
                          >Mastering customer <br />
                          journeys with marketing.</a
                        >
                      </h4>
                    </div>
                  </div>
                  <div class="si-blog-box">
                    <div class="si-blog-img">
                      <img src="/assets/img/blog/blog5.jpg" alt="" />
                    </div>
                    <div class="si-blog-text">
                      <h3>
                        <span class="project-dot2">Web Desing</span> <span>02 March, 2026</span>
                      </h3>
                      <h4>
                        <a class="underline-black" href="blog-details.html"
                          >Mastering customer <br />
                          journeys with marketing.</a
                        >
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="si-blog-shape-text">
            <h5>Our Blog</h5>
          </div>
        </section-->
      </main>

      <Footer />
    </div>
  </div>
</template>
