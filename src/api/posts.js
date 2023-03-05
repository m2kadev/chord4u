import axios from "axios"

const postsURL = axios.create({
    baseURL: 'https://chordforu.brucethedesign.com/wp-json/wp/v2'
})

const customURL = axios.create({
    baseURL: 'https://chordforu.brucethedesign.com/wp-json/custom-api/v1'
})


//https://chordforu.brucethedesign.com/wp-json/custom-api/v1/song-detail/32

export const getPosts = async () => {
    return await (await postsURL.get('/posts')).data
}

export const getPost = async (params) => {
    let id = params.queryKey[1]
    return await (await postsURL.get(`/posts/${id}`)).data
}

export const getSinglePost = async (params) => {
    let id = params.queryKey[1]
    return await (await customURL.get(`/song-detail/${id}`)).data
}

export default postsURL