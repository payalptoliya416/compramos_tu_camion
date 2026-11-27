import { apiClient, type ApiResponse } from './client';

export interface ValuationPayload {
  make: string;
  model: string;
  registration_year: string;
  mileage: string;
  transmission: string;
  basculante: string;
  full_name: string;
  email: string;
  phone_number: string;
  city: string;
  minimum_price?: string;
  any_damages?: string;
  photos: File[];
}

export interface ValuationResponseData {
  vehicle: {
    make: string;
    model: string;
    registration_year: number | string;
    mileage_km: number | string;
    transmission: string;
    basculante_tipper: boolean | string;
  };
  contact: {
    full_name: string;
    email: string;
    phone_number: string;
    city: string;
  };
  pricing_and_condition: {
    minimum_price: number | string;
    any_damages: string;
  };
  photos: string[];
}

export type ValuationApiResponse = ApiResponse<ValuationResponseData>;

/**
 * Submit truck valuation form to API
 * Endpoint: /truck-valuation/valuation.php
 * Method: POST
 * Body: multipart/form-data
 */
export async function submitValuation(payload: ValuationPayload): Promise<ValuationApiResponse> {
  const formData = new FormData();

  formData.append('make', payload.make);
  formData.append('model', payload.model);
  formData.append('registration_year', payload.registration_year);
  formData.append('mileage', payload.mileage.replace(/[^0-9]/g, '') || payload.mileage);
  formData.append('transmission', payload.transmission);

  // Map "Sí" / "Yes" -> "yes", "No" -> "no"
  const basculanteVal =
    payload.basculante.toLowerCase() === 'sí' ||
    payload.basculante.toLowerCase() === 'si' ||
    payload.basculante.toLowerCase() === 'yes'
      ? 'yes'
      : 'no';
  formData.append('basculante', basculanteVal);

  formData.append('full_name', payload.full_name);
  formData.append('email', payload.email);
  formData.append('phone_number', payload.phone_number);
  formData.append('city', payload.city);
  formData.append('minimum_price', payload.minimum_price || '');
  formData.append('any_damages', payload.any_damages || 'None');

  // Append up to 10 photos as photos[]
  if (payload.photos && payload.photos.length > 0) {
    payload.photos.forEach((file) => {
      formData.append('photos[]', file);
    });
  }

  return apiClient.post<ValuationApiResponse>('/truck-valuation/valuation.php', formData);
}
