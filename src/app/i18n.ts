import { notFound } from "next/navigation";
import { getRequestConfig } from 'next-intl/server';
import { locales, Locale } from '../config';
 
export default getRequestConfig(async ({ locale }) => {
  // Validate that the locale is supported
  if (!locales.includes(locale as Locale)) notFound();
 
  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
    locale // locale is now known to be valid
  };
});
