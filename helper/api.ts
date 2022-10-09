import axios from "axios";

export const getContent = (url, session) => {
    return axios.get(url, {
        headers: {
            'Authorization': `Bearer ${session?.accessToken}`
        }
    })
}