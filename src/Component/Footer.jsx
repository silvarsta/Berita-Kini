
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src="/berita-kini-white.svg" alt="Logo" style={{ marginRight: "20px", width: "50px"}} className="logo"/>
                        <h3 style={{ margin: 0 }}>Berita Kini</h3>
                    </div>
                        <div className="row">
                            <div className="col-8">
                                <p className="mt-3">© 2025 Berita Kini. All Rights Reserved.</p>
                                <p className="follow">Ikuti Kami</p>
                            </div>
                        </div>
                        <ul className="nav" style={{ marginLeft: "-15px", marginTop: "-20px"}}>
                            <li className="nav-item">
                                <a href="" className="nav-link">
                                    <img src="/youtube.svg" alt="YouTube" style={{width: "80%"}}/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">
                                    <img src="/instagram.svg" alt="Instagram" style={{width: "80%"}}/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">
                                    <img src="/facebook.svg" alt="Facebook" style={{width: "80%"}}/>
                                </a>
                            </li>
                        </ul>
                        <br/>
                    </div>
                    <div className="col-2">
                        <h5 className="mb-4">Telusuri</h5>
                        <ul className="list-unstyled">
                            <li><a href="">Beranda</a></li>
                            <li><a href="">Kesehatan</a></li>
                            <li><a href="">Otomotif</a></li>
                            <li><a href="">Politik</a></li>
                            <li><a href="">Olahraga</a></li>
                            <li><a href="">Nasional</a></li>
                            <li><a href="">Internasional</a></li>
                        </ul>
                    </div>

                    <div className="col-2">
                        <h5 className="mb-4">Bantuan</h5>
                        <ul className="list-unstyled">
                            <li><a href="">Kontak Kami</a></li>
                            <li><a href="">Laporan Pembajakan</a></li>
                            <li><a href="">Kebijakan</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h5 className="text-md-right">Berlangganan Berita Terbaru</h5>
                        <hr/>
                        <form>
                            <div className="input-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Masukkan email"/>
                                <button type="button" className="btn" style={{
                                    position: "absolute",
                                    right: "10px", top: "50%",
                                    transform: "translateY(-50%)",
                                    width: "35px", height: "35px",
                                    borderRadius: "5px",
                                    backgroundColor: "#007bff",
                                    color: "white", border: "none",
                                    display: "flex",
                                    justifyContent: "center", alignItems: "center",}}>
                                    <img src="send.svg" alt="send" style={{ width: "20px" }}/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer