---
id: "DefaultLogging"
title: "Class: DefaultLogging"
sidebar_label: "DefaultLogging"
sidebar_position: 0
custom_edit_url: null
---

**`Since`**

2.0.0

## Implements

- [`Logging`](../interfaces/Logging.md)

## Constructors

### constructor

• **new DefaultLogging**()

## Methods

### date

▸ `Private` **date**(): `Date`

#### Returns

`Date`

#### Defined in

[src/handler/contracts/logging.ts:15](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/contracts/logging.ts#L15)

___

### debug

▸ **debug**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`LogPayload`](../modules.md#logpayload)<`unknown`\> |

#### Returns

`void`

#### Implementation of

[Logging](../interfaces/Logging.md).[debug](../interfaces/Logging.md#debug)

#### Defined in

[src/handler/contracts/logging.ts:16](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/contracts/logging.ts#L16)

___

### error

▸ **error**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`LogPayload`](../modules.md#logpayload)<`unknown`\> |

#### Returns

`void`

#### Implementation of

[Logging](../interfaces/Logging.md).[error](../interfaces/Logging.md#error)

#### Defined in

[src/handler/contracts/logging.ts:20](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/contracts/logging.ts#L20)

___

### info

▸ **info**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`LogPayload`](../modules.md#logpayload)<`unknown`\> |

#### Returns

`void`

#### Implementation of

[Logging](../interfaces/Logging.md).[info](../interfaces/Logging.md#info)

#### Defined in

[src/handler/contracts/logging.ts:24](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/contracts/logging.ts#L24)

___

### warning

▸ **warning**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`LogPayload`](../modules.md#logpayload)<`unknown`\> |

#### Returns

`void`

#### Implementation of

[Logging](../interfaces/Logging.md).[warning](../interfaces/Logging.md#warning)

#### Defined in

[src/handler/contracts/logging.ts:28](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/contracts/logging.ts#L28)