import type { Metadata } from "next";
import { AccordionItem } from "@/components/ui/Accordion";
import { BackgroundVideoPanel } from "@/components/layout/BackgroundVideoPanel";
import { ContentPanel } from "@/components/layout/ContentPanel";
import { InlineFooter } from "@/components/layout/InlineFooter";
import { CalButton } from "@/components/ui/CalButton";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/contact",
    title: {
      fr: "Contact — Réservez Votre Appel Découverte Gratuit | Jules Studio Paris",
      en: "Contact — Book Your Free Discovery Call | Jules Studio Paris",
    },
    description: {
      fr: "Prêt à lancer votre projet web ? Contactez Jules Studio, studio de web design à Paris. Appel découverte gratuit de 30 min. Site vitrine dès 890€, landing page dès 1 690€. Webflow, identité visuelle, stratégie digitale.",
      en: "Ready to launch your web project? Contact Jules Studio, a web design studio in Paris. Free 30-minute discovery call. Showcase sites from €890, landing pages from €1,690. Webflow, visual identity, digital strategy.",
    },
    ogTitle: {
      fr: "Contactez Jules Studio — Appel Découverte Gratuit",
      en: "Contact Jules Studio — Free Discovery Call",
    },
    ogDescription: {
      fr: "Réservez un appel découverte gratuit de 30 min avec Charles. On parle de votre projet web, sans engagement. Studio web design & Webflow à Paris.",
      en: "Book a free 30-minute discovery call with Charles. Let's talk about your web project, no strings attached. Web design & Webflow studio in Paris.",
    },
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
    <FAQJsonLd />
    <BreadcrumbJsonLd
      items={[
        { name: "Accueil", url: "https://julesstudio.fr" },
        { name: "Contact", url: "https://julesstudio.fr/contact" },
      ]}
    />
    <div className="flex flex-col md:flex-row">
      {/* LEFT CONTENT PANEL */}
      <ContentPanel>

      {/* contact-header-intro-wrapper */}
      <section className="p-4" style={{ borderRadius: "5px", backgroundColor: "#fff", height: "40vh" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/peace-of-mind.svg"
          alt="Illustration"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
        />
      </section>

      <section className="p-4" style={{ borderRadius: "5px", backgroundColor: "var(--color-beige)" }}>
        <h1 className="font-[family-name:var(--font-merriweather)] text-2xl md:text-3xl font-bold mb-4">
          {dict.contact.title}
        </h1>
        <p className="text-sm leading-relaxed text-[color:var(--color-foreground)]">
          {dict.contact.intro}{" "}
          <a
            href="mailto:hello@julesstudio.fr"
            className="link-hover text-[color:var(--color-foreground)] font-medium"
          >
            hello@julesstudio.fr
          </a>{" "}
          {dict.contact.introMiddle}{" "}
          <CalButton variant="link">
            {dict.contact.introLink}
          </CalButton>{" "}
          {dict.contact.introEnd}
        </p>
      </section>

      {/* FAQ */}
      <section className="p-4" style={{ borderRadius: "5px", backgroundColor: "var(--color-beige)" }}>
        <h2 className="font-[family-name:var(--font-merriweather)] text-xl font-bold mb-6">
          {dict.contact.faq.title}
        </h2>

        <AccordionItem question={dict.contact.faq.q1}>
          <p>
            {dict.contact.faq.a1}
          </p>
        </AccordionItem>

        <AccordionItem question={dict.contact.faq.q2}>
          <ul className="space-y-2">
            <li>
              {dict.contact.faq.a2_vitrine}
            </li>
            <li>
              {dict.contact.faq.a2_landing}
            </li>
            <li>
              {dict.contact.faq.a2_complet}
            </li>
          </ul>
        </AccordionItem>

        <AccordionItem question={dict.contact.faq.q3}>
          <ol className="space-y-2 list-decimal list-inside">
            <li>
              {dict.contact.faq.a3_1}
            </li>
            <li>
              {dict.contact.faq.a3_2}
            </li>
            <li>
              {dict.contact.faq.a3_3}
            </li>
            <li>
              {dict.contact.faq.a3_4}
            </li>
          </ol>
        </AccordionItem>
      </section>

      {/* CTA */}
      <section className="p-4" style={{ borderRadius: "5px", backgroundColor: "var(--color-beige)" }}>
        <h2 className="font-[family-name:var(--font-merriweather)] text-lg font-bold mb-3">
          {dict.contact.cta.title}
        </h2>
        <p className="text-sm text-[color:var(--color-foreground)] mb-6">
          {dict.contact.cta.text}
        </p>
        <CalButton variant="button">
          {dict.contact.cta.button}
        </CalButton>
      </section>

      <InlineFooter />

      </ContentPanel>

      {/* RIGHT PANEL */}
      <BackgroundVideoPanel />
    </div>
    </>
  );
}
