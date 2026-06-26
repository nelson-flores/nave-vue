<script setup lang="ts">
import { ref } from 'vue'

import InnerHeader from '@/components/InnerHeader.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
import Preloader from '@/components/Preloader.vue'
import BackTo from '@/components/BackTo.vue'
import Cursor from '@/components/Cursor.vue'

const name = ref('')
const email = ref('')
const description = ref('')
const type = ref('')

function enviar() {
  const mensagem = `
Nome: ${name.value}
Email: ${email.value}
Tipo: ${type.value}
Serviço: ${description.value}
`

  if (name.value == '') {
    $.alert({
      title: 'Importante!',
      content: 'Por favor, forneca suas informacoes!',
    })
    return
  }

  window.open(`https://wa.me/258849301529?text=${encodeURIComponent(mensagem)}`, '_blank')
}
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
                    <h2>Solicite uma Cotação</h2>
                    <span>
                      Pagina Inicial
                      <strong
                        ><i class="fa-sharp fa-regular fa-angles-right"></i> Contacte-nos</strong
                      >
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

        <!-- SI CONTACT AREA -->
        <div class="si-contact-area pt-127">
          <div class="container container-1617">
            <div class="row">
              <div class="col-lg-6">
                <div class="si-section-title">
                  <h2>
                    Solicite um orçamento personalizado<br class="d-none d-xxl-block" />
                    para o seu projeto digital.
                  </h2>
                  <p>
                    Leve sua marca a novos patamares.
                    <br class="d-none d-xxl-block" />Conquiste mais visibilidade, conecte-se com o
                    público certo e transforme sua presença digital em resultados reais,
                    destacando-se em meio à concorrência.
                  </p>
                </div>
                <div class="si-contact-box">
                  <div class="si-contact-shape">
                    <img src="/assets/img/contact/icon.svg" alt="" />
                  </div>
                  <div class="si-contact-text">
                    <h3>Telefone</h3>
                    <span>+258 85 294 9759</span>
                  </div>
                </div>
                <div class="si-contact-box">
                  <div class="si-contact-shape">
                    <img src="/assets/img/contact/icon2.svg" alt="" />
                  </div>
                  <div class="si-contact-text">
                    <h3>Email</h3>
                    <span>contacto@nave.co.mz</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="si-contact-main">
                  <h4>Conte-nos sobre o seu projecto</h4>
                  <form action="" @submit.prevent="enviar">
                    <div class="si-team-details-from pb-27">
                      <input
                        class="contact-border"
                        type="text"
                        placeholder="Seu Nome"
                        v-model="name"
                      />
                      <div class="si-team-details-icon2">
                        <a href="#"><img src="/assets/img/team-details/team-d-1.svg" alt="" /></a>
                      </div>
                    </div>
                    <div class="si-team-details-from pb-27">
                      <input
                        class="contact-border"
                        type="text"
                        placeholder="Seu Email"
                        v-model="email"
                      />
                      <div class="si-team-details-icon2">
                        <a href="#"><img src="/assets/img/team-details/team-d-2.svg" alt="" /></a>
                      </div>
                    </div>
                    <div class="si-team-details-from pb-27">
                      <select class="select-items contact-border select-pt" v-model="type">
                        <option class="select-items2" value="Select Subject">
                          De que tipo de servico se trata
                        </option>
                        <option class="select-items2" value="software">
                          Desenvolvimento de Software
                        </option>
                        <option class="select-items2" value="web">Criação de Website</option>
                        <option class="select-items2" value="marketing">Marketing Digital</option>
                        <option class="select-items2" value="design">Design Gráfico</option>
                        <option class="select-items2" value="trafego">
                          Gestão de Trafego Pago
                        </option>
                        <option value="consultoria">Consultoria em TI</option>
                      </select>

                      <div class="si-team-details-icon2">
                        <a href="#"><img src="/assets/img/team-details/team-d-4.svg" alt="" /></a>
                      </div>
                    </div>
                    <div class="si-team-details-from pb-27">
                      <textarea
                        class="contact-border"
                        placeholder="Descreva o seu pedido"
                        v-model="description"
                      ></textarea>
                      <div class="si-team-details-icon2">
                        <a href="#"><img src="/assets/img/team-details/team-d-4.svg" alt="" /></a>
                      </div>
                      <button type="submit" class="si-team-details-btn" href="#">Enviar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  </div>

  <!-- JS here -->
</template>
