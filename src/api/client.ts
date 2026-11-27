/**
 * Common API client
 * Handles base URL configuration, headers, request formatting, and response parsing.
 */

const BASE_URL = (import.meta.env.VITE_API_BASE_URL as string) || 'http://192.168.1.21';

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Record<string, string>;
}

export interface RequestOptions extends Omit<RequestInit, 'body'> {
  body?: any;
  params?: Record<string, string | number | boolean>;
}

export class ApiError extends Error {
  status: number;
  errors?: Record<string, string>;

  constructor(message: string, status: number, errors?: Record<string, string>) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.errors = errors;
  }
}

/**
 * Generic fetch wrapper for all API calls
 */
export async function request<T = any>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { body, headers = {}, params, ...restOptions } = options;

  // Build query string if params provided
  let url = endpoint.startsWith('http') ? endpoint : `${BASE_URL.replace(/\/+$/, '')}/${endpoint.replace(/^\/+/, '')}`;
  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, val]) => {
      if (val !== undefined && val !== null) {
        searchParams.append(key, String(val));
      }
    });
    const queryString = searchParams.toString();
    if (queryString) {
      url += (url.includes('?') ? '&' : '?') + queryString;
    }
  }

  const finalHeaders = new Headers(headers);

  let finalBody: BodyInit | null = null;
  if (body instanceof FormData) {
    // Let browser set multipart/form-data boundary automatically
    finalBody = body;
  } else if (body !== undefined && body !== null) {
    if (!finalHeaders.has('Content-Type')) {
      finalHeaders.set('Content-Type', 'application/json');
    }
    finalBody = typeof body === 'string' ? body : JSON.stringify(body);
  }

  const response = await fetch(url, {
    ...restOptions,
    headers: finalHeaders,
    body: finalBody,
  });

  let data: any = null;
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    try {
      data = await response.json();
    } catch {
      data = null;
    }
  } else {
    data = await response.text();
  }

  if (!response.ok || (data && typeof data === 'object' && data.success === false)) {
    const errorMsg =
      (data && typeof data === 'object' && data.message) ||
      `Request failed with status ${response.status}`;
    const errors = data && typeof data === 'object' ? data.errors : undefined;
    throw new ApiError(errorMsg, response.status, errors);
  }

  return data as T;
}

export const apiClient = {
  get: <T = any>(endpoint: string, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'GET' }),
  post: <T = any>(endpoint: string, body?: any, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'POST', body }),
  put: <T = any>(endpoint: string, body?: any, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'PUT', body }),
  delete: <T = any>(endpoint: string, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'DELETE' }),
};

export default apiClient;
