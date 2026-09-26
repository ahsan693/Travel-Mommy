'use client';

import { useState } from "react";
import {
  Mail,
  Handshake,
  Megaphone,
  AtSign,
  Plus,
  Minus,
} from "lucide-react";

import Header from "../header/header";
import Footer from "../footer/footer";
import { contactUsData, type ContactCard, type ContactFaq, type ContactUsPageData, type SocialLink } from "../../../lib/data/contactUsData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";

/* ----------------------------------------------------------------
   INLINE SOCIAL ICONS (Exact Match to Figma)
---------------------------------------------------------------- */

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" fill="#1877F2"/>
    <path d="M32.5186 24.819L33.4542 18.723H27.6046V14.7675C27.6046 13.0965 28.4239 11.4675 31.026 11.4675H33.7224V6.279C33.7224 6.279 31.2758 5.8605 28.9806 5.8605C24.1378 5.8605 20.9634 8.811 20.9634 14.1555V18.723H15.6321V24.819H20.9634V39.5505C22.0458 39.7215 23.1539 39.8115 24.284 39.8115C25.414 39.8115 26.5222 39.7215 27.6046 39.5505V24.819H32.5186Z" fill="white"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" fill="url(#paint0_linear_instagram)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M24 10.332C28.4355 10.332 28.959 10.35 30.6855 10.431C32.2845 10.503 33.156 10.773 33.738 10.9995C34.509 11.2995 35.061 11.664 35.6385 12.2415C36.216 12.819 36.582 13.371 36.882 14.142C37.1085 14.724 37.3785 15.5955 37.4505 17.1945C37.5285 18.921 37.548 19.4445 37.548 23.88C37.548 28.3155 37.5285 28.839 37.4505 30.5655C37.3785 32.1645 37.1085 33.036 36.882 33.618C36.582 34.389 36.2175 34.941 35.64 35.5185C35.0625 36.096 34.5105 36.462 33.7395 36.762C33.1575 36.9885 32.286 37.2585 30.687 37.3305C28.9605 37.4085 28.437 37.428 24.0015 37.428C19.566 37.428 19.0425 37.4085 17.316 37.3305C15.717 37.2585 14.8455 36.9885 14.2635 36.762C13.4925 36.462 12.9405 36.096 12.363 35.5185C11.7855 34.941 11.4195 34.389 11.1195 33.618C10.893 33.036 10.623 32.1645 10.551 30.5655C10.473 28.839 10.4535 28.3155 10.4535 23.88C10.4535 19.4445 10.473 18.921 10.551 17.1945C10.623 15.5955 10.893 14.724 11.1195 14.142C11.4195 13.371 11.7855 12.819 12.363 12.2415C12.9405 11.664 13.4925 11.298 14.2635 10.998C14.8455 10.7715 15.717 10.5015 17.316 10.4295C19.0425 10.3515 19.566 10.332 24.0015 10.332H24ZM24 12.774C19.6455 12.774 19.182 12.7905 17.4915 12.867C15.939 12.9375 15.0645 13.2045 14.4825 13.431C13.713 13.731 13.161 14.0955 12.5835 14.673C12.006 15.2505 11.64 15.8025 11.34 16.5735C11.1135 17.1555 10.8435 18.03 10.7715 19.5825C10.6935 21.273 10.677 21.7365 10.677 26.091C10.677 30.4455 10.6935 30.909 10.7715 32.5995C10.8435 34.152 11.1135 35.0265 11.34 35.6085C11.64 36.378 12.0045 36.93 12.582 37.5075C13.1595 38.085 13.7115 38.451 14.4825 38.751C15.0645 38.9775 15.939 39.2475 17.4915 39.3195C19.182 39.3975 19.6455 39.414 24 39.414C28.3545 39.414 28.818 39.3975 30.5085 39.3195C32.061 39.249 32.9355 38.982 33.5175 38.7555C34.287 38.4555 34.839 38.091 35.4165 37.5135C35.994 36.936 36.36 36.384 36.66 35.613C36.8865 35.031 37.1565 34.1565 37.2285 32.604C37.3065 30.9135 37.323 30.45 37.323 26.0955C37.323 21.741 37.3065 21.2775 37.2285 19.587C37.1565 18.0345 36.8865 17.16 36.66 16.578C36.36 15.8085 35.9955 15.2565 35.418 14.679C34.8405 14.1015 34.2885 13.7355 33.5175 13.4355C32.9355 13.209 32.061 12.939 30.5085 12.867C28.818 12.789 28.3545 12.7725 24 12.7725V12.774Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M24 16.902C20.1465 16.902 17.022 20.0265 17.022 23.88C17.022 27.7335 20.1465 30.858 24 30.858C27.8535 30.858 30.978 27.7335 30.978 23.88C30.978 20.0265 27.8535 16.902 24 16.902ZM24 28.416C21.4935 28.416 19.4625 26.385 19.4625 23.8785C19.4625 21.372 21.4935 19.341 24 19.341C26.5065 19.341 28.5375 21.372 28.5375 23.8785C28.5375 26.385 26.5065 28.416 24 28.416Z" fill="white"/>
    <path d="M31.2586 18.3689C32.1583 18.3689 32.8876 17.6396 32.8876 16.7399C32.8876 15.8402 32.1583 15.1109 31.2586 15.1109C30.3589 15.1109 29.6296 15.8402 29.6296 16.7399C29.6296 17.6396 30.3589 18.3689 31.2586 18.3689Z" fill="white"/>
    <defs>
      <linearGradient id="paint0_linear_instagram" x1="8.3664" y1="41.3418" x2="38.534" y2="4.0041" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFDD55"/>
        <stop offset="0.5" stopColor="#FF543E"/>
        <stop offset="1" stopColor="#C837AB"/>
      </linearGradient>
    </defs>
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" fill="#FF0000"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M36.195 16.92C36.195 16.92 35.8425 14.4375 34.7475 13.3275C33.36 11.8725 31.815 11.8575 31.11 11.775C26.175 11.415 24.0075 11.415 24.0075 11.415C24.0075 11.415 21.84 11.415 16.905 11.775C16.2 11.8575 14.655 11.8725 13.2675 13.3275C12.1725 14.4375 11.82 16.92 11.82 16.92C11.82 16.92 11.4675 19.86 11.4675 22.785V25.215C11.4675 28.14 11.82 31.08 11.82 31.08C11.82 31.08 12.1725 33.5625 13.2675 34.6725C14.655 36.1275 16.485 36.0825 17.265 36.24C20.085 36.51 24.015 36.585 24.015 36.585C24.015 36.585 26.19 36.57 31.125 36.225C31.83 36.1425 33.375 36.1275 34.7625 34.6725C35.8575 33.5625 36.21 31.08 36.21 31.08C36.21 31.08 36.5625 28.14 36.5625 25.215V22.785C36.5475 19.86 36.195 16.92 36.195 16.92ZM21.3375 29.175V17.91L31.3425 23.58L21.3375 29.175Z" fill="white"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => {
  const pathD = "M26.4718 10V18.1132C28.4552 18.0645 30.2974 19.1009 31.3323 20.8499C31.5477 21.2132 31.7051 21.6033 31.8 22.0125V22.0163C31.8385 22.2199 31.8596 22.4278 31.8631 22.6366H27.3409C27.3444 22.5694 27.3463 22.502 27.3465 22.4346C27.3458 20.803 26.0232 19.481 24.3916 19.4802V28.1633C24.3916 29.2135 23.9576 30.218 23.1895 30.9443C22.4214 31.6705 21.3853 32.062 20.3235 32.0305C19.3093 31.9961 18.3512 31.5492 17.6534 30.785C16.9555 30.0208 16.5741 29.0028 16.5925 27.9463C16.5741 26.8898 16.9555 25.8718 17.6534 25.1075C18.3512 24.3433 19.3093 23.8964 20.3235 23.862V28.182C20.3392 28.2575 20.3475 28.3347 20.3482 28.4121C20.3478 28.5779 20.2818 28.7369 20.1645 28.8542C20.0472 28.9715 19.8882 29.0375 19.7225 29.0379C19.5567 29.0375 19.3977 28.9715 19.2804 28.8542C19.1631 28.7369 19.0971 28.5779 19.0967 28.4121C19.0967 28.3308 19.1039 28.2536 19.123 28.1764C19.2017 27.8183 19.3879 27.4925 19.6558 27.2435C19.9238 26.9946 20.2599 26.8344 20.6186 26.7845V19.467C19.1278 19.4891 17.6836 20.0384 16.5398 21.0152C15.396 21.9921 14.626 23.336 14.3683 24.811C14.1037 26.3117 14.3644 27.8631 15.0991 29.191C15.8338 30.5188 16.9959 31.5367 18.3756 32.0628C19.7554 32.589 21.2612 32.5884 22.6406 32.061C24.0201 31.5336 25.1813 30.5146 25.9147 29.1858C26.6481 27.857 26.9074 26.3048 26.6414 24.8043V24.084V16.7118C28.2611 17.5188 30.0615 17.9174 31.8818 17.876V13.3556C30.6433 13.3444 29.4312 12.9818 28.3846 12.3113C27.338 11.6408 26.4996 10.6896 25.966 9.56627L25.9228 10H26.4718Z";
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" fill="black"/>
      <path d={pathD} fill="#25F4EE" transform="translate(-1, -1)"/>
      <path d={pathD} fill="#FE2C55" transform="translate(1, 1)"/>
      <path d={pathD} fill="white"/>
    </svg>
  );
};

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
          <h1 className="text-page-h1 font-sans text-center text-[#000000]">
            {data.title}
          </h1>
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
                  className="h-[44px] w-full rounded-[10px] border border-[#E6E6E6] bg-[#FFFFFF] px-[14px] py-[12px] font-sans text-[14px] text-[#000000] placeholder:text-[#767676] transition-colors focus:border-[#FDDB32] md:h-[48px] md:rounded-[12px] md:px-[16px] md:text-[15px]"
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
                  className="h-[44px] w-full rounded-[10px] border border-[#E6E6E6] bg-[#FFFFFF] px-[14px] py-[12px] font-sans text-[14px] text-[#000000] placeholder:text-[#767676] transition-colors focus:border-[#FDDB32] md:h-[48px] md:rounded-[12px] md:px-[16px] md:text-[15px]"
                />
              </div>

              <div className="flex flex-col gap-[8px] md:gap-[10px]">
                <label htmlFor="subject" className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#000000] md:text-[14px] md:tracking-[0px]">
                  {data.subjectLabel}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="h-[44px] w-full rounded-[10px] border border-[#E6E6E6] bg-[#FFFFFF] px-[14px] py-[12px] font-sans text-[14px] text-[#000000] transition-colors focus:border-[#FDDB32] md:h-[48px] md:rounded-[12px] md:px-[16px] md:text-[15px]"
                >
                  <option value="" disabled>
                    {data.subjectPlaceholder}
                  </option>
                  <option value="General enquiry">General enquiry</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Press/Media">Press/Media</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Technical issue">Technical issue</option>
                  <option value="Other">Other</option>
                  <option value="Message">Message</option>
                </select>
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
                  className="min-h-[120px] w-full resize-none rounded-[10px] border border-[#E6E6E6] bg-[#FFFFFF] px-[14px] py-[12px] font-sans text-[14px] text-[#000000] placeholder:text-[#767676] transition-colors focus:border-[#FDDB32] md:h-auto md:rounded-[12px] md:px-[16px] md:py-[14px] md:text-[15px]"
                />
              </div>

              {/* Form Button and Text Container */}
              <div className="mt-[8px] flex w-full flex-col items-center gap-[16px]">
                <button
                  type="submit"
                  className="flex h-[44px] w-full items-center justify-center rounded-[10px] bg-[#FDDB32] py-[12px] font-sans text-[14px] font-medium text-[#000000] transition-colors hover:bg-[#e5c52c] md:h-[56px] md:rounded-[12px] md:text-[16px]"
                >
                  {data.submitLabel}
                </button>
                <p className="font-sans text-[14px] font-normal text-center text-[#666666]">
                  {data.submitDisclaimer}
                </p>
              </div>
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
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
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
                  <p id={`faq-answer-${idx}`} className="mt-[12px] font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#666666] md:mt-[16px] md:text-[15px] md:leading-[1.55] md:tracking-[0px] md:text-[#7D7D7D]">
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
      <h3 className="mb-[18px] font-sans text-[18px] font-medium leading-[22px] tracking-[-0.2px] text-[#000000] md:mb-[24px] md:text-[24px] md:leading-[24px] md:tracking-[0px]">
        {title}
      </h3>
      <div className="flex items-center justify-center gap-[24px]">
          {links.map(({ icon, href, label }) => {
            const Icon = icon === "instagram" ? InstagramIcon : icon === "facebook" ? FacebookIcon : icon === "tiktok" ? TikTokIcon : YouTubeIcon;
            return (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex h-[42px] w-[42px] shrink-0 items-center justify-center overflow-hidden rounded-[9px] shadow-sm transition-transform hover:scale-110"
          >
            <Icon className="h-full w-full" />
          </a>
          )})}
      </div>
    </section>
  );
}                       

