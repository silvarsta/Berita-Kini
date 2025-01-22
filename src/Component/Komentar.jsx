import { useState } from 'react';

const CommentSection = () => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([
        {
            id: 1,
            author: 'UJANG YUSMEIDI S.P., M.Agr.',
            text: 'Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh ? Karena saya mau download ada konfirmasi bahwa TOTP aktivasi salah Bagaimana ya solusinya ?',
            replies: [
                { id: 1, author: 'DINA RIKHA RIYANAWATI, S.Pd', text: 'saya mengunduh sertifikatnya kok juga belum bisa' },
            ],
        },
    ]);
    const [commentsPerPage, setCommentsPerPage] = useState(5);
    const totalComments = comments.length;

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = () => {
        setComments([
            ...comments,
            {
                id: comments.length + 1,
                author: 'New User',
                text: comment,
                replies: [],
            },
        ]);
        setComment('');
    };

    const handleCommentsPerPageChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setCommentsPerPage(value);
    };

    return (
        <div className="container mt-5">
            {/* Comment Input Section */}
            <div className="card mb-4" style={{ border: 'none' }}>
                <div className="card-body d-flex">
                    <img src="Image/headline/profile.jpg" alt="Profile" className="rounded mr-3"
                        style={{ width: '50px', height: '50px' }} />
                    <div className="w-100 mx-3">
                        <textarea className="form-control" rows="5" placeholder="Apa yang ingin anda tanyakan?" value={comment} onChange={handleCommentChange} />
                        <button className="btn btn-primary mt-2" onClick={handleCommentSubmit} disabled={!comment} >
                            Kirim
                        </button>
                    </div>
                </div>
            </div>

            {/* Comment List Section */}
            {comments.slice(0, commentsPerPage).map((comment) => (
                <div key={comment.id} className="card mb-4"
                    style={{ borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc', borderLeft: 'none', borderRight: 'none', }} >
                    <div className="card-body d-flex">
                        <img
                            src="Image/headline/profile.jpg" alt="Profile" className="rounded mr-3"
                            style={{ width: '50px', height: '50px' }} />
                        <div className="mx-3">
                            <p className="font-weight-bold">{comment.author}</p>
                            <p>{comment.text}</p>
                            <button className="btn btn-link mt-2">Balas</button>

                            {/* Replies */}
                            {comment.replies.map((reply) => (
                                <div key={reply.id} className="ml-4 mt-3">
                                    <div className="d-flex">
                                        <img
                                            src="Image/headline/profile.jpg" alt="Profile" className="rounded mr-3"
                                            style={{ width: '50px', height: '50px' }} />
                                        <div className="mx-3">
                                            <p className="font-weight-bold">{reply.author}</p>
                                            <p>{reply.text}</p>
                                        </div>
                                    </div>
                                    <button className="btn btn-link mt-2 ml-4" style={{ paddingLeft: '80px' }} >
                                        Balas
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center mt-4">
                {/* Dropdown for items per page */}
                <div className="d-flex align-items-center">
                    <span>Item per page</span>
                    <select className="form-select form-select-sm ml-2 mx-4" style={{ width: '80px' }} value={commentsPerPage} onChange={handleCommentsPerPageChange} >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                    <span className="ml-3">of {totalComments}</span>
                </div>
                {/* Navigation Buttons */}
                <div>
                    <button className="btn btn-link btn-sm text-secondary p-3" style={{ textDecoration: 'none' }}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="btn btn-link btn-sm text-primary p-3 ml-2" style={{ textDecoration: 'none' }} > 1 </button>
                    <button className="btn btn-link btn-sm text-secondary p-3 ml-2" style={{ textDecoration: 'none' }} > 2 </button>
                    <button className="btn btn-link btn-sm text-secondary p-3 ml-2" style={{ textDecoration: 'none' }}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommentSection;