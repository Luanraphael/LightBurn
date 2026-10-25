import Image from "next/image";
import type { ReactNode } from "react";
import { Check, ChevronsDown, Gift, Minus, Plus, ShieldCheck, TriangleAlert } from "lucide-react";

const IMG = "/assets";
// TODO: trocar pelo link de checkout da Hotmart desta oferta quando for enviado.
const CHECKOUT_URL = "#offer";
const display = "font-display";

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */

const MAIN_PRODUCT = "100 Visual LightBurn Mind Maps";
const MAIN_MOCKUP = { img: "main-100-mind-maps.png", w: 1306, h: 1204 };

const HERO_BULLETS = ["Lifetime access", "Instant delivery to your email", "7-day money-back guarantee"];

const INCLUDES_TOP = [
  "A complete library of 100 Visual LightBurn Mind Maps, organized by task, taking you from beginner to advanced.",
  "Each mind map shows you which tool to use, where to click, the step-by-step process, and what to check before finishing.",
  "Real LightBurn interface screenshots with arrows, annotations, and visual highlights to make every step easier to follow.",
  "Module 1: Getting Started & Understanding the LightBurn Interface",
  "Module 2: Importing & Organizing Files (SVG, DXF, Images)",
  "Module 3: Shapes & Design Tools (Outlines, Offsets, Welding & Separating Shapes)",
  "Module 4: Working with Text (Fonts, Converting to Curves, Curved Text & Names for Cutting)",
  "Module 5: Alignment & Positioning",
  "Module 6: Layers & Settings (Line, Fill, Fill + Line)",
  "Module 7: Images & Laser Engraving",
  "Module 8: Preparing Your Project for the Laser (Start From, User Origin, Frame)",
  "Module 9: Previewing & Running Your Project (Preview & Final Checks)",
  "Module 10: Everyday Projects (Keychains, Signs, Tags, Simple Boxes & Batch Production)",
];

const INCLUDES_BOTTOM = [
  "Short, straightforward explanations without long video lessons or unnecessary theory.",
  "Reusable visual mind maps you can refer to anytime you forget how to use a tool or feature.",
  "Access your mind maps on your phone, tablet, or computer while working directly in LightBurn.",
  "PDF format, ready to view, download, or print whenever you need.",
  "Instant delivery to your email after purchase.",
  "Lifetime access with a one-time payment. No subscriptions or monthly fees.",
];

const TRUST_BADGES = [
  { label: "7-Day Guarantee", icon: null },
  { label: "Instant Access", icon: "icone-acesso.png" },
  { label: "Dedicated Support", icon: "icone-suporte.png" },
  { label: "Satisfaction Guaranteed", icon: "icone-satisfacao.png" },
  { label: "100% Secure Checkout", icon: "icone-compra-segura.png" },
];

// Páginas horizontais reais dos mapas mentais, mostradas no carrossel "Take a look inside".
const SHOWCASE = [
  { title: "Getting to Know the LightBurn Workspace", img: "page-01-workspace.png" },
  { title: "How to Navigate the Screen Without Getting Lost in the Project", img: "page-02-navigate.png" },
  { title: "How to Show and Hide Windows and Panels in LightBurn", img: "page-03-windows-panels.png" },
  { title: "Main LightBurn Panels and What Each One Does", img: "page-04-main-panels.png" },
  { title: "Zoom and Navigation: How to Zoom In, Zoom Out and Fit the Project", img: "page-05-zoom.png" },
  { title: "How to Open, Save and Create a Copy of Your Project", img: "page-06-open-save.png" },
];

const BONUSES = [
  { title: "Flowchart: “Which Tool Should I Use?”", img: "bonus-which-tool-flowchart.png", price: "WAS $17.90" },
  { title: "Guide to Common Mistakes in LightBurn", img: "bonus-common-mistakes.png", price: "WAS $19.90" },
  { title: "Checklist Before Starting the Laser", img: "bonus-laser-checklist.png", price: "WAS $14.90" },
  { title: "Visual Guide to LightBurn Shortcuts", img: "bonus-shortcuts.png", price: "WAS $17.90" },
];

const FEATURES = [
  {
    img: "icone-download.png",
    title: "Open it on any device",
    text: "Keep your mind maps open on your phone, tablet, or computer while you work in LightBurn, and find the step you need in seconds.",
  },
  {
    img: "icone-acceso-seguro.png",
    title: "Instant, secure access",
    text: "As soon as your payment is confirmed, you'll get a link in your email to download everything. No waiting and no extra steps.",
  },
  {
    img: "icone-imprime.jpg",
    title: "Print the ones you use most",
    text: "Everything comes in high-quality PDF. Print your go-to maps and pin them up next to your laser for quick reference.",
  },
];

const WHY = [
  "Every mind map shows the exact tool, the exact clicks, and the right order, so you stop guessing and start finishing projects.",
  "Real LightBurn screenshots with arrows and highlights, so what you see on the page matches what you see on your screen.",
  "Organized by task, from your first file to batch production, so you always know where to look.",
  "Short and visual. No long videos to scrub through and no theory you'll never use.",
  "Fewer wasted materials and failed burns, because you check the right settings before you hit Start.",
];

const FOR_WHOM = [
  "Beginners who just got a laser and feel lost in LightBurn.",
  "Hobbyists who want to make keychains, signs, and gifts without endless trial and error.",
  "Small business owners who sell engraved and laser-cut products.",
  "Makers who already use LightBurn but keep forgetting where things are.",
  "Anyone who learns better by seeing than by sitting through long video lessons.",
];

const OFFER_ITEMS = [
  "100 Visual LightBurn Mind Maps, from beginner to advanced",
  "10 modules organized by task",
  "Real LightBurn screenshots with arrows and annotations",
  "Bonus: Visual Guide to File Formats",
  "Bonus: Flowchart “Which Tool Should I Use?”",
  "Bonus: Guide to Common Mistakes in LightBurn",
  "Bonus: Checklist Before Starting the Laser",
  "Bonus: Visual Guide to LightBurn Shortcuts",
  "PDF format, ready to view, download, or print",
  "Access on your phone, tablet, or computer",
  "Lifetime access",
  "Instant delivery to your email",
];

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "How will I get access to the mind maps?",
    a: (
      <>
        As soon as your payment is confirmed, <strong>you&apos;ll automatically receive everything</strong> in your
        email.
        <br />
        No receipts to send and no extra steps. Our system delivers it all <strong>instantly and securely</strong>.
        <br />
        Just make sure you type your email address correctly at checkout.
      </>
    ),
  },
  {
    q: "Is this a physical or digital product?",
    a: (
      <>
        It&apos;s <strong>100% digital</strong>. You get high-quality PDFs that you can open on your phone, tablet, or
        computer, or <strong>print whenever you want</strong> to keep next to your laser.
      </>
    ),
  },
  {
    q: "I've never used LightBurn. Is this for me?",
    a: (
      <>
        Yes! The mind maps <strong>start from the very basics</strong>, like getting to know the workspace and
        navigating the screen, and walk you step by step all the way to complete projects and batch production.
      </>
    ),
  },
  {
    q: "Does it work with my laser?",
    a: (
      <>
        The mind maps are all about <strong>using LightBurn itself</strong>: the interface, tools, layers, and
        settings. So they&apos;re useful for <strong>any diode, CO2, or fiber laser that runs on LightBurn</strong>.
      </>
    ),
  },
  {
    q: "Is there a guarantee?",
    a: (
      <>
        Absolutely!
        <br />
        You get an <strong>unconditional 7-day money-back guarantee</strong>.
        <br />
        Go through the material at your own pace, and if it&apos;s not what you expected for any reason, just ask for a
        full refund. No hassle and no questions asked.
      </>
    ),
  },
  {
    q: "What if I have questions?",
    a: (
      <>
        Our team offers <strong>dedicated support</strong> by email. Just reach out through the support contact
        included with your purchase and we&apos;ll be happy to help.
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Peças de clay                                                       */
/* ------------------------------------------------------------------ */

/** Seção vermelha: equivale às seções de fundo azul da página original. */
function RedSlab({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section
      id={id}
      className={`clay-red-slab relative w-full overflow-hidden py-14 text-white ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/** Seção clara: equivale às seções de fundo branco da página original. */
function LightSection({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`relative w-full py-16 ${className}`}>
      {children}
    </section>
  );
}

function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[680px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** Destaque de palavra sobre o vermelho: só a cor dourada, sem caixa. */
function MarkOnRed({ children }: { children: ReactNode }) {
  return (
    <span className="text-gold">{children}</span>
  );
}

function SoftMarkOnRed({ children }: { children: ReactNode }) {
  return (
    <span className="text-gold font-bold">{children}</span>
  );
}

function CheckOrb({ size = "md" }: { size?: "sm" | "md" }) {
  const dims = size === "sm" ? "h-6 w-6" : "h-7 w-7";
  return (
    <span
      className={`clay-orb inline-flex ${dims} shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white`}
    >
      <Check className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} strokeWidth={3.5} />
    </span>
  );
}

function CheckList({ items, onRed = false, className = "" }: { items: string[]; onRed?: boolean; className?: string }) {
  return (
    <ul className={`flex flex-col gap-3.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckOrb />
          <span
            className={`pt-0.5 text-base font-medium leading-relaxed ${onRed ? "text-white" : "text-ink"}`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CtaButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`clay-button ${display} inline-flex min-h-16 w-full items-center justify-center rounded-[20px] px-6 py-3 text-center text-base font-black tracking-wide sm:text-lg sm:w-auto ${className}`}
    >
      {children}
    </a>
  );
}

function IconOrb({ children, tone = "red" }: { children: ReactNode; tone?: "red" | "white" }) {
  const toneClass =
    tone === "red"
      ? "bg-gradient-to-br from-[#e4111b] to-[#a50309] text-white"
      : "bg-gradient-to-br from-white to-[#ffe3ea] text-love-600";
  return (
    <span className={`clay-orb inline-flex h-16 w-16 items-center justify-center rounded-full ${toneClass}`}>
      {children}
    </span>
  );
}

function SectionTitle({ children, onRed = false, className = "" }: { children: ReactNode; onRed?: boolean; className?: string }) {
  return (
    <h2
      className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl md:text-5xl ${
        onRed ? "text-white" : "text-ink"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

/** Mockup principal: PNG com fundo transparente, mostrado direto, sem caixa atrás. */
function MainMockup({ priority = false, className = "" }: { priority?: boolean; className?: string }) {
  return (
    <Image
      src={`${IMG}/${MAIN_MOCKUP.img}`}
      alt={`${MAIN_PRODUCT}: From Beginner to Advanced`}
      width={MAIN_MOCKUP.w}
      height={MAIN_MOCKUP.h}
      priority={priority}
      className={`mx-auto w-full ${className}`}
    />
  );
}

/** Vitrine: as páginas horizontais passam sozinhas, em loop contínuo. */
function Showcase({ className = "" }: { className?: string }) {
  const loop = [...SHOWCASE, ...SHOWCASE];
  return (
    <div className={`vitrine w-full overflow-hidden py-4 ${className}`}>
      <div className="vitrine-track">
        {loop.map((p, i) => (
          <div key={`${p.img}-${i}`} className="shrink-0 pr-4" aria-hidden={i >= SHOWCASE.length}>
            <Image
              src={`${IMG}/${p.img}`}
              alt={i < SHOWCASE.length ? `Mind map: ${p.title}` : ""}
              width={1491}
              height={1055}
              sizes="(min-width: 640px) 440px, 300px"
              loading="eager"
              className="w-[300px] rounded-[16px] bg-white shadow-[0_12px_28px_rgba(60,0,5,0.35)] sm:w-[440px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

export default function LightBurnPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Blobs de fundo (luz ambiente do canvas) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[60vh] w-[60vh] rounded-full bg-[#c8060f]/10 blur-3xl" />
        <div className="absolute -right-[10%] top-[20%] h-[60vh] w-[60vh] rounded-full bg-[#e4111b]/10 blur-3xl" />
      </div>

      {/* Barra promocional fixa */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div
          className={`${display} flex h-11 w-full items-center justify-center gap-1.5 clay-topbar px-4 text-center text-[15px] font-extrabold tracking-wide text-white`}
        >
          Special price available
          <span className="animate-clay-blink rounded-full bg-white px-2.5 py-0.5 text-love-600 underline underline-offset-2">
            TODAY
          </span>
          only!
        </div>
      </div>

      <main className="flex flex-col pt-11">
        {/* 1 · HERO */}
        <RedSlab className="pt-6! sm:pt-12!">
          <Container className="flex flex-col items-center text-center">
            <h1 className={`${display} px-2 text-[30px] font-extrabold leading-[1.18] tracking-tight sm:text-5xl md:text-6xl`}>
              100 Visual <MarkOnRed>LightBurn Mind Maps:</MarkOnRed> from beginner to advanced.
            </h1>

            <MainMockup priority className="mt-6" />

            <p className="mt-8 text-lg font-medium leading-relaxed text-white/95 sm:text-xl">
              Discover the <SoftMarkOnRed>100 Visual LightBurn Mind Maps</SoftMarkOnRed>, a complete step-by-step
              library built with <strong className="font-extrabold">real LightBurn screenshots</strong>, arrows, and
              highlights that show you{" "}
              <SoftMarkOnRed>exactly which tool to use, where to click, and what to check</SoftMarkOnRed> before you hit
              Start.
            </p>

            <CheckList items={HERO_BULLETS} onRed className="mt-8 w-full text-left" />

            <CtaButton href="#offer" className="mt-10">
              YES, I WANT THE MIND MAPS
            </CtaButton>
          </Container>
        </RedSlab>

        {/* 2 · Tudo o que vem */}
        <LightSection>
          <Container>
            <h2 className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl`}>
              EVERYTHING YOU&apos;LL LEARN WITH THE <span className="text-love-500">100 VISUAL LIGHTBURN MIND MAPS</span>
            </h2>

            <CheckList items={INCLUDES_TOP} className="mt-10" />

            <MainMockup className="mt-10" />

            <CheckList items={INCLUDES_BOTTOM} className="mt-10" />
          </Container>
        </LightSection>

        {/* 3 · Selos de confiança */}
        <LightSection className="pt-0">
          <Container className="grid grid-cols-1 gap-5">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="clay-card flex flex-col items-center gap-3 rounded-[32px] px-6 py-6 text-center">
                {badge.icon ? (
                  <Image src={`${IMG}/${badge.icon}`} alt="" width={512} height={512} className="h-[84px] w-[84px]" />
                ) : (
                  <span className="clay-orb inline-flex h-[84px] w-[84px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white">
                    <Check className="h-11 w-11" strokeWidth={3.5} />
                  </span>
                )}
                <span className={`${display} text-2xl font-extrabold text-ink`}>{badge.label}</span>
              </div>
            ))}
          </Container>
        </LightSection>

        {/* 4 · Vitrine + O que vem + 5 · Data + 6 · Bônus */}
        <RedSlab id="inside">
          <Container>
            <SectionTitle onRed>
              Take a look <MarkOnRed>inside</MarkOnRed>
            </SectionTitle>
          </Container>

          <Showcase className="mt-8" />

          <Container className="mt-14">
            <SectionTitle onRed>
              With the <MarkOnRed>{MAIN_PRODUCT}</MarkOnRed> you&apos;ll get access to:
            </SectionTitle>

            <article className="clay-red-card mt-10 flex flex-col gap-5 rounded-[32px] p-4 sm:p-8">
              <h3 className={`${display} px-2 text-center text-2xl font-extrabold leading-tight text-white`}>
                {MAIN_PRODUCT}: From Beginner to Advanced
              </h3>
              <MainMockup />
            </article>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#offer">I WANT THE MIND MAPS</CtaButton>
            </div>
          </Container>

          {/* 5 · Data */}
          <Container className="mt-16">
            <div className="clay-red-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center">
              <h2 className={`${display} text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl`}>
                ORDER ON <MarkOnRed>OCTOBER 24, 25 AND 26</MarkOnRed> AND YOU&apos;LL ALSO GET
              </h2>
              <IconOrb tone="white">
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>
          </Container>

          {/* 6 · Bônus */}
          <Container className="mt-16">
            <SectionTitle onRed>
              <MarkOnRed>EXCLUSIVE BONUSES</MarkOnRed> to make every project easier
            </SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb tone="white">
                <Gift className="h-8 w-8" strokeWidth={2.5} />
              </IconOrb>
            </div>
            <p className="mt-8 text-center text-lg font-medium leading-relaxed text-white/95">
              When you order today, you&apos;re not just getting the 100 mind maps. You&apos;ll also get{" "}
              <SoftMarkOnRed>exclusive bonuses</SoftMarkOnRed> that help you pick the right file, the right tool, and the
              right settings, so you waste less material and get clean results faster.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {/* 1º bônus: layout próprio (título → imagem → subtítulo → descrição) */}
              <article className="clay-red-card flex flex-col gap-5 rounded-[32px] p-4 text-center sm:p-8">
                <h3 className={`${display} text-2xl font-extrabold leading-tight text-white`}>
                  Visual Guide to File Formats
                </h3>
                <Image
                  src={`${IMG}/bonus-file-formats.png`}
                  alt="Visual Guide to File Formats"
                  width={1306}
                  height={1204}
                  className="w-full"
                />
                <h4 className={`${display} text-xl font-extrabold text-white`}>Never import the wrong file again:</h4>
                <p className="px-2 text-left text-base font-medium leading-relaxed text-white/90">
                  A visual guide to the file types you&apos;ll use in LightBurn, like SVG, DXF, PDF, PNG, and JPG. See
                  which format works best for cutting and which one for engraving, how to import each one the right
                  way, and how to avoid the import problems that ruin a project before it even starts.
                </p>
                <BonusPrice price="WAS $19.90" />
              </article>

              {BONUSES.map((b) => (
                <article key={b.title} className="clay-red-card flex flex-col gap-5 rounded-[32px] p-4 pb-8 text-center sm:p-8">
                  <Image src={`${IMG}/${b.img}`} alt={b.title} width={1306} height={1204} className="mx-auto w-full" />
                  <h3 className={`${display} px-2 text-2xl font-extrabold leading-tight text-white`}>{b.title}</h3>
                  <BonusPrice price={b.price} />
                </article>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#offer">I WANT THE MIND MAPS</CtaButton>
            </div>
          </Container>
        </RedSlab>

        {/* 7 · Recursos práticos */}
        <LightSection>
          <Container>
            <h2 className={`${display} clay-text-gradient text-center text-5xl font-black leading-[1.1] tracking-tight md:text-6xl`}>
              Made to use right next to your laser
            </h2>
            <div className="mt-8 flex justify-center">
              <IconOrb>
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>

            <div className="mx-auto mt-10 flex max-w-[480px] flex-col gap-8">
              {FEATURES.map((f) => (
                <div key={f.title} className="clay-card flex flex-col items-center gap-4 rounded-[32px] p-8 text-center">
                  <Image
                    src={`${IMG}/${f.img}`}
                    alt=""
                    width={512}
                    height={512}
                    className="h-32 w-32 object-contain mix-blend-multiply"
                  />
                  <h3 className={`${display} text-2xl font-extrabold leading-tight text-ink`}>{f.title}</h3>
                  <p className="text-base font-medium leading-relaxed text-muted">{f.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </LightSection>

        {/* 8 · Por quê? + Para quem? */}
        <RedSlab>
          <Container>
            <SectionTitle onRed>
              Why the <MarkOnRed>{MAIN_PRODUCT}</MarkOnRed> will change the way you use your laser
            </SectionTitle>

            <MainMockup className="mt-10" />

            <div className="clay-red-card mt-12 rounded-[32px] p-6 sm:p-8">
              <CheckList items={WHY} onRed />
            </div>

            <SectionTitle onRed className="mt-14">
              Who is this for?
            </SectionTitle>

            <div className="clay-red-card mt-10 rounded-[32px] p-6 sm:p-8">
              <CheckList items={FOR_WHOM} onRed />
            </div>
          </Container>
        </RedSlab>

        {/* 9 · Oferta */}
        <LightSection id="offer" className="scroll-mt-20">
          <Container>
            <SectionTitle>WE HAVE SOMETHING SPECIAL FOR YOU</SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb>
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>

            <div className="relative mt-14">
              {/* Selo "Best Seller" flutuando acima do card */}
              <div className="absolute -top-5 left-1/2 z-20 -translate-x-1/2">
                <span
                  className={`${display} clay-orb inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-br from-white to-[#ffe3ea] px-5 py-2.5 text-sm font-black tracking-wide text-love-600`}
                >
                  🌟 Best Seller
                </span>
              </div>

              <div className="clay-red-slab relative overflow-hidden rounded-[48px] px-5 pb-10 pt-14 text-white sm:px-10">
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className={`${display} text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl`}>
                    {MAIN_PRODUCT}
                    <br />
                    <MarkOnRed>COMPLETE PACKAGE</MarkOnRed>
                  </h3>

                  <MainMockup className="mt-8" />

                  <div className="mt-8 w-full text-left">
                    <ul className="flex flex-col gap-3">
                      {OFFER_ITEMS.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckOrb size="sm" />
                          <span className="pt-0.5 text-[15px] font-bold leading-snug text-white">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className={`${display} mt-10 text-xl font-extrabold text-white/75 line-through decoration-2`}>
                    WAS $47.00
                  </p>
                  <p className={`${display} mt-1 text-2xl font-black tracking-wide`}>TODAY ONLY</p>
                  <p className={`${display} mt-1 text-8xl font-black leading-none tracking-tight`}>$10</p>
                  <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-love-600 shadow-[var(--shadow-clay-orb)]">
                    <TriangleAlert className="h-4 w-4 text-[#f59e0b]" strokeWidth={2.75} />
                    You can pay in your local currency.
                  </p>
                  <p className="mt-6 text-sm font-bold text-white/90">One-time payment</p>

                  <CtaButton href={CHECKOUT_URL} className="mt-6 sm:min-w-[320px]">
                    Buy now
                  </CtaButton>
                  <p className="mt-3 text-xs font-bold uppercase tracking-widest text-white/85">100% secure payment</p>
                </div>
              </div>
            </div>
          </Container>
        </LightSection>

        {/* 10 · Garantia */}
        <RedSlab>
          <Container>
            <div className="clay-red-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center sm:px-10">
              <span className="clay-orb inline-flex h-[120px] w-[120px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white">
                <ShieldCheck className="h-16 w-16" strokeWidth={2.25} />
              </span>
              <h2 className={`${display} text-3xl font-black tracking-tight sm:text-4xl`}>7-DAY MONEY-BACK GUARANTEE</h2>
              <p className="text-lg font-medium leading-relaxed text-white/95">
                Buy with complete peace of mind. Once your order is confirmed, you have 7 days to go through the mind
                maps, explore every detail and, if you feel it&apos;s not what you expected, ask for a full refund with no
                hassle.
              </p>
              <CtaButton href={CHECKOUT_URL} className="sm:min-w-[320px]">
                Buy now
              </CtaButton>
            </div>
          </Container>
        </RedSlab>

        {/* 11 · FAQ */}
        <LightSection>
          <Container>
            <div className="text-center">
              <p className={`${display} clay-text-gradient text-7xl font-black leading-none tracking-tight sm:text-8xl`}>FAQ</p>
              <h2 className={`${display} mt-3 text-2xl font-black tracking-wide text-ink sm:text-3xl`}>
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>

            <div className="mt-10 flex flex-col gap-5">
              {FAQ.map((item, i) => (
                <details
                  key={item.q}
                  open={i === 0}
                  className="clay-faq clay-card group rounded-[24px] px-5 py-1 hover:-translate-y-1"
                >
                  <summary className="flex min-h-16 cursor-pointer items-center gap-4 py-3">
                    <span className="clay-orb inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#e4111b] to-[#a50309] text-white">
                      <Plus className="faq-icon-closed h-5 w-5" strokeWidth={3} />
                      <Minus className="faq-icon-open h-5 w-5" strokeWidth={3} />
                    </span>
                    <span className={`${display} text-left text-lg font-extrabold leading-snug text-ink`}>{item.q}</span>
                  </summary>
                  <div className="pb-5 pl-14 pr-1 text-base font-medium leading-relaxed text-muted [&_strong]:font-bold [&_strong]:text-ink">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href={CHECKOUT_URL} className="sm:min-w-[320px]">
                Buy now
              </CtaButton>
            </div>
          </Container>
        </LightSection>

        {/* 12 · Rodapé */}
        <footer className="pb-6 text-center text-[13px]">
          <div className="font-medium">
            <a href="link-para-politica.html" className="mx-2.5 text-love-ink hover:underline">
              Privacy Policy
            </a>
            <span className="text-muted">|</span>
            <a href="link-para-termos.html" className="mx-2.5 text-love-ink hover:underline">
              Terms of Service
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-[560px] px-4 text-muted">
            This product is not affiliated with or endorsed by LightBurn Software. LightBurn is a trademark of its
            respective owner.
          </p>
          <p className="mt-2 text-muted">© 2026 All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

function BonusPrice({ price }: { price: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="clay-orb inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-white to-[#ffe3ea] text-love-600">
        <Gift className="h-6 w-6" strokeWidth={2.5} />
      </span>
      <span className={`${display} text-lg font-extrabold text-white/75 line-through decoration-2`}>{price}</span>
      <span
        className={`${display} clay-orb inline-flex items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 px-5 py-1.5 text-base font-black tracking-widest text-white`}
      >
        FREE
      </span>
    </div>
  );
}
