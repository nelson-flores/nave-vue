<script setup>
import InnerHeader from '@/components/InnerHeader.vue'
import Preloader from '@/components/Preloader.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'

import { ref } from 'vue'
import Cursor from '@/components/Cursor.vue'
import BackTo from '@/components/BackTo.vue'

const photos = ref([
  {
    url: '/graphics/orbita.jpg',
    name: 'OrbitaCreatives',
    description: 'Logotipo conceitual',
  },
  {
    url: '/graphics/olima-logo-w-bg.png',
    name: 'Olima Market',
    description: 'Logotipo conceitual',
  },
  {
    url: '/graphics/gohicover-1024x1024.png',
    name: 'Go Higher',
    description: 'Capa de musica',
  },
  {
    url: '/graphics/PurpleRssosesLOGO-1-1024x1024.jpg',
    name: 'PurpleRoses',
    description: 'Logotipo de marca',
  },
  {
    url: '/graphics/white-1024x1024.jpg',
    name: 'Erica Carlos',
    description: 'Logotipo - Salao de Beleza',
  },
])
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
                    <h2>Portfolio de Design</h2>
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
              <div v-for="(photo, i) in photos" :key="i" class="col-lg-6">
                <div class="si-project-3-box">
                  <div
                    class="si-project-3-thumb portfolio-radius si-portfolio-thumb-height3 si_fade_anim fix not-hide-cursor w-100"
                    data-cursor="View<br>Demo"
                  >
                    <img data-speed=".8" :src="photo.url" alt="image" class="w-100" />
                  </div>
                  <div class="si-project-3-text">
                    <h3>
                      {{ photo.name }}
                    </h3>
                    <span>{{ photo.description }}</span>
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
