import React, { useEffect, useState } from "react";
import "./scrolltotop.scss";
import "animate.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", toggleVisibility);
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="ScrollToTop">
      {isVisible && (
        <div
          className="circle d-flex align-items-center justify-content-center"
          onClick={toTop}
        >
          <i
            className="bi bi-arrow-up
            animate__animated animate__pulse animate__infinite "
          ></i>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
