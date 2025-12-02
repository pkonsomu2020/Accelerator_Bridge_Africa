// API Base URL - Production URL with localhost fallback for development
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://accelerator-bridge-api.onrender.com/api';

// Contact Form API
export const submitContactForm = async (data: {
  name: string;
  email: string;
  description: string;
}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit contact form');
    }

    return result;
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
};

// Partnership Form API
export const submitPartnershipForm = async (formData: FormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/partnership`, {
      method: 'POST',
      body: formData, // Don't set Content-Type header for FormData
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit partnership form');
    }

    return result;
  } catch (error) {
    console.error('Partnership form submission error:', error);
    throw error;
  }
};
