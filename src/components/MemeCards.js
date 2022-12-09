export const MemeCards = ({ id, title, image }) => {
    return (
        <div key={id}>
            <p>{title}</p>
            <img src={image} alt={title} />
        </div>
    )
}
