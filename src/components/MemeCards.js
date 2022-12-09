import { useDispatch } from 'react-redux'
import { setMemeId, setMemeName, setMemeUrl } from '../redux/meme'

export const MemeCards = ({ id, title, image }) => {
    const dispatch = useDispatch()

    function writeDatas() {
        dispatch(setMemeId(id))
    }
    return (
        <div
            key={id}
            className="w-1/3 h-72 mx-4 my-12 rounded-lg cursor-pointer"
            onClick={() => {
                writeDatas()
            }}
        >
            <p className="text-center my-4">{title}</p>
            <img
                src={image}
                alt={title}
                className="w-full object-cover h-5/6 rounded-lg"
            />
        </div>
    )
}
