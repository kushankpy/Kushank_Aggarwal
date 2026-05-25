type PageIntroProps = {
  kicker: string;
  title: string;
  subtitle: string;
};

export function PageIntro({ kicker, title, subtitle }: PageIntroProps) {
  return (
    <div className="mb-10 border-b border-[var(--line)] pb-7">
      <p className="label-mono mb-4 text-[var(--accent)]">{kicker}</p>
      <h1 className="heading-serif text-bright text-[clamp(2.3rem,5.5vw,4.9rem)] leading-[0.93]">
        {title}
      </h1>
      <p className="body-copy mt-4 max-w-[65ch] text-[1.08rem] text-soft">{subtitle}</p>
    </div>
  );
}
