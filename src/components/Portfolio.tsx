import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import projectElearning from "@/images/project-elearning.jpg";
import projectDental from "@/images/project-dental.jpg";
import projectRestaurant from "@/images/project-restaurant.jpg";
import projectStorybook from "@/images/project-storybook.jpg";
import projectAdmin from "@/images/project-admin.jpg";

export const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      titleKey: "portfolio.items.elearning",
      categoryKey: "portfolio.categories.development",
      image: projectElearning,
      link: "https://formacad.ahmedlitim.com",
    },
    {
      id: 2,
      titleKey: "portfolio.items.dental",
      categoryKey: "portfolio.categories.development",
      image: projectDental,
      link: "https://dental.ahmedlitim.com",
    },
    {
      id: 3,
      titleKey: "portfolio.items.restaurant",
      categoryKey: "portfolio.categories.development",
      image: projectRestaurant,
      link: "https://sept.ahmedlitim.com",
    },
    {
      id: 4,
      titleKey: "portfolio.items.storybook",
      categoryKey: "portfolio.categories.development",
      image: projectStorybook,
      link: "https://verdant.ahmedlitim.com",
    },
    {
      id: 5,
      titleKey: "portfolio.items.admin",
      categoryKey: "portfolio.categories.development",
      image: projectAdmin,
      link: "https://admin.ahmedlitim.com",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + portfolioItems.length) % portfolioItems.length;
      items.push({ ...portfolioItems[index], position: i });
    }
    return items;
  };

  const handleProjectClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="portfolio" className="py-16 md:py-28 bg-background overflow-hidden">
      <div ref={ref} className="container-custom">
        <div className={`text-center mb-10 md:mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="section-subheader mb-4 md:mb-6">
            ● {t("portfolio.subtitle")}
          </p>
          <h2 className="section-main-header text-[28px] md:text-[45px]">
            {t("portfolio.title")}
          </h2>
        </div>
      </div>

      <div className={`relative ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
        {/* Mobile */}
        <div className="block md:hidden px-4">
          <div
            className="relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => handleProjectClick(portfolioItems[currentIndex].link)}
          >
            <img
              src={portfolioItems[currentIndex].image}
              alt={t(portfolioItems[currentIndex].titleKey)}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <span className="inline-block bg-accent text-accent-foreground text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-2">
                ● {t(portfolioItems[currentIndex].categoryKey)}
              </span>
              <h3 className="text-light text-lg font-display tracking-wide">
                {t(portfolioItems[currentIndex].titleKey)}
              </h3>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-accent-foreground" />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-accent flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 text-accent-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-accent flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 text-accent-foreground" />
            </button>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center gap-4 lg:gap-6 px-4">
          {getVisibleItems().map((item) => (
            <div
              key={`${item.id}-${item.position}`}
              className={`relative flex-shrink-0 transition-all duration-500 ${
                item.position === 0
                  ? "w-[50%] lg:w-[60%] max-w-[900px] z-10"
                  : "w-[20%] lg:w-[25%] max-w-[350px] opacity-60"
              }`}
              onMouseEnter={() => item.position === 0 && setIsHovered(true)}
              onMouseLeave={() => item.position === 0 && setIsHovered(false)}
            >
              <div
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => item.position === 0 && handleProjectClick(item.link)}
              >
                <img
                  src={item.image}
                  alt={t(item.titleKey)}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    item.position === 0 ? "h-[350px] lg:h-[500px]" : "h-[280px] lg:h-[400px]"
                  } ${item.position !== 0 ? "grayscale" : ""}`}
                />
                {item.position === 0 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                      className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-all duration-300 z-20 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6 text-accent-foreground" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-all duration-300 z-20 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-accent-foreground" />
                    </button>

                    <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6">
                      <span className="inline-block bg-accent text-accent-foreground text-[10px] lg:text-xs tracking-[0.15em] uppercase px-3 lg:px-4 py-1.5 lg:py-2 rounded-full mb-2 lg:mb-3">
                        ● {t(item.categoryKey)}
                      </span>
                      <h3 className="text-light text-lg lg:text-2xl font-display tracking-wide">
                        {t(item.titleKey)}
                      </h3>
                    </div>
                    <div className="absolute bottom-4 lg:bottom-6 right-4 lg:right-6">
                      <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isHovered ? 'bg-accent' : 'bg-foreground'
                      }`}>
                        <ArrowUpRight className={`w-5 h-5 lg:w-6 lg:h-6 ${isHovered ? 'text-accent-foreground' : 'text-background'}`} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
