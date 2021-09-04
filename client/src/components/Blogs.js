import React from 'react'
import { Link } from 'react-router-dom'
const Blogs = ({ Title, Body, sty, id, deleteBlog }) => {
    return (
        <>
            <div className="blog__title">
                <h2>
                    {Title}
                </h2>
            </div>
            <h4>
                {Body}
            </h4>
            <div className="blog__footer">
                <Link to={{
                    pathname: "/edit",
                    data: {
                        Title,
                        Body,
                        id,
                    }
                }}>
                    <button className="blog__btn" style={{ marginLeft: '0px', border: `1px solid ${sty.color}` }}>Edit</button>
                </Link>
                <button className="blog__btn" style={{ border: `1px solid ${sty.color}` }} onClick={() => deleteBlog(id)}>Delete</button>

            </div>
        </>
    )
}

export default Blogs
