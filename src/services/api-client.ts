import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'cd552b36bd274800810ce59ee5928e20'
    }
})