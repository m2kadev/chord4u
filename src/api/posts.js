import axios from "axios"

const postsURL = axios.create({
    baseURL: 'https://chordforu.brucethedesign.com/wp-json/wp/v2'
})

export const getPosts = async () => {
    return await (await postsURL.get('/posts')).data
}

export const getPost = async (params) => {
    let id = params.queryKey[1]
    return (await postsURL.get(`/posts/${id}`)).data
}

export default postsURL