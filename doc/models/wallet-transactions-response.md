
# Wallet Transactions Response

## Structure

`WalletTransactionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactions` | [`Transaction[] \| undefined`](../../doc/models/transaction.md) | Optional | - |

## Example (as JSON)

```json
{
  "transactions": [
    {
      "timestamp": 48,
      "asset": {
        "name": "name0",
        "symbol": "symbol2",
        "id": 240
      },
      "amount": 157.0,
      "from": "from4",
      "to": "to2"
    },
    {
      "timestamp": 48,
      "asset": {
        "name": "name0",
        "symbol": "symbol2",
        "id": 240
      },
      "amount": 157.0,
      "from": "from4",
      "to": "to2"
    }
  ]
}
```

