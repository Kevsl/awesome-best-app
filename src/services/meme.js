import axios from 'axios'

export async function getMemes() {
    return axios.get('https://api.imgflip.com/get_memes').then((res) => {
        console.log(res.data.data.memes)
        return res.data.data.memes
    })
}
