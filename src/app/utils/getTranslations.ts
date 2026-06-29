import { Translations } from "../types";

export async function getTranslations(locale: string): Promise<Translations> {
  switch (locale) {
    case "ru":
      return (await import("../../../messages/ru.json")).default;
    case "kz":
      return (await import("../../../messages/kz.json")).default;
    default:
      return (await import("../../../messages/en.json")).default;
  }
}
