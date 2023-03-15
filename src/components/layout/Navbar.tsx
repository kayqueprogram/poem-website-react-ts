import style from './Navbar.module.css'

function Navbar({ src }: { src?: string }) {
    return (
        <nav className={style.header}>

            <button className={style.btn_icon_header}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </button>
            <div className={style.logo_header}>
                <img src={src} alt="" />
            </div>


            <div className={style.navigation_header}>
                <button className={style.btn_icon_header}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                    </svg>

                </button>
                <a href="#">Home</a>
                <a href="#">Categorias</a>
                <a href="#">Sobre nós</a>
                <a href="#">Contato</a>
            </div>

        </nav>
    )
}

export default Navbar