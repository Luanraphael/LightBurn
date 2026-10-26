"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { title: string; img: string };

/** Slides das páginas internas: uma por vez, em largura total, com setas e arrasto. */
export default function ShowcaseSlider({ slides, imgBase }: { slides: Slide[]; imgBase: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (i + slides.length) % slides.length;
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <div className="relative">
      <div ref={trackRef} onScroll={onScroll} className="showcase-track">
        {slides.map((s, i) => (
          <div key={s.img} className="showcase-slide">
            <Image
              src={`${imgBase}/${s.img}`}
              alt={`Mind map: ${s.title}`}
              width={1491}
              height={1055}
              sizes="(min-width: 1000px) 960px, 100vw"
              loading="eager"
              className="h-auto w-full rounded-[16px] bg-white shadow-[0_8px_18px_rgba(60,0,5,0.3)]"
            />
            <span className="sr-only">
              Page {i + 1} of {slides.length}
            </span>
          </div>
        ))}
      </div>

      <button type="button" aria-label="Previous page" onClick={() => goTo(index - 1)} className="showcase-arrow left-1 sm:-left-6">
        <ChevronLeft className="h-7 w-7" strokeWidth={3} />
      </button>
      <button type="button" aria-label="Next page" onClick={() => goTo(index + 1)} className="showcase-arrow right-1 sm:-right-6">
        <ChevronRight className="h-7 w-7" strokeWidth={3} />
      </button>

      <p className="mt-4 text-center text-sm font-bold text-white/90">
        {index + 1} / {slides.length}
      </p>
    </div>
  );
}
