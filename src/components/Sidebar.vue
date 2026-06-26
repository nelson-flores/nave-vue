<template>
  <!-- si-offcanvus-area-start -->
  <section class="si-offcanvas-area">
    <div class="si-offcanvas-wrapper">
      <div class="si-offcanvas-top d-flex align-items-center justify-content-between">
        <div class="si-offcanvas-logo">
          <router-link to="/">
            <img
              class="logo-1"
              data-width="120"
              src="/assets/img/logo/logo-black.png"
              alt="image"
            />
            <img
              class="logo-2"
              data-width="120"
              src="/assets/img/logo/logo-white.png"
              alt="image"
            />
          </router-link>
        </div>
        <div class="si-offcanvas-close">
          <button class="si-offcanvas-close-btn">
            <svg
              width="37"
              height="38"
              viewBox="0 0 37 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.19141 9.80762L27.5762 28.1924"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.19141 28.1924L27.5762 9.80761"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="si-offcanvas-main">
        <h3 class="si-offcanvas-title">Sobre Nós</h3>
        <p>
          A Nave Consultoria & Serviços é especializada no desenvolvimento de software, consultoria
          em TI, design digital e marketing estratégico. Trabalhamos para transformar ideias em
          soluções tecnológicas inovadoras que impulsionam o crescimento de empresas e organizações.
        </p>
        <div class="si-offcanvas-menu d-xl-none">
          <nav></nav>
        </div>
        <!--div class="si-offcanvas-gallery d-none d-xl-block">
          <div class="row gx-2">
            <div class="col-md-3 col-3">
              <div class="si-offcanvas-gallery-img fix">
                <a class="popup-image" href="/assets/img/offcanvas/offcanvas-1.jpg"
                  ><img src="/assets/img/offcanvas/offcanvas-1.jpg" alt="image"
                /></a>
              </div>
            </div>
            <div class="col-md-3 col-3">
              <div class="si-offcanvas-gallery-img fix">
                <a class="popup-image" href="/assets/img/offcanvas/offcanvas-2.jpg"
                  ><img src="/assets/img/offcanvas/offcanvas-2.jpg" alt="image"
                /></a>
              </div>
            </div>
            <div class="col-md-3 col-3">
              <div class="si-offcanvas-gallery-img fix">
                <a class="popup-image" href="/assets/img/offcanvas/offcanvas-3.jpg"
                  ><img src="/assets/img/offcanvas/offcanvas-3.jpg" alt="image"
                /></a>
              </div>
            </div>
            <div class="col-md-3 col-3">
              <div class="si-offcanvas-gallery-img fix">
                <a class="popup-image" href="/assets/img/offcanvas/offcanvas-4.jpg"
                  ><img src="/assets/img/offcanvas/offcanvas-4.jpg" alt="image"
                /></a>
              </div>
            </div>
          </div>
        </div-->
        <div class="si-offcanvas-contact">
          <h3 class="si-offcanvas-title sm">Informações</h3>
          <ul>
            <li><a href="tel:+258852949759">+258 85 294 9759</a></li>
            <li><a href="mailto:hello@wamexi.com">contacto@nave.co.mz</a></li>
            <li>Nampula, Mo&ccedil;ambique</li>
          </ul>
        </div>
        <div class="si-offcanvas-social">
          <h3 class="si-offcanvas-title sm"><Siga-nos></Siga-nos></h3>
          <ul>
            <li>
              <a href="https://instagram.com/nave.mz">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.25 1.5H4.75C2.95507 1.5 1.5 2.95507 1.5 4.75V11.25C1.5 13.0449 2.95507 14.5 4.75 14.5H11.25C13.0449 14.5 14.5 13.0449 14.5 11.25V4.75C14.5 2.95507 13.0449 1.5 11.25 1.5Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6016 7.5907C10.6818 8.13166 10.5894 8.68414 10.3375 9.16955C10.0856 9.65497 9.68711 10.0486 9.19862 10.2945C8.71014 10.5404 8.15656 10.6259 7.61663 10.5391C7.0767 10.4522 6.57791 10.1972 6.19121 9.81055C5.80451 9.42385 5.54959 8.92506 5.46271 8.38513C5.37583 7.8452 5.46141 7.29163 5.70728 6.80314C5.95315 6.31465 6.34679 5.91613 6.83221 5.66425C7.31763 5.41238 7.87011 5.31998 8.41107 5.4002C8.96287 5.48202 9.47372 5.73915 9.86817 6.1336C10.2626 6.52804 10.5197 7.0389 10.6016 7.5907Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.5742 4.42578H11.5842"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <div class="body-overlay"></div>
  <!-- si-offcanvus-area-end -->
</template>
