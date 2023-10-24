/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, lazy, number, object, optional, Schema, string } from '../schema';
import { DetailedBalance, detailedBalanceSchema } from './detailedBalance';

export interface WalletMomentResponse {
  /** The wallet address. */
  wallet?: string;
  /** The balance in USD. */
  balanceUsd?: number;
  detailedBalance?: Record<string, DetailedBalance>;
}

export const walletMomentResponseSchema: Schema<WalletMomentResponse> = object({
  wallet: ['wallet', optional(string())],
  balanceUsd: ['balance_usd', optional(number())],
  detailedBalance: [
    'detailed_balance',
    optional(dict(lazy(() => detailedBalanceSchema))),
  ],
});
