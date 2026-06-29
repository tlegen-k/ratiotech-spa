"use client";

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function HomeClient() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  // Safely access dynamic translation keys
  const services = Array.from({ length: 3 }, (_, i) => ({
    title: t(`service${i + 1}Title`),
    desc: t(`service${i + 1}Desc`),
  }));

  return (
    <main className="font-sans bg-white text-gray-800">
      <LanguageSwitcher current={locale} onChange={handleLocaleChange} />

      {/* Hero Section */}
      <section className="h-[60vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-50 to-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">{t('heroTitle')}</h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-600">{t('heroSubtitle')}</p>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-900 text-center mb-12">{t('servicesTitle')}</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl shadow-md bg-white border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-blue-50">
        <h2 className="text-3xl font-semibold text-blue-900 text-center mb-12">{t('aboutTitle')}</h2>
        <p className="max-w-4xl mx-auto text-center text-gray-700">{t('aboutDesc')}</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-900 mb-8">{t('contactTitle')}</h2>
        <p className="text-gray-600 mb-6">{t('contactDesc')}</p>
      </section>

      <footer className="py-8 text-center text-gray-500 border-t">{t('footer')}</footer>
    </main>
  );
}
