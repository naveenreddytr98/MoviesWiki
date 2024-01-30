import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost:8585',
    headers: {'Access-Control-Allow-Origin': '*'}
    //expose api called ngrok and not be blocked
});