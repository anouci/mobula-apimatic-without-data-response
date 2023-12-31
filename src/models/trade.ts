/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, optional, Schema, string } from '../schema';
import { Asset1, asset1Schema } from './asset1';

export interface Trade {
  /** The from address of the trade. */
  from?: string;
  /** The to address of the trade. */
  to?: string;
  /** The blockchain used for the trade. */
  blockchain?: string;
  /** The amount of asset in the trade. */
  amount?: number;
  /** The amount in USD of the trade. */
  amountUsd?: number;
  asset?: Asset1;
  /** The timestamp of the trade. */
  timestamp?: number;
}

export const tradeSchema: Schema<Trade> = object({
  from: ['from', optional(string())],
  to: ['to', optional(string())],
  blockchain: ['blockchain', optional(string())],
  amount: ['amount', optional(number())],
  amountUsd: ['amount_usd', optional(number())],
  asset: ['asset', optional(lazy(() => asset1Schema))],
  timestamp: ['timestamp', optional(number())],
});
