export async function getTranslations(locale: string) {
  switch (locale) {
    case "ru":
      return (await import("../../public/locales/ru/common.json")).default;
    case "kz":
      return (await import("../../public/locales/kz/common.json")).default;
    default:
      return (await import("../../public/locales/en/common.json")).default;
  }
}
