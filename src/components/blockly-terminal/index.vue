<script setup lang="ts">

</script>

<template>
  <div>

    <body>
      <slot name="top"></slot>
      <main id="container">
        <!-- <v-responsive aspect-ratio="16 / 9" > -->
        <div id="terminal">
          <!-- Terminal Bar -->
          <section id="terminal__bar">
            <div id="bar__buttons" class="px-1">
              <v-icon size="xs" :icon="mdiConsoleLine" color="white"></v-icon>
            </div>
            <p id="bar__user">ICILS 2077: ~</p>
            <v-spacer />
            <div id="bar__buttons" class="pr-1">
              <v-icon button size="xs" :icon="mdiClose" color="red"></v-icon>
              <v-icon size="xs" :icon="mdiMinus" color="yellow"></v-icon>
              <v-icon size="xs" :icon="mdiCheck" color="green"></v-icon>
            </div>

          </section>
          <!-- Terminal Body -->

          <section id="terminal__body">
            <perfect-scrollbar>
              <!-- <div id="terminal__prompt">
            <span id="terminal__prompt--user">@icils:</span>
            <span id="terminal__prompt--location">~</span>
            <span id="terminal__prompt--bling">$</span>
            <span id="terminal__prompt--cursor"></span>
          </div> -->
              <slot />
            </perfect-scrollbar>
          </section>
        </div>
        <!-- </v-responsive> -->
      </main>
    </body>
  </div>
</template>

<style lang="scss" scoped>
@use "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
// @import url('https://fonts.googleapis.com/css?family=Ubuntu');
// @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono');

body {
  background: linear-gradient(45deg, #0C2878 0%, #92A7FD 100%);
  font-family: "'Fira Mono', monospace";
  font-size: 0.875rem;
  margin: 0px;
  overflow: hidden;
}

#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36vh;

}

#terminal {
  width: 38vw;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  // background: rgb(40, 42, 56);
  background: #171B2C;
  opacity: 1;
}

#terminal__bar {
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  padding: 0 8px;
  box-sizing: border-box;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  // background: #282c34;
  background: #424659;
  font-family: "'Fira Mono', monospace";
  font-weight: 700;
}

#bar__user {
  color: #d5d0ce;
  margin-left: 6px;
  font-size: 1em;
  font-weight: 800;
  // line-height: 1.6%;


}

#terminal__body {
  max-height: 23vh;
  outline: none;
  color: #acffe7;
  background: --terminal-background;
  font-family: "'Fira Mono', monospace";
  padding: 0px;
  font-weight: normal;
  line-height: normal;
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  padding: 5px 5px;
  border-width: 1px;
  border-style: inset;
  /* border-color: -internal-light-dark(#333544, #2a2d3f); */
  border-color: rgba(223, 141, 231, 0.288);
  // border-color: #85468E;

}

.ps {
  height: 21vh;
}

#terminal__prompt {
  display: flex;
}

#terminal__prompt--user {
  color: --terminal-text;
  /* line-height: 100%; */
  margin-left: 5px;
  opacity: 0.85;
}

#terminal__prompt--location {
  color: --terminal-prompt;
}

#terminal__prompt--bling {
  color: --terminal-bling;
  margin-right: 0.25em;
  white-space: pre;
}

#terminal__prompt--cursor {
  display: block;
  height: 17px;
  width: 8px;
  margin-left: 9px;
  animation: blink 1200ms linear infinite;
}

@keyframes blink {
  0% {
    background: #ffffff;
  }

  49% {
    background: #ffffff;
  }

  60% {
    background: transparent;
  }

  99% {
    background: transparent;
  }

  100% {
    background: #ffffff;
  }
}

@media (max-width: 600px) {
  #terminal {
    max-height: 90%;
    width: 90%;
  }
}
</style>
<script lang="ts">
import { mdiConsoleLine, mdiClose, mdiMinus, mdiCheck } from '@mdi/js';

export default {
  data: () => ({
    mdiConsoleLine,
    mdiClose,
    mdiMinus,
    mdiCheck,
  }),
}

</script>
