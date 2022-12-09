import { useSelector } from 'react-redux'
import { getMemeId, getMemeName, getMemeUrl } from '../redux/meme'
import { MemeCards } from '../components/MemeCards'

const CreateMeme = () => {
    const id = useSelector(getMemeId)
    const url = useSelector(getMemeUrl)
    const name = useSelector(getMemeName)

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
                    <MemeCards
                        id={id}
                        name={name}
                        image={url}
                        className="mx-auto "
                    />
                </div>
                <div className="w-1/3">
                    <input
                        type="text"
                        className="rounded-lg"
                        onChange={(e) => {
                            console.log(e.target.value)
                        }}
                    />
                    <input
                        type="text"
                        className="rounded-lg"
                        onChange={(e) => {
                            console.log(e.target.value)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
export default CreateMeme
