import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroSection = document.querySelector("#home");

    const toggleVisibilityFallback = () => {
      const isScrolled = window.scrollY > 300;
      setIsVisible(isScrolled);
      console.log(`Fallback ScrollY: ${window.scrollY}, IsVisible: ${isScrolled}`);
    };

    if (heroSection) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          const isHeroVisible = entry.isIntersecting;
          setIsVisible(!isHeroVisible);
          console.log(`Hero Visible: ${isHeroVisible}, IsVisible: ${!isHeroVisible}`);
        },
        { threshold: 0, rootMargin: "0px 0px -50px 0px" } 
      );


      setTimeout(() => {
        observer.observe(heroSection);
      }, 1000); 

      return () => observer.disconnect();
    } else {
      console.warn("Hero section (#home) not found, using fallback scroll detection");
      window.addEventListener("scroll", toggleVisibilityFallback);
      return () => window.removeEventListener("scroll", toggleVisibilityFallback);
    }
  }, []);

  useEffect(() => {
    // Inisialisasi tooltip Bootstrap
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="btn btn-primary d-flex align-items-center gap-2 shadow"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "20px",
          width: "50px",
          height: "50px",
          zIndex: 10001,
          border: "2px solid white",
          padding: "0.5rem 0.75rem",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          color: "white",
        }}
      >
        <i className="bx bx-chevron-up fs-4"></i>
      </button>
    )
  );
};

export default ScrollToTopButton;