const Headline = () => {
    return (
        <div className="container headline" style={{ paddingBottom: "30px" }}>
            <div className="card mb-3" style={{ width: "max", border: "none" }}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="card-body" style={{ maxWidth: "80%" }}>
                            <p className="card-title">Headline</p>
                            <h1 className="card-text" style={{ fontWeight: "700", fontSize: "36px" }}>Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualifikasi</h1>
                            <p className="card-text">
                                <small className="text-body-secondary">
                                    Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.
                                </small>
                            </p>
                            <br />
                            <p className="card-text" style={{ display: "flex", alignItems: "center" }}>
                                <small className="text-body-secondary" style={{ display: "flex", alignItems: "center" }}>
                                    <img src="icon/calendar.svg" alt="" style={{ paddingRight: "10px" }} /> 22 Januari 2024
                                </small>
                            </p>
                            <a href="/berita" style={{ display: "flex", alignItems: "center", textDecoration: "none"}}>
                                Baca Selengkapnya <img src="icon/arrow.svg" alt="" style={{ paddingLeft: "5px" }} />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="Image/headline/headline1.png" className="img-fluid" alt="..." style={{ borderRadius: "20px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headline