/**
 * MobulaLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of ErrorResponse
 */
interface ErrorResponse {
  error?: string;
}

export class ErrorResponseError extends ApiError<ErrorResponse> {}
