import React, { useState } from 'react'
import './adddata.css'
import axios from 'axios'
const AddData = ({ history }) => {
    const [data, setData] = useState({
        Title: "",
        Body: "",
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
        try {
            e.preventDefault();
            const res = await axios.post("http://localhost:5000/api/addBlog", data)
            res.data && history.push('/')
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="adddata__main1">
            <div className="adddata__main">
                <div className="adddata__form">
                    <div className="adddata__heading">
                        <h3>Add Blog</h3>
                    </div>
                    <div className="adddata__content">
                        <form onSubmit={save}>
                            <input
                                type="text"
                                name="Title"
                                placeholder="Title"
                                value={data.Title}
                                onChange={handleChange}
                            />
                            <textarea value={data.Body} name="Body" onChange={handleChange}>

                            </textarea>
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddData
