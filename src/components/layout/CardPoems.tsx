import style from './CardPoems.module.css'
import { Link } from 'react-router-dom'

function CardPoems({ src, text }: { src?: string, text?: string }) {
    return (
        <Link to='/'><div className={style.card_home1}>
            <img src={src} alt="" />
            <p>{text}</p>
        </div> </Link>
    )
}

export default CardPoems