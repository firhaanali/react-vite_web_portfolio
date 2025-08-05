import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Initialize tooltip
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top btn btn-primary shadow"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Back to Top"
        >
          <i className="bx bx-chevron-up"></i>
        </button>
      )}

      {/* CSS for ScrollToTop */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(90deg, #4776E6 0%, #8E54E9 100%);
            border: none;
            border-radius: 50%;
            color: white;
            font-size: 24px;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.4s ease;
            z-index: 1000;
          }

          .scroll-to-top.visible {
            opacity: 1;
            transform: translateY(0);
          }

          .scroll-to-top:hover {
            background: linear-gradient(90deg, #8E54E9 0%, #4776E6 100%);
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(71, 118, 230, 0.5);
          }

          .scroll-to-top:active {
            transform: translateY(-2px);
          }

          /* Pulse animation */
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(71, 118, 230, 0.7);
            }
            70% {
              box-shadow: 0 0 0 15px rgba(71, 118, 230, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(71, 118, 230, 0);
            }
          }

          .scroll-to-top {
            animation: pulse 2s infinite;
          }

          @media (max-width: 576px) {
            .scroll-to-top {
              bottom: 20px;
              right: 20px;
              width: 40px;
              height: 40px;
              font-size: 20px;
            }
          }
        `
      }} />
    </>
  );
};

export default ScrollToTop;