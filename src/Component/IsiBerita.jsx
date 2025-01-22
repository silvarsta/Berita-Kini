const Berita = () => {
    return (
        <div className="container">
            <div className="card"  style={{ border: "none" }}>
                <div className="card-title">
                    <h1 style={{ color: "black" }}>
                        Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing Session di RSUD Dr. Soetomo
                    </h1>
                </div>
                <div className="card-body mt-2 p-0"> 
                    <p className="card-text" style={{ marginBottom: '30px' }}>
                        <small>
                            <span style={{ color: '#007bff', fontWeight: 'bold' }}>
                                {/* {item.category || "Category Not Available"} */}
                                Politik
                            </span>  •  22 Januari 2024
                                {/* {item.date || "Date Not Available"} */}
                        </small>
                    </p>
                    <figure className="figure" style={{ marginBottom: 0, width: "100%" }}>
                        <img 
                            src="Image/headline/default.jpg" 
                            className="figure-img img-fluid" 
                            alt="..." 
                            style={{borderRadius: "16px", width: "100%", height: "100%",}}
                        />
                        <figcaption className="figure-caption" style={{ color: "#959EA9"}}>Rumput GBK tidak kunjung bagus, Timnas Indonesia bisa pindah kandang. (CNN Indonesia/Adhi Wicaksono)</figcaption>
                    </figure>
                    <p className="card-text mt-3" style={{ color: "#526071" }}>
                    Jakarta, CNN Indonesia --Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas  Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila  lolos ke putaran ketiga Kualifikasi Piala Dunia 2026. Akhir-akhir ini rumput lapangan Stadion GBK yang jadi markas Indonesia  dalam babak kedua Kualifikasi Piala Dunia 2026 kerap bermasalah. Pada pertandingan kandang pertama melawan Vietnam, Maret lalu, rumput  GBK rusak parah. PPKGBK selalu pengelola pun mendapat kritik deras.
                    <br />
                    <br />
                    Acara-acara di luar  sepak bola itu kerap membuat kondisi rumput tidak sehat dan tidak  terlihat bagus saat pertandingan, khususnya laga Timnas Indonesia. Sampai saat melawan Irak, rumput GBK tidak terlihat sempurna meskipun  kondisinya lebih bagus dibanding lawan Vietnam. Opsi pindah kandang pun  muncul. 
                    <br />
                    <br />
                    Nanti kami akan  sampaikan [rencana pindah dari GBK], ujar Sumardji saat ditanya  kemungkinan menggunakan stadion lain di putaran ketiga kualifikasi. Sumardji tidak membantah kondisi rumput GBK yang masih kurang bagus  dalam duel Indonesia vs Irak. PSSI pun berharap PPKGBK bisa lebih  memperhatikan kondisi rumput untuk pertandingan Skuad Garuda. Kami sampai saat ini sudah telepon dengan pengelola GBK karena kondisi  rumput kemarin kurang bagus, kami memohon ke pihak GBK supaya  betul-betul disiapkan dan diperhatikan kondisi rumput, tutur Sumardji. Kalau dilihat-lihat sepertinya kondisi rumput GBK kayaknya stres itu,  sehingga dengan kondisi itu akan memengaruhi, tadi saya telepon supaya  diperhatikan kata Sumardji menambahkan.
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default Berita;
