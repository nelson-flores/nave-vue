<script setup>
import InnerHeader from '@/components/InnerHeader.vue'
import Preloader from '@/components/Preloader.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'

import Cursor from '@/components/Cursor.vue'
import BackTo from '@/components/BackTo.vue'
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
                    <h2>Portfolio</h2>
                    <span>
                      Pagina Inicial
                      <strong><i class="fa-sharp fa-regular fa-angles-right"></i>Portfolio</strong>
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

        <div class="si-project-3-bg2 pt-75 pb-124">
          <div class="container container-1617">
            <div class="row">
              <div class="col-lg-6">
                <div class="si-project-3-box">
                  <div
                    class="si-project-3-thumb portfolio-radius si-portfolio-thumb-height3 si_fade_anim fix not-hide-cursor w-100"
                    data-cursor="View<br>Demo"
                  >
                    <a class="cursor-hide img-cover" href="https://fena.gov.mz"
                      ><img data-speed=".8" src="/assets/img/pf1.png" alt="image" class="w-100"
                    /></a>
                  </div>
                  <div class="si-project-3-text">
                    <h3>
                      <a class="underline-black" href="https://fena.gov.mz">fena.gov.mz</a>
                    </h3>
                    <span>Pagina Oficial da Feira Economica de Nampula</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="si-project-3-box">
                  <div
                    class="si-project-3-thumb portfolio-radius si-portfolio-thumb-height3 si_fade_anim fix not-hide-cursor"
                    data-cursor="View<br>Demo"
                  >
                    <a class="cursor-hide img-cover" href="https://easygames.co.mz"
                      ><img data-speed=".8" src="/assets/img/pf2.png" alt="image"
                    /></a>
                  </div>
                  <div class="si-project-3-text">
                    <h3>
                      <a class="underline-black" href="https://easygames.co.mz">easygames.co.mz</a>
                    </h3>
                    <span>Pagina Oficial</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="si-project-3-box">
                  <div
                    class="si-project-3-thumb portfolio-radius si-portfolio-thumb-height3 si_fade_anim fix not-hide-cursor w-100"
                    data-cursor="View<br>Demo"
                  >
                    <a class="cursor-hide img-cover" href="https://forumlumen.online"
                      ><img data-speed=".8" src="/assets/img/work11.png" class="w-100" alt="image"
                    /></a>
                  </div>
                  <div class="si-project-3-text">
                    <h3>
                      <a class="underline-black" href="https://forumlumen.online"
                        >forumlumen.online</a
                      >
                    </h3>
                    <span>Forum de Discussao</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="si-project-3-box">
                  <div
                    class="si-project-3-thumb portfolio-radius si-portfolio-thumb-height3 si_fade_anim fix not-hide-cursor"
                    data-cursor="View<br>Demo"
                  >
                    <a class="cursor-hide img-cover" href="https://badjai.com"
                      ><img data-speed=".8" src="/assets/img/work-1.png" alt="image"
                    /></a>
                  </div>
                  <div class="si-project-3-text">
                    <h3>
                      <a class="underline-black" href="https://badjai.com">badjai.com</a>
                    </h3>
                    <span>Baixe Musicas e Video Clipes</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="si-project-3-box">
                  <div
                    class="si-project-3-thumb portfolio-radius si-portfolio-thumb-height3 si_fade_anim fix not-hide-cursor"
                    data-cursor="View<br>Demo"
                  >
                    <a class="cursor-hide img-cover" href="https://openshare.site"
                      ><img data-speed=".8" src="/assets/img/os.png" alt="image"
                    /></a>
                  </div>
                  <div class="si-project-3-text">
                    <h3>
                      <a class="underline-black" href="https://openshare.site">openshare.site</a>
                    </h3>
                    <span>Encontre e partilhe links directos</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-12">
                <div class="si-project-3-box">
                  <div
                    class="si-project-3-thumb portfolio-radius si-portfolio-thumb-height3 si_fade_anim fix not-hide-cursor w-100"
                    data-cursor="View<br>Demo"
                  >
                    <a class="cursor-hide img-cover" href="https://job-radar.online"
                      ><img data-speed=".8" src="/assets/img/work-3.png" class="w-100" alt="image"
                    /></a>
                  </div>
                  <div class="si-project-3-text">
                    <h3>
                      <a class="underline-black" href="https://job-radar.online"
                        >Job-Radar.online</a
                      >
                    </h3>
                    <span>Motor de Pesquisa para vagas de emprego</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>
