export const Navbar = () => {
    return (
        <header>
            <div className="header-area">
                <div className="main-header ">
                    <div className="header-bottom header-sticky">
                        <div className="container">
                        <div className="navbar d-flex align-items-center justify-content-between">
                            {/* Logo */}
                            <div className="sticky-logo">
                                <a href="index.html">
                                    <img src="/berita-kini.svg" alt="Logo"/>
                                </a>
                            </div>
                            {/* Main menu */}
                            <div className="main-menu d-flex">
                                <nav>
                                    <ul id="navigation" className="d-flex list-unstyled m-0">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="categori.html">Category</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="latest_news.html">Latest News</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li className="position-relative">
                                            <a href="#">Pages</a>
                                            <ul className="submenu position-absolute">
                                                <li><a href="elements.html">Element</a></li>
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="single-blog.html">Blog Details</a></li>
                                                <li><a href="details.html">Categori Details</a></li>
                                            </ul>
                                        </li>
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
