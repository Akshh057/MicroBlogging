import React, { useState, useEffect } from 'react'
import Blogs from './Blogs';
import './blogs.css'
import Pagination from './Pagination';
import API from '../axiosCalls';
import loader from './loader.gif'
const Home = ({ searchData }) => {
    const [data, setData] = useState([])
    const [postPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const callApi = async () => {
            setLoading(true)
            try {
                //calling API to fetch blogs
                const res = await API.getAllBlogs()
                setData(res.data)
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
        searchData.length === 0 ? callApi() : setData(searchData)
    }, [searchData])

    const colors = [
        {
            backgroundColor: '#FBE9E7', //orange
            color: '#FF7043'
        },
        {
            backgroundColor: '#FCE4EC', ///pink
            color: '#EC407A'
        },
        {
            backgroundColor: '#E0F7FA', //blue
            color: '#26C6DA'
        },
        {
            backgroundColor: '#E0F2F1', //teal
            color: '#26A69A'
        },
    ]
    const deleteBlog = async (id) => {
        //deleting the blog through id.
        try {
            const res = await API.deleteBlog(id)
            setData(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    //Pagination implemented
    const lastIndex = currentPage * postPerPage;
    const firstIndex = lastIndex - postPerPage;
    const blog = data.slice(firstIndex, lastIndex);
    return (

        <>
            {!loading ?
                (<div className="main__div">
                    {
                        //mapping over blogs fetched to display them.
                        blog && blog.map(({ Title, Body, _id }, idx) => {
                            //random color to the blog conatiner
                            const random_color = colors[Math.floor(
                                Math.random() * colors.length)];
                            return <div className="blog__div" key={`${idx}${Title}`}
                                style={{ backgroundColor: random_color.backgroundColor, color: random_color.color, border: `2px solid ${random_color.color}` }}
                            >
                                <Blogs Title={Title} Body={Body} sty={random_color} id={_id} deleteBlog={deleteBlog} />
                            </div>
                        })
                    }
                    <Pagination postPerPage={postPerPage} TotalBlogs={data.length} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </div>) : (
                    //loading gif when data is being fetched from backend.
                    loading && <div style={{ height: '60vh', width: '70vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={loader} alt="Processing your request" />
                    </div>
                )
            }
        </>
    )
}

export default Home
