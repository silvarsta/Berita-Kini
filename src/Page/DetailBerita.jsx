import { useState, useEffect } from "react";
import Berita from "../Component/IsiBerita";
import Navbar from "../Component/Navbar";
import Komentar from "../Component/Komentar";
import Populer from "../Component/Populer";
import Rekomendasi from "../Component/Rekomendasi";
import Footer from "../Component/Footer";

const DetailBerita = () => {
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
            setPopuler(data.data.posts.slice(0, 10) || []);
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

        <div className="container">
            <div className="row">
            <div className="col-8">
                {/* Berita */}
                <Berita />
                {/* Komentar */}
                <Komentar />
                {/* Rekomendasi Section */}
                <div
                className="rekomendasi-section"
                style={{ paddingBottom: "50px", paddingTop: "50px" }}
                >
                <div className="container populer">
                    {/* Header Section */}
                    <div className="d-flex justify-content-between align-items-center">
                    <h2
                        style={{
                        margin: "20px 0",
                        fontSize: "24px",
                        fontWeight: "700",
                        }}
                    >
                        <img
                        src="icon/rectangle.svg"
                        alt=""
                        style={{ paddingRight: "15px" }}
                        />
                        Berita Terkait
                    </h2>
                    {/* Primary-outline Button */}
                    <button
                        className="btn btn-outline-primary"
                        style={{
                        fontWeight: "600",
                        fontSize: "16px",
                        padding: "8px 16px",
                        }}
                    >
                        Lihat Semua
                    </button>
                    </div>
                </div>
                <div className="row">
                    <Rekomendasi recommendations={recommendations} />
                </div>
                </div>
            </div>
            <div className="col-4 mb-5">
                <h2
                style={{
                    margin: "20px 0",
                    fontSize: "24px",
                    fontWeight: "700",
                    paddingBottom: "20px",
                }}
                >
                <img
                    src="icon/rectangle.svg"
                    alt=""
                    style={{ paddingRight: "15px" }}
                />
                Berita Terpopuler
                </h2>
                <Populer populer={populer} />
            </div>
            </div>
        </div>

        {/* Footer */}
        <Footer />
        </div>
    );
};

export default DetailBerita;
