import style from './Cards.module.css'


function CardPoems({ src, text }: { src?: string, text?: string }) {
    return (
        <div className={style.card_home1}>
            <img src={src} alt="" />
            <p>{text}</p>
        </div> 
    )
}

export default CardPoems