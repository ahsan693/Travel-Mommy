'use client';

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Handshake,
  Megaphone,
  AtSign,
  Plus,
  Minus,
} from "lucide-react";

// ============================================================================
// IMPORTANT: Adjust these import paths to match your project's folder structure
// ============================================================================
import Header from "../header/header";
import Footer from "../footer/footer";
import { contactUsData, type ContactCard, type ContactFaq, type ContactUsPageData, type SocialLink } from "../../../lib/data/contactUsData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";

/* ----------------------------------------------------------------
   INLINE SOCIAL ICONS (Replaces removed Lucide brand icons)
---------------------------------------------------------------- */

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.5z"/>
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

/* ----------------------------------------------------------------
   STATIC DATA
---------------------------------------------------------------- */

/* ----------------------------------------------------------------
   MAIN PAGE COMPONENT
---------------------------------------------------------------- */

export default function ContactUs({ data = contactUsData }: { data?: ContactUsPageData }) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#FFFFFF]">
      <Header data={headerData} />
      <HeroSection data={data.hero} />
      <ContactCardsSection cards={data.contactCards} />
      <FormSection data={data.form} />
      <FaqSection faqs={data.faqs} data={data.faq} />
      <FollowUsSection socialLinks={data.socialLinks} title={data.followTitle} />
      <Footer data={footerData} />
    </main>
  );
}

/* ----------------------------------------------------------------
   HERO SECTION
---------------------------------------------------------------- */

function HeroSection({ data }: { data: ContactUsPageData["hero"] }) {
  return (
    <section className="relative flex w-full flex-col items-center bg-[#FDDB32] pt-[120px] pb-[40px] lg:pb-[141px] lg:pt-[193px]">
      <div className="relative z-10 w-full max-w-[1440px] px-[20px] lg:px-[140px]">
        <div className="flex w-full flex-col items-center">
          
          {/* Heading */}
          <h1 className="text-page-h1 font-sans text-center text-[#000000]">
            {data.title}
          </h1>
          
          {/* Paragraph */}
          <p className="mt-[12px] max-w-[800px] font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#000000] text-center md:mt-[32px] md:text-[16px] md:leading-[24px] md:tracking-[0px]">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   CONTACT CARDS SECTION
---------------------------------------------------------------- */

function ContactCardsSection({ cards }: { cards: ContactCard[] }) {
  return (
    <section className="flex w-full flex-col items-center bg-gradient-to-b from-[#0B0B0B] to-[#111827] py-[32px] px-[16px] lg:bg-none lg:bg-[#0F1420] lg:px-[140px] lg:py-[100px]">
      <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 gap-[16px] md:gap-[24px] md:grid-cols-3">
        {cards.map(({ icon, title, description, email }) => {
          const Icon = icon === "mail" ? Mail : icon === "handshake" ? Handshake : Megaphone;
          return (
          <div
            key={title}
            className="flex flex-col items-start rounded-[16px] border border-white/20 bg-gradient-to-b from-[#FFFFFF] to-[#F9FAFB] p-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:rounded-[20px] md:border-none md:bg-none md:bg-[#FFFFFF] md:p-[32px]"
          >
            <div className="mb-[16px] flex h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[#FFED91] md:mb-[24px] md:h-[48px] md:w-[48px]">
              <Icon className="h-[20px] w-[20px] text-[#000000] md:h-[22px] md:w-[22px]" strokeWidth={2} />
            </div>
            <h3 className="mb-[6px] font-sans text-[15px] font-medium leading-[20px] tracking-[0px] text-[#111827] md:mb-[12px] md:text-[20px] md:leading-[26px] md:text-[#000000]">
              {title}
            </h3>
            <p className="mb-[16px] flex-1 font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#6B7280] md:mb-[32px] md:text-[15px] md:leading-[24px] md:tracking-[0px] md:text-[#7D7D7D]">
              {description}
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-[4px] flex items-center gap-[8px] font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#111827] transition-colors hover:text-[#7D7D7D] md:mt-0 md:text-[14px] md:tracking-[0px] md:text-[#000000]"
            >
              <AtSign className="h-[16px] w-[16px]" />
              {email}
            </a>
          </div>);
        })}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   FORM SECTION
---------------------------------------------------------------- */

function FormSection({ data }: { data: ContactUsPageData["form"] }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] py-[40px] px-[16px] lg:px-[140px] lg:py-[100px]">
      <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 gap-[32px] lg:grid-cols-[1fr_1.2fr] lg:gap-[96px]">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col lg:pt-[40px]">
          <h2 className="mb-[12px] font-sans text-[28px] font-medium leading-[32px] tracking-[-0.5px] text-[#000000] sm:text-[48px] md:mb-[24px] md:leading-[1.1] md:tracking-[0px]">
            {data.title}
          </h2>
          <p className="max-w-[320px] font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#4B5563] md:max-w-[480px] md:text-[16px] md:leading-[1.55] md:tracking-[0px] md:text-[#000000] md:opacity-80">
            {data.description}
          </p>
        </div>

        {/* Right Column: Form Card */}
        <div className="rounded-[16px] border border-[#E6E6E6] bg-[#FFFFFF] p-[24px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] sm:p-[48px] md:rounded-[24px]">
          {submitted ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center text-center md:min-h-[460px]">
              <h3 className="font-sans text-[22px] font-medium text-[#000000] md:text-[24px]">{data.successTitle}</h3>
              <p className="mt-[12px] max-w-[300px] font-sans text-[15px] text-[#7D7D7D] md:text-[16px]">
                {data.successDescription}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] md:gap-[24px]">
              <div className="flex flex-col gap-[8px] md:gap-[10px]">
                <label htmlFor="name" className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#000000] md:text-[14px] md:tracking-[0px]">
                  {data.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={data.namePlaceholder}
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="h-[44px] w-full rounded-[10px] border border-[#E6E6E6] bg-[#FFFFFF] px-[14px] py-[12px] font-sans text-[14px] text-[#000000] placeholder:text-[#7D7D7D] outline-none transition-colors focus:border-[#FDDB32] md:h-auto md:rounded-[12px] md:px-[16px] md:py-[14px] md:text-[15px]"
                />
              </div>

              <div className="flex flex-col gap-[8px] md:gap-[10px]">
                <label htmlFor="email" className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#000000] md:text-[14px] md:tracking-[0px]">
                  {data.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={data.emailPlaceholder}
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="h-[44px] w-full rounded-[10px] border border-[#E6E6E6] bg-[#FFFFFF] px-[14px] py-[12px] font-sans text-[14px] text-[#000000] placeholder:text-[#7D7D7D] outline-none transition-colors focus:border-[#FDDB32] md:h-auto md:rounded-[12px] md:px-[16px] md:py-[14px] md:text-[15px]"
                />
              </div>

              <div className="flex flex-col gap-[8px] md:gap-[10px]">
                <label htmlFor="subject" className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#000000] md:text-[14px] md:tracking-[0px]">
                  {data.subjectLabel}
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder={data.subjectPlaceholder}
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="h-[44px] w-full rounded-[10px] border border-[#E6E6E6] bg-[#FFFFFF] px-[14px] py-[12px] font-sans text-[14px] text-[#000000] placeholder:text-[#7D7D7D] outline-none transition-colors focus:border-[#FDDB32] md:h-auto md:rounded-[12px] md:px-[16px] md:py-[14px] md:text-[15px]"
                />
              </div>

              <div className="flex flex-col gap-[8px] md:gap-[10px]">
                <label htmlFor="message" className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#000000] md:text-[14px] md:tracking-[0px]">
                  {data.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={data.messagePlaceholder}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] w-full resize-none rounded-[10px] border border-[#E6E6E6] bg-[#FFFFFF] px-[14px] py-[12px] font-sans text-[14px] text-[#000000] placeholder:text-[#7D7D7D] outline-none transition-colors focus:border-[#FDDB32] md:h-auto md:rounded-[12px] md:px-[16px] md:py-[14px] md:text-[15px]"
                />
              </div>

              <button
                type="submit"
                className="mt-0 flex h-[44px] w-full items-center justify-center rounded-[10px] bg-[#FDDB32] py-[12px] font-sans text-[14px] font-medium text-[#000000] transition-colors hover:bg-[#e5c52c] md:mt-[8px] md:h-auto md:rounded-[12px] md:py-[16px] md:text-[15px]"
              >
                {data.submitLabel}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   FAQ SECTION
---------------------------------------------------------------- */

function FaqSection({ faqs: faqItems, data }: { faqs: ContactFaq[]; data: ContactUsPageData["faq"] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="flex w-full flex-col items-center bg-[#000000] py-[40px] px-[16px] lg:px-[140px] lg:py-[100px]">
      <div className="mx-auto grid w-full max-w-[1160px] gap-[24px] lg:grid-cols-[1fr_1.4fr] lg:gap-[64px]">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col lg:pt-[20px]">
          <h2 className="mb-[8px] font-sans text-[20px] font-medium leading-[24px] tracking-[0px] text-[#FFFFFF] sm:text-[48px] md:mb-[16px] md:leading-[1.1]">
            {data.title}
          </h2>
          <p className="font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#FFFFFF] sm:text-[16px] md:leading-[24px] md:tracking-[0px] md:opacity-80">
            {data.description}
          </p>
        </div>

        {/* Right Column: Accordion */}
        <div className="flex flex-col gap-[10px] md:gap-[16px]">
          {faqItems.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={faq.question} className="rounded-[16px] bg-[#FFFFFF] p-[18px] md:rounded-[20px] md:px-[28px] md:py-[24px]">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="font-sans text-[15px] font-medium leading-[20px] tracking-[-0.32px] text-[#000000] md:text-[16px] md:leading-[24px] md:tracking-[0px]">
                    {faq.question}
                  </span>
                  <span className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center text-[#000000] md:h-[24px] md:w-[24px]">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-[12px] font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#666666] md:mt-[16px] md:text-[15px] md:leading-[1.55] md:tracking-[0px] md:text-[#7D7D7D]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   FOLLOW US SECTION
---------------------------------------------------------------- */

function FollowUsSection({ socialLinks: links, title }: { socialLinks: SocialLink[]; title: string }) {
  return (
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] py-[32px] px-[32px] md:py-[80px] lg:px-[140px]">
      <h3 className="mb-[18px] font-sans text-[18px] font-medium leading-[22px] tracking-[-0.2px] text-[#000000] md:mb-[28px] md:text-[20px] md:leading-[24px] md:tracking-[0px]">
        {title}
      </h3>
      <div className="flex items-center gap-[16px]">
          {links.map(({ icon, href, label, bgColor }) => {
            const Icon = icon === "instagram" ? InstagramIcon : icon === "facebook" ? FacebookIcon : icon === "tiktok" ? TikTokIcon : YouTubeIcon;
            return (
          <a
            key={label}
            href={href}
            aria-label={label}
            className={`flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border border-[#E6E6E6] text-[#FFFFFF] transition-transform hover:scale-110 md:h-[48px] md:w-[48px] md:border-none ${bgColor}`}
          >
            <Icon className="h-[18px] w-[18px] md:h-[20px] md:w-[20px]" />
          </a>
          )})}
      </div>
    </section>
  );
}