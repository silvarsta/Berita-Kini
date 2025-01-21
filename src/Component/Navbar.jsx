export const Navbar = () => {
    return (
            <header>
                <div className="header-area">
                    <div className="main-header ">
                        <div className="header-bottom header-sticky">
                            <div className="container">
                                <div className="navbar d-flex align-items-center justify-content-between">
                                    {/* Logo */}
                                    <div className="sticky-logo" style={{ display: "flex", alignItems: "center" }}>
                                        <a href="index.html" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
                                            <img src="/berita-kini.svg" alt="Logo" style={{ marginRight: "10px" }} />
                                            <h4 style={{ marginLeft: "10px", marginTop: "8px"}}>Berita Kini</h4>
                                        </a>
                                    </div>
                                    {/* Main menu */}
                                    <div className="main-menu d-flex">
                                        <nav>
                                            <ul id="navigation" className="d-flex list-unstyled m-0">
                                                <li><a href="#" style={{ color: "#006aff" }}>Beranda</a></li>
                                                <li><a href="#">Terbaru</a></li>
                                                <li><a href="#">Hiburan</a></li>
                                                <li><a href="#">Gaya Hidup</a></li>
                                                <li><a href="#">Olahraga</a></li>
                                                <li><a href="#">Nasional</a></li>
                                                <li><a href="#">Internasional</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    )
}
