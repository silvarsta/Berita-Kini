const Populer = () => {
  return (
    <div className="container populer" style={{ paddingBottom: "30px" }}>
      <div className="card mb-3" style={{ maxWidth: "400px", border: "none", transition: "0.3s ease-in-out", boxShadow: "0 0 0 rgba(0,0,0,0)" }}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)"; }} >
        <div className="row g-0 align-items-center">
          <div className="col-1 d-flex justify-content-center align-items-center" style={{ paddingBottom: "80px" }}>
            <span style={{ backgroundColor: "#000", color: "#fff", borderRadius: "50%", width: "30px", height: "30px", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>1</span>
          </div>
          <div className="col-4">
            <img src="Image/headline/headline1.png" className="img-fluid rounded" alt="Berita Populer" />
          </div>
          <div className="col-7">
            <div className="card-body p-0">
              <h6 className="card-title" style={{ fontSize: "14px", color: "#000", paddingLeft: "15px" }}>
                <a href="" style={{ textDecoration: "none", color: "#000", transition: "0.3s ease-in-out" }} 
                  onMouseEnter={(e) => { e.target.style.color = "#007bff"; }} 
                  onMouseLeave={(e) => { e.target.style.color = "#000"; }}>
                  Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?
                </a>
              </h6>
              <p className="card-text">
                <small>
                  <span style={{ color: "#007bff", fontWeight: "bold", paddingLeft: "15px" }}>Politik</span> • 22 Jan 2024
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Populer;
