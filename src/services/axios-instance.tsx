import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api-gerenciamento-financeiro.onrender.com/',
});

export default axiosInstance