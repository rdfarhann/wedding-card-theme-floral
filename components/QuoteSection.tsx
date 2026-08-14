import Image from "next/image";
import { invitationData } from "@/lib/data";
import FadeIn from "@/components/FadeIn";
import FloralDivider from "@/components/ornaments/FloralDivider";

export default function QuoteSection() {
  const { ayat, backgroundSection } = invitationData;

  return (
    <section className="section-frame relative overflow-hidden text-center">
      {backgroundSection && (
        <>
          <Image
            src={backgroundSection}
            alt=""
            fill
            sizes="100vw"
            className="pointer-events-none absolute inset-0 object-cover opacity-20"
          />
          <div className="pointer-events-none absolute inset-0 bg-blush/85" />
        </>
      )}
      <FadeIn className="relative z-10">
        <FloralDivider className="mb-8" />
        {ayat.teksArab && (
          <p dir="rtl" className="mb-6 font-display text-2xl leading-loose text-maroon sm:text-3xl">
            {ayat.teksArab}
          </p>
        )}
        <p className="font-display text-lg italic leading-relaxed text-maroon-soft sm:text-xl">
          &ldquo;{ayat.terjemahan}&rdquo;
        </p>
        <p className="mt-5 font-body text-xs uppercase tracking-[0.3em] text-rose-light">
          {ayat.sumber}
        </p>
      </FadeIn>
    </section>
  );
}
