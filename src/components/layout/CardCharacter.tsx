import style from './Cards.module.css'

function CardCharacter({src, text }: { src:string, text: string}) {
        return (
        <div className={style.content}>
        <section className={`${style.card_home1} ${style.card_person}`}>
            <img src={src}  />
            <p>{text}</p>
        </section>
        </div>
        )
}

export default CardCharacter