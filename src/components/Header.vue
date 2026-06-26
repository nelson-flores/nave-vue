<script setup>
import Nav from './Nav.vue'
</script>
<template>
  <!-- header area start -->
  <div id="header-sticky" class="si-header-area header-transparent">
    <div class="container container-1748">
      <div class="row align-items-center">
        <div class="col-xl-2 col-lg-6 col-6">
          <div class="si-header-logo">
            <router-link to="/">
              <img
                data-width="167"
                class="logo-black"
                src="/assets/img/logo/logo-black.png"
                alt="image"
              />
            </router-link>
          </div>
        </div>
        <div class="col-xl-10 col-lg-6 col-6">
          <div class="si-header-main">
            <div class="si-header-main2">
              <div class="si-header-right">
                <div class="si-header-box d-none d-xl-block">
                  <div class="si-header-menu si-header-dropdown dropdown-white-bg">
                    <nav class="si-mobile-menu-active">
                      <Nav />
                    </nav>
                  </div>
                </div>
                <div class="si-header-bar">
                  <button class="si-offcanvas-open-btn">
                    <span>
                      <img src="/assets/img/header/close.svg" alt="" />
                    </span>
                  </button>
                </div>
                <div class="si-header-btn">
                  <a class="si-btn-one" href="#">
                    <span class="btn-text"> <span>Fale Connosco</span> </span>
                    <span class="btn-icon"><i class="fa-sharp fa-regular fa-arrow-right"></i></span
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- header area end -->
</template>
