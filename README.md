# Vue Vault

A Vue component to embed [Apideck Vault](https://www.apideck.com/products/vault) in any Vue application.

<img src="https://user-images.githubusercontent.com/8850410/208065819-716c6e02-98c9-4df5-b687-e5acd1e3c4e5.png" width="100%" />

**Vue Vault** | [React Vault](https://github.com/apideck-libraries/react-vault) | [Vault JS](https://github.com/apideck-libraries/vault-js)

## Installation

### Package

```sh
npm install @apideck/vue-vault
```

## Prerequisites

Before opening the Vault modal with `@apideck/vue-vault`, you need to create a Vault session from your backend using the Vault API or one of our [SDKs](https://docs.apideck.com/sdks). Find out more in the [docs](https://docs.apideck.com/apis/vault/reference#operation/sessionsCreate).

## Usage

Pass the JWT you got from the Vault session to `@apideck/vue-vault`, call the slot prop `open` to open the Vault modal.

```vue
<script setup lang="ts">
import { VueVault } from "@apideck/vue-vault";

const sessionJwt = "REPLACE_WITH_SESSION_TOKEN";
</script>

<template>
  <main>
    <VueVault :token="sessionJwt" v-slot="vaultProps">
      <button @click="vaultProps.open()">Open</button>
    </VueVault>
  </main>
</template>
```

If you want to only show integrations for a single Unified API, you can do that by passing the `unified-api` prop. If you want to open Vault for only a single integration, you can provide the `service-id` prop.

```vue
<script setup lang="ts">
import { VueVault } from "@apideck/vue-vault";

const sessionJwt = "REPLACE_WITH_SESSION_TOKEN";
</script>

<template>
  <main>
    <VueVault :token="sessionJwt" unified-api="accounting" service-id="quickbooks" v-slot="vaultProps">
      <button @click="vaultProps.open()">Open</button>
    </VueVault>
  </main>
</template>
```

If you want to get notified when the modal opens and closes, you can provide the `onReady` and `onClose` options.

```vue
<script setup lang="ts">
import { VueVault } from "@apideck/vue-vault";

const sessionJwt = "REPLACE_WITH_SESSION_TOKEN";

function onClose() {
  console.log("closed!");
}

function onReady() {
  console.log("ready!");
}
</script>

<template>
  <main>
    <VueVault :token="sessionJwt" :on-close="onClose" :on-ready="onReady" v-slot="vaultProps">
      <button @click="vaultProps.open()">Open</button>
    </VueVault>
  </main>
</template>
```

### Props

| Property             | Type                             | Required | Default | Description                                                                                                                                      |
| -------------------- | -------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| token                | string                           | true     | -       | The JSON Web Token returned from the [Create Session API](https://docs.apideck.com/apis/vault/reference#operation/sessionsCreate)                |
| show-attribution     | boolean                          | false    | true    | Show "Powered by Apideck" in the backdrop of the modal backdrop                                                                                  |
| on-close             | () => void                       | false    | -       | Function that gets called when the modal is closed                                                                                               |
| on-ready             | () => void                       | false    | -       | Function that gets called when the modal is opened                                                                                               |
| on-connection-change | (connection: Connection) => void | false    | -       | Function that gets called when the user updates a connection. This can be linking their account, filling out settings or adding a new connection |
| on-connection-delete | (connection: Connection) => void | false    | -       | Function that gets called when the user deletes a connection                                                                                     |
| unified-api          | string                           | false    | -       | When unified-api is provided it will only show integrations from that API.                                                                       |
| service-id           | string                           | false    | -       | When unified-api and service-id are provided Vault opens a single integration                                                                    |
