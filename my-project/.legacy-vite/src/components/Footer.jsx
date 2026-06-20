const Footer = () => {
  return (
    <footer className="w-full min-h-[100px] bg-background border-t border-grid-line grid grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-grid-unit items-center">
      <div className="col-span-12 md:col-span-4 flex items-center gap-4 py-4 md:py-0">
        <div className="font-label-mono-bold text-label-mono-bold text-primary">ENGINEERING EXCELLENCE JOURNAL</div>
        <div className="font-label-mono-sm text-label-mono-sm text-metadata-gray">©2024 [REF_000]</div>
      </div>
      <div className="col-span-12 md:col-span-8 flex flex-wrap justify-start md:justify-end gap-6 md:gap-12 pb-4 md:pb-0">
        <a className="font-label-mono-sm text-label-mono-sm text-metadata-gray hover:text-primary transition-all uppercase" href="#">X: 40.7128 Y: -74.0060</a>
        <a className="font-label-mono-sm text-label-mono-sm text-metadata-gray hover:text-primary transition-all uppercase" href="#contact">CONTACT_INITIATION</a>
        <a className="font-label-mono-sm text-label-mono-sm text-metadata-gray hover:text-primary transition-all uppercase" href="#projects">STRUCTURAL_INDEX</a>
      </div>
    </footer>
  );
};

export default Footer;
