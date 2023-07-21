<script setup lang="ts">
import { outputsStore } from "../stores/workspaces";
import * as functions from "../stores/workspaces";

const props = defineProps<{
  modelValue?: boolean;
}>();
</script>

<template>
  <v-card id="content-card-component" class="mx-0 mt-0 mb-0 pb-0" elevation="0" rounded="0">
    <v-toolbar density="compact" color="secondary-container">
      <v-tabs v-model="outputsStore.activeTab" bg-color="secondary-container">
        <v-tab value="tab-1">Overview</v-tab>
        <v-tab value="tab-2">Output</v-tab>
        <v-tab value="tab-3">Code</v-tab>
      </v-tabs>
      <v-spacer />

      <v-btn :rounded="0" variant="text" icon color="primary" @click="functions.runCode">
        <v-icon :icon="mdiPlay"></v-icon>
        <!-- RUN -->
        <v-tooltip activator="parent" location="bottom">Run code</v-tooltip>
      </v-btn>

      <v-btn :rounded="0" icon color="secondary" @click="functions.generateCode">
        <v-icon :icon="mdiCodeTags"></v-icon>
        <!-- SHOW CODE -->
        <v-tooltip activator="parent" location="bottom">Show code</v-tooltip>
      </v-btn>

      <v-btn :rounded="0" icon color="secondary" @click="functions.clearMSG">
        <v-icon :icon="mdiNotificationClearAll"></v-icon>
        <!-- CLEAR OUTPUT -->
        <v-tooltip activator="parent" location="bottom">Clear terminal</v-tooltip>
      </v-btn>
    </v-toolbar>

    <v-window v-model="outputsStore.activeTab">
      <perfect-scrollbar class="ps-content-card">
        <v-window-item value="tab-1">
          <v-card flat>
            <v-card-text>
              <slot name="tab-1" />
            </v-card-text>
          </v-card>
        </v-window-item>

        <v-window-item value="tab-2">
          <v-card flat>
            <v-card-text>
              <slot name="tab-2" />
            </v-card-text>
          </v-card>
        </v-window-item>

        <v-window-item value="tab-3">
          <v-card flat>
            <v-card-text>
              <slot name="tab-3" />
            </v-card-text>
          </v-card>
        </v-window-item>
      </perfect-scrollbar>
    </v-window>
  </v-card>
</template>

<style lang="scss" scoped>
#content-card-component {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.ps-content-card {
  height: calc(54vh - 48px);
  padding-bottom: 1.4rem;
  width: 100%;
  overflow: hidden;
}
</style>

<script lang="ts">
import { mdiPlay, mdiCodeTags, mdiNotificationClearAll } from "@mdi/js";

export default {
  data: () => ({
    mdiPlay,
    mdiCodeTags,
    mdiNotificationClearAll,
  }),
};
</script>
