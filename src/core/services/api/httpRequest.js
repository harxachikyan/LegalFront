import axios from "axios";

const HttpRequest = () => {
    let config = {
        headers: {'Content-Type': 'application/json'},
    };
    let token = localStorage.getItem('token');
    if (token) config.headers["Authorization"] = `Bearer ${token}`

    const post = (url, model = {}) => {
        return axios({
            method: "post",
            url: `${process.env.REACT_APP_API_ENDPOINT}/${url}`,
            data: model,
            headers: config.headers
        })
    }

    const get = (url) => {
        return axios({
            method: "get",
            url: `${process.env.REACT_APP_API_ENDPOINT}/${url}`,
            headers: config.headers
        })
    }

    return {
        post,
        get
    }
}


export default HttpRequest