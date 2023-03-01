import axios from "axios"

const postsURL = axios.create({
    baseURL: 'http://chordforu.brucethedesign.com/wp-json/wp/v2'
})

export const getPosts = async () => {
    return await (await postsURL.get('/posts')).data
}

export default postsURL