import React, { useEffect, useState } from 'react'
import { MemeCards } from '../components/MemeCards'
import { getMemes } from '../services/meme'
const Home = () => {
    const [memeDatas, setMemeDatas] = useState([])

    useEffect(() => {
        getMemes().then((res) => {
            setMemeDatas(res)
        })
    }, [])

    return (
        <div>
            <div className="bg-gray-light">
                <h1 className="text-dark-blue text-5xl text-center py-4">
                    Meme Generator
                </h1>
            </div>
            <h2 className="bg-dark-blue rounded-lg w-1/3 mx-auto my-4 text-white text-center">
                Choose your meme
            </h2>
            <div className="w-10/12 border border-dark-blue rounded-xl mx-auto flex flex-wrap justify-around flex-row bg-gray-light">
                {memeDatas &&
                    memeDatas.length > 0 &&
                    memeDatas.map((meme) => {
                        return (
                            <MemeCards
                                id={meme.id}
                                title={meme.name}
                                image={meme.url}
                            />
                        )
                    })}
            </div>
        </div>
    )
}
export default Home
