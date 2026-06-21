export function getApiBaseUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '');

  if (configuredUrl) {
    return configuredUrl;
  }

  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:5001';
  }

  return '';
}

export function getContactApiUrl(): string {
  const baseUrl = getApiBaseUrl();

  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_API_URL is not configured.');
  }

  return `${baseUrl}/api/contact`;
}
