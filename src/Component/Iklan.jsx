const Iklan = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div
            className="card"
            style={{
              height: "auto",
              borderRadius: "24px",
              backgroundColor: "#00CAA3",
              border: "none",
              padding: "20px",
            }}
          >
            <div className="d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center">
              {/* Teks */}
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div
                  className="isi"
                  style={{ paddingLeft: "80px", gap: "8px" }} >
                  <h1 className="card-title" style={{ color: "#fff" }}>
                    Petualangan Edukatif bersama Malang Mbois City Tour!
                  </h1>
                  <p className="card-text" style={{ color: "#fff" }}>
                    Petualangan Edukatif bersama Malang Mbois City Tour!
                  </p>
                </div>
              </div>

              {/* Gambar */}
              <div
                className="col-lg-8 col-md-12 col-sm-12 d-flex justify-content-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "20px"
                }}
              >
                <img
                  src="Image/iklan/Right.png"
                  alt="Museum Brawijaya"
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iklan;
