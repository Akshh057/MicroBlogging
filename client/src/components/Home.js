import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Blogs from './Blogs';
import './blogs.css'
const Home = () => {
    const [data, setData] = useState([])
    // const [search, setSearch] = useState('')
    useEffect(() => {
        const callApi = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/getAllBlogs')
                console.log(res.data)
                setData(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        callApi()
    }, [])
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
        try {
            const res = await axios.delete(`http://localhost:5000/api/delete/${id}`);
            setData(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    // const searchDb = (e) => {
    //     setSearch(e.target.value)
    // }
    return (
        <div className="main__div">
            {/* <input type="search" value={search} onChange={searchDb} />
            <button onClick={async () => {
                const res = await axios.get(`http://localhost:5000/api/search?s=${search}`)
                console.log(res.data)
            }}> search</button> */}
            {
                data && data.map(({ Title, Body, _id }, idx) => {
                    const random_color = colors[Math.floor(
                        Math.random() * colors.length)];
                    return <div className="blog__div" key={`${idx}${Title}`}
                        style={{ backgroundColor: random_color.backgroundColor, color: random_color.color, border: `2px solid ${random_color.color}` }}
                    >
                        <Blogs Title={Title} Body={Body} sty={random_color} id={_id} deleteBlog={deleteBlog} />
                    </div>
                })
            }
        </div>
    )
}

export default Home
