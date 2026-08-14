import { invitationData } from "@/lib/data";
import FadeIn from "@/components/FadeIn";
import FloralDivider from "@/components/ornaments/FloralDivider";

export default function LoveStory() {
  const { loveStory } = invitationData;

  return (
    <section className="section-frame">
      <FadeIn className="mb-14 text-center">
        <p className="eyebrow mb-3">Love Story</p>
        <h2 className="font-display text-display-md text-maroon">Perjalanan Kami</h2>
        <FloralDivider className="mt-6" />
      </FadeIn>

      <div className="relative mx-auto max-w-md">
        <div className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-transparent via-rose/50 to-transparent" />

        <div className="flex flex-col gap-12">
          {loveStory.map((item, idx) => (
            <FadeIn key={item.judul} delay={idx * 0.15} className="relative pl-11">
              <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-rose bg-blush font-display text-sm text-rose-light shadow-rose">
                {idx + 1}
              </span>
              <p className="font-body text-xs uppercase tracking-[0.25em] text-rose-light">
                {item.tanggal}
              </p>
              <h3 className="mt-1 font-display text-xl text-maroon">{item.judul}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-maroon-muted">
                {item.cerita}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
