import { useSelector } from 'react-redux'
import { getMemeId, getMemeName, getMemeUrl } from '../redux/meme'
import { MemeCards } from '../components/MemeCards'
import React, { useState } from 'react'
import { getCreatedMeme } from '../services/meme'

const CreateMeme = () => {
    const id = useSelector(getMemeId)
    const [url, setUrl] = useState(useSelector(getMemeUrl))
    const name = useSelector(getMemeName)

    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')

    function handleMemeCreation() {
        getCreatedMeme(id, text1, text2).then((res) => {
            console.log(res)
        })
    }

    return (
        <div>
            <div>
                <h1 className="text-dark-blue text-5xl text-center py-4">
                    Meme Generator
                </h1>
            </div>

            <div className="w-10/12 border border-dark-blue rounded-xl mx-auto bg-gray-light my-4 flex items-center  justify-around">
                <div className="flex flex-col justify-center items-center w-2/3">
                    <h2 className="bg-dark-blue rounded-lg w-1/3 mx-auto my-2 text-white">
                        Create your own meme with : {name}
                    </h2>
                    <MemeCards id={id} name={name} image={url} />
                </div>
                <div className="w-1/3">
                    <div>
                        <label className="w-1/3">Text 1</label>
                        <input
                            type="text"
                            className="rounded-lg my-2 mx-2 w-1/3"
                            onChange={(e) => {
                                setText1(e.target.value)
                            }}
                        />
                    </div>

                    <div>
                        <label className="w-1/3">Text 2</label>
                        <input
                            type="text"
                            className="rounded-lg my-2 mx-2 w-1/3"
                            onChange={(e) => {
                                setText2(e.target.value)
                            }}
                        />
                        <br />
                        <button
                            onClick={() => {
                                handleMemeCreation()
                            }}
                            className="w-1/3 text-dark-blue border border-dark-blue rounded-lg ml-4"
                        >
                            Get my meme
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateMeme
