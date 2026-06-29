"use client";

type Props = {
  current: string;
  onChange: (locale: string) => void;
};

export default function LanguageSwitcher({ current, onChange }: Props) {
  return (
    <div className="fixed top-4 right-4 flex gap-2">
      {["en", "ru", "kz"].map((loc) => (
        <button
          key={loc}
          onClick={() => onChange(loc)}
          className={`px-3 py-1 rounded border ${current === loc ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
