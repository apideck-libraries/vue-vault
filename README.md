<img src="https://user-images.githubusercontent.com/8850410/208065819-716c6e02-98c9-4df5-b687-e5acd1e3c4e5.png" width="100%" />

# Vue Vault

A Vue component to embed [Apideck Vault](https://www.apideck.com/products/vault) in any Vue application.

**Vue Vault** | [React Vault](https://github.com/apideck-libraries/react-vault) | [Vault JS](https://github.com/apideck-libraries/vault-js)

## Installation

### Package

```sh
npm install @apideck/vue-vault
```

## Prerequisites

Before opening the Vault modal with vault-js, you need to create a Vault session from your backend using the Vault API or one of our [SDKs](https://docs.apideck.com/sdks). Find out more in the [docs](https://docs.apideck.com/apis/vault/reference#operation/sessionsCreate).

## Usage

Pass the JWT you got from the Vault session to `vue-vault`:

```js
import { ApideckVault } from "@apideck/vault-js";

ApideckVault.open({
  token: "REPLACE_WITH_SESSION_TOKEN",
});
```

If you want to only show integrations for a single Unified API, you can do that by passing the `unifiedApi` option. If you want to open Vault for only a single integration, you can provide the `serviceId` option.

```js
import { ApideckVault } from "@apideck/vault-js";

ApideckVault.open({
  token: "REPLACE_WITH_SESSION_TOKEN",
  unifiedApi: "accounting",
  serviceId: "quickbooks",
});
```

If you want to get notified when the modal opens and closes, you can provide the `onReady` and `onClose` options.

```jsx
import { ApideckVault } from "@apideck/vault-js";

ApideckVault.open({
  token: "REPLACE_WITH_SESSION_TOKEN",
  onClose: () => {
    console.log("closed!");
  },
  onReady: () => {
    console.log("ready!");
  },
});
```

### Properties

| Property        | Type    | Required | Default | Description                                                                                                                       |
| --------------- | ------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| token           | string  | true     | -       | The JSON Web Token returned from the [Create Session API](https://docs.apideck.com/apis/vault/reference#operation/sessionsCreate) |
| showAttribution | boolean | false    | true    | Show "Powered by Apideck" in the backdrop of the modal backdrop                                                                   |
| onClose         | event   | false    | -       | Function that gets called when the modal is closed                                                                                |
| onReady         | event   | false    | -       | Function that gets called when the modal is opened                                                                                |
| unifiedApi      | string  | false    | -       | When unifiedApi is provided it will only show integrations from that API.                                                         |
| serviceId       | string  | false    | -       | When unifiedApi and serviceId are provided Vault opens a single integration                                                       |
