import { FOOTER } from "@/lib/content";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-on-primary py-8 px-4 md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8 z-10 relative">
      <div className="font-label-mono-bold text-xs uppercase tracking-widest text-surface-dim">
        {FOOTER.leftText}
      </div>
      <div className="flex items-center gap-8">
        <a href="#hero" className="font-label-mono-bold text-xs uppercase hover:text-secondary transition-colors underline decoration-surface-variant/30 underline-offset-4">
          BACK TO TOP
        </a>
      </div>
    </footer>
  );
}
