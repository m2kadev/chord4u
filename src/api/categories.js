import axios from "axios"

const baseURL = axios.create({
    baseURL: 'https://chordforu.brucethedesign.com/wp-json/wp/v2'
})

export const getCategories = async () => {
    return await (await baseURL.get('/categories')).data
}

export default baseURL