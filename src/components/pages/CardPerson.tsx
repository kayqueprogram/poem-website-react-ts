import { Link } from "react-router-dom"
import CardCharacter from "../layout/CardCharacter"
import justNatsuki from '../../assets/justNatsuki.png'

function CardPerson() {
    return (
        <>
            <Link to='/natsukiDoki'>
                <CardCharacter src={justNatsuki} text='Natsuki' />
            </Link>
            <CardCharacter src={justNatsuki} text='Natsuki' />
            <CardCharacter src={justNatsuki} text='Natsuki' />
            <CardCharacter src={justNatsuki} text='Natsuki' />
        </>
    )
}

export default CardPerson