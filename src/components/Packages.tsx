import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const serviceKeys = ["webDev", "mobileDev", "desktopDev", "automation", "uiuxDesign"] as const;

type ServiceKey = typeof serviceKeys[number];

const packagesData: Record<ServiceKey, { tiers: { nameKey: string; priceKey: string; label: string; labelColor: string; descKey: string; features: string[]; popular: boolean }[] }> = {
  webDev: {
    tiers: [
      {
        nameKey: "packages.services.webDev.starter.name",
        priceKey: "packages.services.webDev.starter.price",
        label: "STARTER",
        labelColor: "bg-foreground/10 text-foreground",
        descKey: "packages.services.webDev.starter.description",
        features: Array.from({ length: 5 }, (_, i) => `packages.services.webDev.starter.features.f${i + 1}`),
        popular: false,
      },
      {
        nameKey: "packages.services.webDev.professional.name",
        priceKey: "packages.services.webDev.professional.price",
        label: "RECOMMENDED",
        labelColor: "bg-accent text-accent-foreground",
        descKey: "packages.services.webDev.professional.description",
        features: Array.from({ length: 6 }, (_, i) => `packages.services.webDev.professional.features.f${i + 1}`),
        popular: true,
      },
      {
        nameKey: "packages.services.webDev.enterprise.name",
        priceKey: "packages.services.webDev.enterprise.price",
        label: "PREMIUM",
        labelColor: "bg-foreground text-background",
        descKey: "packages.services.webDev.enterprise.description",
        features: Array.from({ length: 7 }, (_, i) => `packages.services.webDev.enterprise.features.f${i + 1}`),
        popular: false,
      },
    ],
  },
  mobileDev: {
    tiers: [
      {
        nameKey: "packages.services.mobileDev.starter.name",
        priceKey: "packages.services.mobileDev.starter.price",
        label: "STARTER",
        labelColor: "bg-foreground/10 text-foreground",
        descKey: "packages.services.mobileDev.starter.description",
        features: Array.from({ length: 5 }, (_, i) => `packages.services.mobileDev.starter.features.f${i + 1}`),
        popular: false,
      },
      {
        nameKey: "packages.services.mobileDev.professional.name",
        priceKey: "packages.services.mobileDev.professional.price",
        label: "RECOMMENDED",
        labelColor: "bg-accent text-accent-foreground",
        descKey: "packages.services.mobileDev.professional.description",
        features: Array.from({ length: 6 }, (_, i) => `packages.services.mobileDev.professional.features.f${i + 1}`),
        popular: true,
      },
      {
        nameKey: "packages.services.mobileDev.enterprise.name",
        priceKey: "packages.services.mobileDev.enterprise.price",
        label: "PREMIUM",
        labelColor: "bg-foreground text-background",
        descKey: "packages.services.mobileDev.enterprise.description",
        features: Array.from({ length: 7 }, (_, i) => `packages.services.mobileDev.enterprise.features.f${i + 1}`),
        popular: false,
      },
    ],
  },
  desktopDev: {
    tiers: [
      {
        nameKey: "packages.services.desktopDev.starter.name",
        priceKey: "packages.services.desktopDev.starter.price",
        label: "STARTER",
        labelColor: "bg-foreground/10 text-foreground",
        descKey: "packages.services.desktopDev.starter.description",
        features: Array.from({ length: 5 }, (_, i) => `packages.services.desktopDev.starter.features.f${i + 1}`),
        popular: false,
      },
      {
        nameKey: "packages.services.desktopDev.professional.name",
        priceKey: "packages.services.desktopDev.professional.price",
        label: "RECOMMENDED",
        labelColor: "bg-accent text-accent-foreground",
        descKey: "packages.services.desktopDev.professional.description",
        features: Array.from({ length: 6 }, (_, i) => `packages.services.desktopDev.professional.features.f${i + 1}`),
        popular: true,
      },
      {
        nameKey: "packages.services.desktopDev.enterprise.name",
        priceKey: "packages.services.desktopDev.enterprise.price",
        label: "PREMIUM",
        labelColor: "bg-foreground text-background",
        descKey: "packages.services.desktopDev.enterprise.description",
        features: Array.from({ length: 7 }, (_, i) => `packages.services.desktopDev.enterprise.features.f${i + 1}`),
        popular: false,
      },
    ],
  },
  automation: {
    tiers: [
      {
        nameKey: "packages.services.automation.starter.name",
        priceKey: "packages.services.automation.starter.price",
        label: "STARTER",
        labelColor: "bg-foreground/10 text-foreground",
        descKey: "packages.services.automation.starter.description",
        features: Array.from({ length: 5 }, (_, i) => `packages.services.automation.starter.features.f${i + 1}`),
        popular: false,
      },
      {
        nameKey: "packages.services.automation.professional.name",
        priceKey: "packages.services.automation.professional.price",
        label: "RECOMMENDED",
        labelColor: "bg-accent text-accent-foreground",
        descKey: "packages.services.automation.professional.description",
        features: Array.from({ length: 6 }, (_, i) => `packages.services.automation.professional.features.f${i + 1}`),
        popular: true,
      },
      {
        nameKey: "packages.services.automation.enterprise.name",
        priceKey: "packages.services.automation.enterprise.price",
        label: "PREMIUM",
        labelColor: "bg-foreground text-background",
        descKey: "packages.services.automation.enterprise.description",
        features: Array.from({ length: 7 }, (_, i) => `packages.services.automation.enterprise.features.f${i + 1}`),
        popular: false,
      },
    ],
  },
  uiuxDesign: {
    tiers: [
      {
        nameKey: "packages.services.uiuxDesign.starter.name",
        priceKey: "packages.services.uiuxDesign.starter.price",
        label: "STARTER",
        labelColor: "bg-foreground/10 text-foreground",
        descKey: "packages.services.uiuxDesign.starter.description",
        features: Array.from({ length: 5 }, (_, i) => `packages.services.uiuxDesign.starter.features.f${i + 1}`),
        popular: false,
      },
      {
        nameKey: "packages.services.uiuxDesign.professional.name",
        priceKey: "packages.services.uiuxDesign.professional.price",
        label: "RECOMMENDED",
        labelColor: "bg-accent text-accent-foreground",
        descKey: "packages.services.uiuxDesign.professional.description",
        features: Array.from({ length: 6 }, (_, i) => `packages.services.uiuxDesign.professional.features.f${i + 1}`),
        popular: true,
      },
      {
        nameKey: "packages.services.uiuxDesign.enterprise.name",
        priceKey: "packages.services.uiuxDesign.enterprise.price",
        label: "PREMIUM",
        labelColor: "bg-foreground text-background",
        descKey: "packages.services.uiuxDesign.enterprise.description",
        features: Array.from({ length: 7 }, (_, i) => `packages.services.uiuxDesign.enterprise.features.f${i + 1}`),
        popular: false,
      },
    ],
  },
};

export const Packages = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState<ServiceKey>("webDev");

  const tabLabels: Record<ServiceKey, string> = {
    webDev: t("packages.tabs.webDev"),
    mobileDev: t("packages.tabs.mobileDev"),
    desktopDev: t("packages.tabs.desktopDev"),
    automation: t("packages.tabs.automation"),
    uiuxDesign: t("packages.tabs.uiuxDesign"),
  };

  const activeTiers = packagesData[activeService].tiers;

  return (
    <section id="packages" className="py-16 md:py-28 bg-secondary">
      <div ref={ref} className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-10 md:mb-14 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="section-subheader mb-4">
            ● {t("packages.subtitle")}
          </p>
          <h2 className="section-main-header text-[28px] md:text-[45px] mb-4">
            {t("packages.titleStart")} <span className="text-accent">{t("packages.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("packages.description")}
          </p>
        </div>

        {/* Service Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14 ${isVisible ? "animate-fade-up delay-100" : "opacity-0"}`}>
          {serviceKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveService(key)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-display tracking-wider transition-all duration-300 ${
                activeService === key
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                  : "bg-background text-muted-foreground hover:text-foreground hover:bg-background/80"
              }`}
            >
              {tabLabels[key]}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          {activeTiers.map((pkg, index) => (
            <div
              key={`${activeService}-${index}`}
              className={`group relative bg-background rounded-2xl p-6 md:p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                pkg.popular ? "ring-2 ring-accent shadow-xl shadow-accent/10" : ""
              }`}
            >
              {/* Label */}
              <div className="mb-6">
                <span className={`inline-block text-[10px] md:text-xs font-display tracking-[0.2em] px-4 py-1.5 rounded-full ${pkg.labelColor}`}>
                  {pkg.label}
                </span>
              </div>

              {/* Package Name */}
              <h3 className="text-xl md:text-2xl font-display uppercase mb-2 text-foreground">
                {t(pkg.nameKey)}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-display text-accent">
                  {t(pkg.priceKey)}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 pb-6 border-b border-border">
                {t(pkg.descKey)}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground text-sm">{t(feature)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
