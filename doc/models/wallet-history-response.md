
# Wallet History Response

## Structure

`WalletHistoryResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wallet` | `string \| undefined` | Optional | - |
| `balanceUsd` | `number \| undefined` | Optional | - |
| `balanceHistory` | `number[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "wallet": "wallet2",
  "balance_usd": 239.28,
  "balance_history": [
    [
      167.69,
      167.7
    ],
    [
      167.69,
      167.7
    ]
  ]
}
```

