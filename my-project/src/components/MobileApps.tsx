"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { Smartphone, Download, Star } from "lucide-react";

interface AppData {
  id: string;
  appName: string;
  packageName: string;
  playStoreUrl: string;
  iconUrl: string;
  status: string;
  description: string;
}

const FALLBACK_DATA: AppData[] = [
  {
    "id": "com.vaultx.vault_x",
    "appName": "Vault X",
    "packageName": "com.vaultx.vault_x",
    "playStoreUrl": "https://play.google.com/store/apps/details?id=com.vaultx.vault_x",
    "iconUrl": "/images/vaultx.png",
    "status": "production",
    "description": "The ultimate link vault. Save, organize, and secure your digital bookmarks effortlessly."
  },
  {
    "id": "com.trusttracker.trust_tracker_flutter",
    "appName": "Trust Tracker",
    "packageName": "com.trusttracker.trust_tracker_flutter",
    "playStoreUrl": "https://play.google.com/store/apps/details?id=com.trusttracker.trust_tracker_flutter",
    "iconUrl": "/images/trust-tracker.png",
    "status": "production",
    "description": "A secure personal finance app to effortlessly track your subscriptions and manage daily expenses"
  },
  {
    "id": "com.snapdocs.app",
    "appName": "SnapDocs",
    "packageName": "com.snapdocs.app",
    "playStoreUrl": "https://play.google.com/store/apps/details?id=com.snapdocs.app",
    "iconUrl": "/images/snapdocs.png",
    "status": "production",
    "description": "Offline secure document storage application."
  },
  {
    "id": "com.noctune.music",
    "appName": "Noctune",
    "packageName": "com.noctune.music",
    "playStoreUrl": "https://play.google.com/store/apps/details?id=com.noctune.music",
    "iconUrl": "/images/noctune.png",
    "status": "coming_soon",
    "description": "Modern music player for music lovers who want to listen offline."
  },
  {
    "id": "com.divinegeeta.app",
    "appName": "Divine Geeta: Daily Wisdom",
    "packageName": "com.divinegeeta.app",
    "playStoreUrl": "https://play.google.com/store/apps/details?id=com.divinegeeta.app",
    "iconUrl": "/images/divine-geeta.png",
    "status": "coming_soon",
    "description": "Daily spiritual wisdom and insights for a peaceful life."
  }
];

export function MobileApps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [apps, setApps] = useState<AppData[]>(FALLBACK_DATA);

  useEffect(() => {
    // Attempt to fetch fresh data if available
    const fetchApps = async () => {
      try {
        const res = await fetch("https://raw.githubusercontent.com/kachakaran6/Application-json/main/db.json");
        if (res.ok) {
          const data = await res.json();
          if (data && data.apps) {
            setApps(data.apps);
          }
        }
      } catch (err) {
        console.warn("Using fallback mobile apps data", err);
      }
    };
    fetchApps();
  }, []);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const element = containerRef.current;
    const gridItems = gridRef.current?.children;
    
    if (!element || !gridItems) return;

    if (isReducedMotion) {
      Array.from(gridItems).forEach(item => {
        (item as HTMLElement).style.opacity = "1";
        (item as HTMLElement).style.transform = "translateY(0)";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: gridItems,
              opacity: [0, 1],
              translateY: [30, 0],
              delay: anime.stagger(150),
              duration: 800,
              easing: "easeOutExpo",
            });
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [apps]);

  // Construct icon URL checking for both relative and absolute paths
  const getIconSource = (iconUrl: string) => {
    if (iconUrl.startsWith("http")) return iconUrl;
    // Attempt to point to the raw github repo folder for images
    return `https://raw.githubusercontent.com/kachakaran6/Application-json/main${iconUrl.startsWith('/') ? '' : '/'}${iconUrl}`;
  };

  return (
    <section id="mobile-apps" className="w-full px-4 md:px-margin-desktop py-24 border-b border-grid-line bg-surface-bright relative" ref={containerRef}>
      <div className="mb-16 flex items-center gap-4">
        <span className="font-label-mono-bold text-label-mono-bold text-secondary tracking-[0.1em]">
          MOBILE APPS
        </span>
        <div className="h-px bg-grid-line flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={gridRef}>
        {apps.map((app, index) => (
          <div 
            key={app.id || index} 
            style={{ opacity: 0 }}
            className="flex flex-col border border-grid-line bg-paper-white p-6 relative group transition-colors hover:border-secondary hover:shadow-[4px_4px_0px_var(--color-secondary)] duration-300"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-surface-dim border border-grid-line flex-shrink-0 flex items-center justify-center overflow-hidden">
                {app.iconUrl ? (
                  // Using standard img tag because next/image domains would need to be configured for github raw content
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={getIconSource(app.iconUrl)} 
                    alt={app.appName}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to icon if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('fallback-icon');
                    }}
                  />
                ) : (
                  <Smartphone className="text-secondary opacity-50" />
                )}
                {/* Fallback icon sibling */}
                <Smartphone className="hidden sibling-fallback text-secondary opacity-50" />
              </div>
              
              <div className="flex flex-col gap-1">
                <h3 className="font-headline-md text-xl font-bold leading-tight">{app.appName}</h3>
                <div className="flex items-center gap-2">
                  <span className={`font-label-mono-bold text-[0.625rem] uppercase px-2 py-0.5 border ${app.status === 'production' ? 'border-secondary text-secondary' : 'border-metadata-gray text-metadata-gray'}`}>
                    {app.status === 'production' ? 'Live' : 'Coming Soon'}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="font-body-md text-on-surface-variant text-sm mb-8 flex-grow leading-relaxed">
              {app.description}
            </p>
            
            <div className="mt-auto pt-4 border-t border-grid-line">
              <a 
                href={app.status === 'production' ? app.playStoreUrl : '#'} 
                target={app.status === 'production' ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-3 font-label-mono-bold text-sm uppercase transition-all ${
                  app.status === 'production' 
                    ? 'bg-primary text-on-primary hover:bg-secondary active:translate-y-1' 
                    : 'bg-surface-dim text-metadata-gray cursor-not-allowed'
                }`}
              >
                {app.status === 'production' ? (
                  <>
                    <Download size={16} /> Get on Google Play
                  </>
                ) : (
                  <>
                    <Star size={16} /> In Development
                  </>
                )}
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .fallback-icon + .sibling-fallback { display: block; }
      `}} />
    </section>
  );
}
