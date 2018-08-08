import axios from 'axios';

export default function fetchData(url) {
    return axios.get(url)
        .then(({data, status}) => {
            if (status === 200) {
                return data;
            }
        })
}