import * as yup from "yup";

// Variables públicas del sitio validadas al arrancar para fallar pronto si están mal escritas.
const envSchema = yup.object({
  NEXT_PUBLIC_SITE_URL: yup
    .string()
    .trim()
    .default("http://localhost:3000")
    // yup.url() no acepta "localhost", así que se valida con la API URL.
    .test("is-http-url", "NEXT_PUBLIC_SITE_URL debe ser una URL válida, por ejemplo https://midominio.com", (value) => {
      try {
        return ["http:", "https:"].includes(new URL(value).protocol);
      } catch {
        return false;
      }
    }),
  NEXT_PUBLIC_SITE_INDEXABLE: yup.string().trim().oneOf(["true", "false"]).default("false"),
});

const parsed = envSchema.validateSync(
  {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || undefined,
    NEXT_PUBLIC_SITE_INDEXABLE: process.env.NEXT_PUBLIC_SITE_INDEXABLE || undefined,
  },
  { abortEarly: false, stripUnknown: true },
);

export const env = {
  siteUrl: parsed.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, ""),
  indexable: parsed.NEXT_PUBLIC_SITE_INDEXABLE === "true",
} as const;
