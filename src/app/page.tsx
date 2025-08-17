// app/page.tsx
"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { getTranslations } from "./utils/getTranslations";

export default function Home() {
  const searchParams = useSearchParams();
  const [t, setT] = useState<any>({});
  const locale = searchParams.get("locale") || "en";

  useEffect(() => {
    getTranslations(locale).then(setT);
  }, [locale]);

  if (!t.heroTitle) return <div>Loading...</div>;

  return (
    <main className="font-sans bg-white text-gray-800">
      <LanguageSwitcher />

      {/* Hero Section */}
      <section className="h-[60vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-50 to-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          {t.heroTitle}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-600">{t.heroSubtitle}</p>
        <a
          href="#contact"
          className="mt-6 px-6 py-3 bg-blue-900 text-white font-medium rounded-xl shadow hover:bg-blue-800 transition"
        >
          {t.ctaButton}
        </a>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-900 text-center mb-12">
          {t.servicesTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-6 rounded-2xl shadow-md bg-white border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-3">{t[`service${i}Title`]}</h3>
              <p className="text-gray-600">{t[`service${i}Desc`]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-blue-50">
        <h2 className="text-3xl font-semibold text-blue-900 text-center mb-12">
          {t.aboutTitle}
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-700">{t.aboutDesc}</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-900 mb-8">{t.contactTitle}</h2>
        <p className="text-gray-600 mb-6">{t.contactDesc}</p>
        <a
          href="mailto:info@yourcompany.com"
          className="inline-block px-6 py-3 bg-blue-900 text-white font-medium rounded-xl shadow hover:bg-blue-800 transition"
        >
          {t.contactButton}
        </a>
      </section>

      <footer className="py-8 text-center text-gray-500 border-t">{t.footer}</footer>
    </main>
  );
}
