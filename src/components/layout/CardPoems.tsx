import style from './CardPoems.module.css'

function CardPoems({src,text}:{src?:string,text?:string}) {
    return (
        <a href="#"><div className={style.card_home1}>
            <img src={src} alt="" />
            <p>{text}</p>
        </div> </a>
    )
}

export default CardPoems