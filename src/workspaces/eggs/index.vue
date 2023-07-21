<script setup lang="ts">
import { onMounted } from "vue";
import { useTheme } from 'vuetify';
// Components
import Blockly from "blockly";
import BlocklyComponent from "../../components/BlocklyComponent.vue";
import BlocklyTerminal from "../../components/blockly-terminal/index.vue";
import ContentCard from "../../components/ContentCard.vue";
// Plugins
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
// Stores
import { optionsStore, workspaceStore } from "../../stores/workspaces";
import * as functions from "../../stores/workspaces";
import { outputsStore } from "../../stores/workspaces";
// Workspace data
import toolbox from "./toolbox.json";
import startBlocks from "./startBlocks.json";
// Set store data
optionsStore.toolbox = toolbox;
workspaceStore.startBlocks = startBlocks;
const workspace = Blockly.getMainWorkspace();
workspaceStore.workspace = workspace;

// TODO:

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'myCustomLightTheme' : 'myCustomDarkTheme';
}

onMounted(() => {
  functions.loadJSON();
});
</script>

<template>
  <v-app id="app">
    <BlocklyComponent  id="blockly1" :options="optionsStore" ref="workspace">
    </BlocklyComponent>
    <v-card id="content" flat class="mx-auto rounded-0">
      <!-- Terminal Start -->
      <!-- TODO: Make the terminal a SFC -->
      <BlocklyTerminal id="terminal">
        <template v-slot:top>
          <v-toolbar
            flat
            class="rounded-0"
            density="compact"
            color="secondary-container"
          >
          <v-row class="mx-3">
          <v-icon color="secondary" :icon="mdiConsoleLine"></v-icon>
            <v-toolbar-title class="ml-2 font-weight-medium" color="on-secondary-container">
              Blockly Terminal
            </v-toolbar-title>
          </v-row>
          </v-toolbar>
        </template>

        <v-sheet height="100%" class="text-green-accent-2 bg-transparent">
          <div v-if="!outputsStore.msg" id="terminal__prompt">
            <span id="terminal__prompt--user">@icils:</span>
            <span id="terminal__prompt--location">~</span>
            <span id="terminal__prompt--bling">$</span>
            <span id="terminal__prompt--cursor"></span>
          </div>

          <div
            v-for="message in outputsStore.msg"
            :key="message"
            id="terminal__prompt"
          >
            <span id="terminal__prompt--user">@icils:</span>
            <span id="terminal__prompt--location">~</span>
            <span id="terminal__prompt--bling">$</span>
            <span class="ml-0">{{ message }}</span>
          </div>

          <div v-if="outputsStore.msg" id="terminal__prompt">
            <span id="terminal__prompt--user">@icils:</span>
            <span id="terminal__prompt--location">~</span>
            <span id="terminal__prompt--bling">$</span>
            <span id="terminal__prompt--cursor"></span>
          </div>
        </v-sheet>
      </BlocklyTerminal>
      <!-- Terminal End -->

      <!-- Start content card -->
      <v-container id="content-bottom" class="pa-0 ma-0">
        <ContentCard id="cotent-card">
          <!-- Start Tab 1 Content -->
          <template v-slot:tab-1>
            <!-- <v-card-title class="text-h5">Unscramble the eggs</v-card-title> -->

            <v-card-text class="text-h6 pb-0">Unscramble the eggs</v-card-text>
            <v-card-text>
              <p class="text-body-1">
                The string given to your function has had an "egg" inserted
                directly after each consonant. You need to return the string
                before it became eggcoded.
              </p>
            </v-card-text>
            <v-card-text class="text-h6 pb-0">Example</v-card-text>

            <!-- TODO: Install antfu/vite-plugin-md -->
            <ssh-pre class="ssh-pre__content__example" reactive language="js">
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"
            </ssh-pre>
          </template>
          <!-- End Tab 1 Content -->

          <!-- Start Tab 2 Content -->
          <template v-slot:tab-2>
            <v-card-title class="headline">Output</v-card-title>
            <v-card-text v-if="outputsStore.msg">
              <ssh-pre class="ssh-pre__content" reactive language="js">
                {{ outputsStore.msg }}</ssh-pre
              >
            </v-card-text>
          </template>
          <!-- End Tab 2 Content -->

          <!-- Start Tab 3 Content -->
          <template v-slot:tab-3>
            <v-card-title class="headline">Code</v-card-title>
            <!-- Prismjs syntax highlight -->
            <v-card-text>
              <ssh-pre class="ssh-pre__content" reactive language="js">
                {{ outputsStore.code }}
              </ssh-pre>
            </v-card-text>
          </template>
          <!-- End Tab 3 Content -->
          <template v-slot:bottom> </template>
        </ContentCard>
        <!-- End content card -->
      </v-container>
      <v-card-actions>
        <v-toolbar id="cotent-card-toolbar" density="default" color="primary-container">
          <v-spacer />
          <v-spacer />

          <v-snackbar
            location-strategy="static"
            v-model="outputsStore.snackbar"
            :timeout="outputsStore.snackbarTimeout"
            :color="outputsStore.snackbarColor"
            elevation="24"
          >
            <template v-slot:actions>
              <v-icon :icon="mdiContentSave"></v-icon>
            </template>
            {{ outputsStore.snackbarMsg }}
          </v-snackbar>

          <v-btn stacked color="tertiary" @click="functions.saveJSON">
            <v-badge dot color="success">
              <v-icon :icon="mdiContentSave"></v-icon>
            </v-badge>
            Save
            <!-- SAVE -->
            <v-tooltip activator="parent" location="bottom"
              >Save workspace</v-tooltip
            >
          </v-btn>

          <v-btn stacked color="tertiary" @click="functions.loadJSON">
            <v-icon :icon="mdiFileRestore"></v-icon>
            Restore
            <!-- RESTORE -->
            <v-tooltip activator="parent" location="bottom"
              >Restore saved workspace</v-tooltip
            >
          </v-btn>

          <v-btn stacked color="tertiary" @click="functions.initWorkspaceState">
            <v-icon :icon="mdiRestart"></v-icon>
            <!-- RESET -->
            Reset
            <v-tooltip activator="parent" location="bottom"
              >Reset workspace</v-tooltip
            >
          </v-btn>

          <v-spacer />

          <v-btn color="primary" class="text-none" stacked>
            <v-icon :icon="mdiMenu" @click="toggleTheme()" ></v-icon>
          </v-btn>
        </v-toolbar>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css?family=Inter');

html {
  overflow-y: auto;
}

body {
  margin: 0;
}


#root {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: --background;
  margin: 0;
}

#blockly1 {
  position: absolute;
  left: 0;
  top: 0;
  width: 55%;
  height: 100%;
}

#content {
  position: absolute;
  right: 0;
  top: 0;
  width: 45%;
  height: 100%;
}

#terminal {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 40%;
}

#content-bottom {
  position: absolute;
  right: 0;
  top: 40%;
  width: 100%;
  height: 60%;
}

#cotent-card-toolbar {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
}

.ps {
  height: 28vh;
}

.ssh-pre__content {
  height: 25vh;
  padding-left: 1em;
  overflow-y: scroll;
}

.ssh-pre__content__example {
  padding-left: 1em;
}

#terminal__prompt {
  display: flex;
  align-items: center;
  height: 1.5em;
}

#terminal__prompt--user {
  color: #acffe7;
  margin-left: 0.25em;
  opacity: 0.85;
}

#terminal__prompt--location {
  color: #4878c0;
}

#terminal__prompt--bling {
  color: #f8aeff;
  margin-right: 0.5em;
  white-space: pre;
}

#terminal__prompt--cursor {
  display: block;
  height: 17px;
  width: 8px;
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
</style>
<script lang="ts">
import { mdiConsoleLine, mdiContentSave, mdiFileRestore, mdiRestart, mdiMenu} from '@mdi/js';

export default {
    data: () => ({
      mdiConsoleLine,
      mdiContentSave,
      mdiFileRestore,
      mdiRestart,
      mdiMenu


    }),
  }

</script>
