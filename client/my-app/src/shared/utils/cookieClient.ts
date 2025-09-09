// shared/utils/cookiesClient.ts
export const getCookieClient = (key: string): string | null => {
    if (typeof document === 'undefined') return null;
  
    const cookies = document.cookie.split('; ').reduce((acc, cookieStr) => {
      const [k, v] = cookieStr.split('=');
      acc[k] = v;
      return acc;
    }, {} as Record<string, string>);
  
    return cookies[key] ?? null;
  };
  