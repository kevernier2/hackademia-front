import Axios from 'axios'

const API = Axios.create({
    baseURL: 'someApiUrl',
    withCredentials: true
})

const APIFetcher = {
    /*
    Example :
    getSomeUrl: async function (someParam) {
        const results = await get('someUrl', {param1: someParam})
        return results
    },
    Usage :
    APIFetcher.getSomeUrl(someParam)
            .then(response => {

            })
            .catch(error => {
                
            })
    */
}

async function get(url, params) {
    try {
        const results = await API.get(url, {params: params})
        return results.data
    } catch (error) {
        if (error.response.data) {
            throw Error(error.response.data)
        } else {
            return error
        }
    }
}

async function post(url, data) {
    try {
        await API.post(url, data)
    } catch (error) {
        if (error.response.data) {
            throw Error(error.response.data)
        } else {
            return error
        }
    }
}

async function del(url) {
    try {
        await API.delete(url)
    } catch (error) {
        if (error.response.data) {
            throw Error(error.response.data)
        } else {
            return error
        }
    }
}

export default APIFetcher
