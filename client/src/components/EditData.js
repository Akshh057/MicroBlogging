import React, { useEffect, useState } from 'react'
import './editdata.css'
import API from '../axiosCalls'
const EditData = ({ location, history }) => {
    const [data, setData] = useState({
        Title: location?.data?.Title || "",
        Body: location?.data?.Body || "",
        _id: location?.data?.id || "",
    })
    useEffect(() => {
        if (!location?.data)
            history.push("/")
    })
    console.log(history)
    const handleChange = (e) => {
        if (data?.Body.length > 380 && e.target.name === "Body") {
            alert("Blog body length should not be less than 380 characters.")
        }
        else {
            setData((prevState) => {
                return {
                    ...prevState,
                    [e.target.name]: e.target.value
                }
            })
        }
        setData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })

    }
    const save = async (e) => {
        e.preventDefault();
        const res = await API.updateBlog(data._id, data)
        res.data && history.push('/')
    }

    return (
        <div className="editdata__main1">
            <div className="editdata__main">
                <div className="editdata__form">
                    <div className="editdata__heading">
                        <h3>Edit Blog</h3>
                    </div>
                    <div className="editdata__content">
                        <form onSubmit={save}>
                            <input
                                type="text"
                                name="Title"
                                placeholder="Title"
                                value={data?.Title}
                                onChange={handleChange}
                            />
                            <textarea value={data?.Body} name="Body" onChange={handleChange}>

                            </textarea>
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditData
