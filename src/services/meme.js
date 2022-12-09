import axios from 'axios'

export async function getMemes() {
    return axios.get('https://api.imgflip.com/get_memes').then((res) => {
        return res.data.data.memes
    })
}
