<script setup>
import Nav from './Nav.vue'
</script>
<template>
  <!-- header area start -->
  <div id="header-sticky-black" class="si-header-area header-transparent si-header-3-area">
    <div class="container container-1619">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="si-header-3-main">
            <div class="si-header-logo">
              <router-link to="/">
                <img
                  data-width="167"
                  class="logo-black"
                  src="/assets/img/logo/logo-white.png"
                  alt="image"
                />
              </router-link>
            </div>
            <div class="si-header-main si-header-2-main si-header-3-left">
              <div class="si-header-right">
                <div class="si-header-box d-none d-xl-block">
                  <div class="si-header-menu si-header-3-menu si-header-dropdown dropdown-white-bg">
                    <nav class="si-mobile-menu-active">
                      <Nav />
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div class="si-header-2-btn-main">
              <div class="si-header-2-bar si-header-3-bar">
                <button class="si-header-2-bar-inner si-header-3-bar-inner si-offcanvas-open-btn">
                  <span class="line-one"></span>
                  <span class="line-two"></span>
                  <span class="line-three"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- header area end -->
</template>
