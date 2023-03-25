import style from './CardPoems.module.css'

function CardPoems({children}:{children:React.ReactNode}) {
    return (
        <div className={style.poem_container}>
          {children}
        </div>
    )
}

export default CardPoems