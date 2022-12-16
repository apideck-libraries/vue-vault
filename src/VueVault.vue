<template>
  <slot :open="onClick"> </slot>
</template>

<script setup lang="ts">
import { ApideckVault } from "@apideck/vault-js";

const props = defineProps<{
  token: string;
  unifiedApi?: string;
  serviceId?: string;
  showAttribution?: boolean;
  onClose?: () => void;
  onReady?: () => void;
}>();

function onClick() {
  ApideckVault.open(props);
}
</script>

<script lang="ts">
export default {
  name: "VueVault",
};
</script>
