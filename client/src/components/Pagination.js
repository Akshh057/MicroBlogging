import React from 'react'

const Pagination = ({ setCurrentPage, currentPage, TotalBlogs, postPerPage }) => {
    //Read more and go to previous page buttons, on first page previous page button will not be shown and on last page
    // read more button  will not be shown.
    return (
        <div style={{ width: '90%', height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {
                (currentPage < Math.ceil(TotalBlogs / postPerPage)) ? (
                    <>
                        <button onClick={() => setCurrentPage(currentPage + 1)} className="page__btn">Read More</button>
                        {currentPage > 1 && <button onClick={() => setCurrentPage(currentPage - 1)} className="page__btn">Previous Page </button>}
                    </>
                ) : (
                    currentPage > 1 && <button onClick={() => setCurrentPage(currentPage - 1)} className="page__btn"> Previous Page </button>
                )
            }

        </div>
    )
}

export default Pagination
