import PropTypes from 'prop-types';

const Rekomendasi = ({ recommendations = [] }) => {
    return (
        <div className="container">
            <div className="row">
                {recommendations.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-5 col-sm-12 d-flex justify-content-center align-items-center">
                        <div className="card"
                            style={{ maxWidth: '17rem', alignItems: 'center', border: 'none', borderRadius: '10px', overflow: 'hidden', transition: '0.3s ease-in-out', transform: 'scale(1)', }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                            }} >
                            <img
                                src={item.thumbnail || "Image/headline/default.jpg"}
                                className="card-img-top img-fluid rounded"
                                alt={item.title || "Recommendation"}
                                style={{ height: '180px', objectFit: 'cover' }} />
                            <div className="card-body" style={{ padding: '15px' }}>
                                <h6 className="card-text" style={{ fontWeight: 'bold', fontSize: '16px', lineHeight: '1.4' }}>
                                    <a href={item.link || '#'}
                                        style={{ textDecoration: 'none', color: '#000', transition: 'color 0.3s ease-in-out' }}
                                        onMouseEnter={(e) => { e.target.style.color = '#007bff'; }}
                                        onMouseLeave={(e) => { e.target.style.color = '#000'; }}>
                                        {item.title || "Title Not Available"}
                                    </a>
                                </h6>
                                <p className="card-text" style={{ marginTop: '10px' }}>
                                    <small>
                                        <span style={{ color: '#007bff', fontWeight: 'bold' }}>
                                            {item.category || "Terpopuler"}
                                        </span>
                                        • {item.pubDate ? new Date(item.pubDate).toLocaleDateString("id-ID") : "Tanggal Tidak Tersedia"}
                                        </small>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Menambahkan PropTypes untuk validasi
Rekomendasi.propTypes = {
    recommendations: PropTypes.array.isRequired,  // recommendations harus berupa array
    colSize: PropTypes.string, // colSize harus berupa string
};

export default Rekomendasi;
