import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
const api = axios.create({
    baseURL,
});

const sendRequest = async (url, method, data) => {
    try {
        const req = await api({
            url,
            method,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            data: { ...data },
        });
        return req;
    } catch (apiErr) {
        let message = 'network error, try again';
        if (apiErr.response) {
            if (apiErr.response.data) {
                if (apiErr.response.data.data) {
                    message = apiErr.response.data.data;
                }
            }
        }
        throw new Error(message);
    }
};

export default sendRequest;
