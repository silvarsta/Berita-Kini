import { useState, useRef, useEffect } from "react";
import Navbar from "../Component/Navbar";
import Populer from "../Component/PopulerB";
import Rekomendasi from "../Component/Rekomendasi";
import Iklan from "../Component/Iklan";
import Footer from "../Component/Footer";
import Slider from "react-slick";
import Headline from "../Component/Headline";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Beranda = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const totalSlides = 3;

  const handleAfterChange = (index) => {
    setCurrentSlide(index);
  };

  const settingHeadline = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: handleAfterChange,
  };

  const settingIklan = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: handleAfterChange,
    customPaging: (i) => (
      <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: currentSlide === i ? '#007bff' : '#ccc', margin: '0 5px' }} />
    ),
    dotsClass: "slick-dots",
  };

  const [recommendations, setRecommendations] = useState([]);
  const [populer, setPopuler] = useState([]);

  useEffect(() => {
      const fetchRecommendations = async () => {
      try {
          const response = await fetch(
          "https://api-berita-indonesia.vercel.app/antara/terbaru"
          );
          const data = await response.json();
          setRecommendations(data.data.posts.slice(0, 6) || []);
      } catch (error) {
          console.error("Error fetching recommendations:", error);
      }
      };

      const fetchPopuler = async () => {
      try {
          const response = await fetch(
          "https://api-berita-indonesia.vercel.app/antara/terbaru"
          );
          const data = await response.json();
          setPopuler(data.data.posts.slice(0, 3) || []);
      } catch (error) {
          console.error("Error fetching populer:", error);
      }
      };

      fetchRecommendations();
      fetchPopuler();
  }, []);
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Headline Section */}
      <div className="headline-section">
        <Slider ref={sliderRef} {...settingHeadline}>
          {Array.from({ length: totalSlides }, (_, index) => (
            <div key={index}>
              <Headline />
            </div>
          ))}
        </Slider>
        <div
          style={{ color: "grey", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px", }} >
          <button onClick={() => sliderRef.current.slickPrev()}
            style={{ backgroundColor: "white", border: "none", color: "grey", padding: "5px 15px", fontSize: "16px", borderRadius: "6px", cursor: "pointer", marginRight: "10px", }} >
            &lt;
          </button>
          <span>
            {currentSlide + 1} dari {totalSlides}
          </span>
          <button onClick={() => sliderRef.current.slickNext()}
            style={{ backgroundColor: "white", border: "none", color: "grey", padding: "5px 15px", fontSize: "16px", borderRadius: "6px", cursor: "pointer", marginLeft: "10px", }} >
            &gt;
          </button>
        </div>
      </div>

      {/* Populer Section */}
      <div className="populer-section">
      <div className="container populer" style={{ paddingBottom: "30px" }}>
        <h2 style={{ margin: "20px 0", fontSize: "24px", fontWeight: "700", paddingBottom: "20px" }}> <img src="icon/rectangle.svg" alt="" style={{ paddingRight: "15px"}}/>
          Berita Terpopuler
        </h2>
        <div className="d-flex flex-wrap" style={{ gap: "20px", justifyContent: "space-between" }} >
          <Populer populer={populer} />
        </div>
      </div>
      </div>

      {/* Rekomendasi Section */}
      <div className="rekomendasi-section" style={{ paddingBottom: "50px" }}>
        <div className="container populer" style={{ paddingBottom: "30px" }}>
          <h2 style={{ margin: "20px 0", fontSize: "24px", fontWeight: "700" }}> <img src="icon/rectangle.svg" alt="" style={{ paddingRight: "15px"}}/>
            Rekomendasi Untuk Anda
          </h2>
        </div>
        <Rekomendasi recommendations={recommendations} />
      </div>

      {/* Iklan Section */}
      <div className="iklan-section">
        <Slider ref={sliderRef} {...settingIklan}>
          {Array.from({ length: totalSlides }, (_, index) => (
            <div key={index}>
              <Iklan />
            </div>
          ))}
        </Slider>
        <style>{`
          .slick-dots {
            position: absolute;
            bottom: -45px;
            left: 50%;
            transform: translateX(-50%);
          }
        `}</style>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Beranda;
