import client from './client'

const fetchDetails = (path) => {
    const data = client.get(`${path}`);
    return data;
}

export default { fetchDetails };