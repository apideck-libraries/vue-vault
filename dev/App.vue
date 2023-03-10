<template>
  <main>
    <h1>Vue Vault</h1>

    <VueVault
      :token="sessionJwt"
      :service-id="serviceId"
      :unified-api="unifiedApi"
      :show-attribution="false"
      :on-close="onClose"
      :on-ready="onReady"
      :on-connection-change="onConnectionChange"
      :on-connection-delete="onConnectionDelete"
      v-slot="vaultProps"
    >
      <button @click="vaultProps.open">Open Vault</button>
    </VueVault>
  </main>
</template>

<script setup lang="ts">
import VueVault from "../src/VueVault.vue";

const sessionJwt = "TOKEN_HERE";
const serviceId = "dropbox";
const unifiedApi = "file-storage";

function onClose() {
  console.log("close!");
}

function onReady() {
  console.log("ready!");
}

function onConnectionChange(connection) {
  console.log("changed!", connection);
}

function onConnectionDelete(connection) {
  console.log("ready!", connection);
}
</script>
