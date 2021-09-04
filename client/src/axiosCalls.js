import axios from "axios";

const baseUrl = 'https://mircoblogger.herokuapp.com/api'
// All the axios request are performed over here, it is an object with key value pair, keys being the name of the request and values 
// being the function.
const API = {
    getAllBlogs: function () {
        return axios.get(`${baseUrl}/getAllBlogs`)
    },
    addBlog: function (newData) {
        return axios.post(`${baseUrl}/addBlog`, newData)
    },
    updateBlog: function (id, updatedData) {
        return axios.put(`${baseUrl}/updateBlog/${id}`, updatedData)
    },
    deleteBlog: function (id) {
        return axios.delete(`${baseUrl}/delete/${id}`)
    },
    searchBlog: function (searchValue) {
        return axios.get(`${baseUrl}/search?s=${searchValue}`)
    }
}
export default API