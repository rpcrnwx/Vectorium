import { CarbonCredit } from '@/lib/redux/slices/marketplaceSlice';
import { supabase } from '@/lib/supabase';

export interface ApiCarbonCredit {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  project_name: string;
  location: string;
  certification_body: string;
  vintage: string;
  image_url: string;
  seller: string;
  carbon_reduction: number;
  expiry_date?: string;
  category: 'renewable' | 'forestry' | 'agriculture' | 'waste' | 'other';
  status: 'available' | 'sold' | 'pending';
  created_at: string;
  updated_at: string;
}

// Transform API data to match Redux state structure
export const transformApiCreditToRedux = (apiCredit: ApiCarbonCredit): CarbonCredit => ({
  id: apiCredit.id,
  name: apiCredit.name,
  description: apiCredit.description,
  price: apiCredit.price,
  quantity: apiCredit.quantity,
  projectName: apiCredit.project_name,
  location: apiCredit.location,
  certificationBody: apiCredit.certification_body,
  vintage: apiCredit.vintage,
  imageUrl: apiCredit.image_url,
  seller: apiCredit.seller,
  carbonReduction: apiCredit.carbon_reduction,
  expiryDate: apiCredit.expiry_date,
  category: apiCredit.category,
  status: apiCredit.status
});

export const fetchCarbonCredits = async (filters?: {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  vintage?: string;
}): Promise<CarbonCredit[]> => {
  try {
    console.log('Client: Fetching carbon credits with filters:', filters);
    
    const params = new URLSearchParams();
    
    if (filters?.category) params.append('category', filters.category);
    if (filters?.minPrice) params.append('minPrice', filters.minPrice.toString());
    if (filters?.maxPrice) params.append('maxPrice', filters.maxPrice.toString());
    if (filters?.location) params.append('location', filters.location);
    if (filters?.vintage) params.append('vintage', filters.vintage);

    const url = `/api/carbon-credits${params.toString() ? `?${params.toString()}` : ''}`;
    console.log('Client: Fetching from URL:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('Client: Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Client: Response error:', errorText);
      
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { error: errorText };
      }
      
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Client: API response:', result);
    
    if (!result.data) {
      console.warn('Client: No data field in response:', result);
      return [];
    }

    const transformedData = result.data.map(transformApiCreditToRedux);
    console.log('Client: Transformed data:', transformedData);
    
    return transformedData;
  } catch (error) {
    console.error('Client: Error fetching carbon credits:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch carbon credits');
  }
};

export const fetchUserCarbonCredits = async () => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    const accessToken = session?.access_token;
    const response = await fetch(`/api/user-credits`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user carbon credits:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch user carbon credits');
  }
};

export const fetchUserTransactions = async () => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    const accessToken = session?.access_token;
    const response = await fetch(`/api/transactions`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user transactions:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch user transactions');
  }
};

export const createTransaction = async (transactionData: {
  creditId: string;
  type: 'buy' | 'sell';
  quantity: number;
  price: number;
}) => {
  try {
    // Get the current session and access token
    const { data: { session } } = await supabase.auth.getSession();
    const accessToken = session?.access_token;

    const response = await fetch('/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
      },
      body: JSON.stringify(transactionData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating transaction:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to create transaction');
  }
};