"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const locale = searchParams.get("locale") || "en";
  const languages = ["en", "ru", "kz"];

  const switchLocale = (l: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("locale", l);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-end p-4 space-x-3">
      {languages.map((l) => (
        <button
          key={l}
          disabled={locale === l}
          onClick={() => switchLocale(l)}
          className="px-3 py-1 border rounded hover:bg-blue-50 transition disabled:opacity-50"
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
