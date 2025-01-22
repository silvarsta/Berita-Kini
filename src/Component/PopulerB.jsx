import PropTypes from "prop-types";

const Populer = ({ populer = [] }) => {
  return (
    <div className="row">
      {populer.map((item, index) => (
        <div
          className="col-4"
          key={index} // Penempatan key di elemen root dari map
        >
          <div
            className="card mb-3"
            style={{
              border: "none",
              transition: "0.3s ease-in-out",
              boxShadow: "0 0 0 rgba(0,0,0,0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
            }}
          >
            <div className="row g-0 align-items-center">
              <div
                className="col-2 d-flex justify-content-center align-items-center"
                style={{ paddingBottom: "80px" }}
              >
                <span
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  {index + 1}
                </span>
              </div>
              <div className="col-5">
                <img
                  src={item.thumbnail || "Image/headline/default.jpg"}
                  className="img-fluid rounded"
                  alt={item.title || "Berita Populer"}
                />
              </div>
              <div className="col-5">
                <div className="card-body p-0">
                  <h6
                    className="card-title"
                    style={{
                      fontSize: "14px",
                      color: "#000",
                      paddingLeft: "15px",
                    }}
                  >
                    <a
                      href={item.link || "#"}
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        transition: "0.3s ease-in-out",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#007bff";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#000";
                      }}
                    >
                      {item.title || "Judul Berita Tidak Tersedia"}
                    </a>
                  </h6>
                  <p className="card-text">
                    <small>
                      <span
                        style={{
                          color: "#007bff",
                          fontWeight: "bold",
                          paddingLeft: "15px",
                        }}
                      >
                        {item.category || "None"}
                      </span>{" "}
                      •{" "}
                      {item.pubDate
                        ? new Date(item.pubDate).toLocaleDateString("id-ID")
                        : "Tanggal Tidak Tersedia"}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Menambahkan PropTypes untuk validasi
Populer.propTypes = {
  populer: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
      pubDate: PropTypes.string,
      thumbnail: PropTypes.string,
    })
  ).isRequired,
};

export default Populer;
