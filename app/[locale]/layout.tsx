import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { BaseLayout } from "@/components/layouts/base-layout";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "el" }];
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = ["en", "el"].includes(locale);
  if (!isValidLocale) notFound();

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <BaseLayout>{children}</BaseLayout>
    </NextIntlClientProvider>
  );
}
