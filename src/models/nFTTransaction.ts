/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface NFTTransaction {
  /** The timestamp of the transaction. */
  timestamp?: number;
  /** The NFT collection name. */
  collection?: string;
  /** The NFT token id. */
  tokenId?: string;
  /** The sender's address. */
  from?: string;
  /** The receiver's address. */
  to?: string;
}

export const nFTTransactionSchema: Schema<NFTTransaction> = object({
  timestamp: ['timestamp', optional(number())],
  collection: ['collection', optional(string())],
  tokenId: ['tokenId', optional(string())],
  from: ['from', optional(string())],
  to: ['to', optional(string())],
});
