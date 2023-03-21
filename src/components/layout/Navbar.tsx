import style from './Navbar.module.css'

function Navbar({ src }: { src?: string }) {
    return (
        <header className={style.header}>
            <nav >

                <div className={style.navigation_header}>
                    <div className={style.img_logo_header}>
                        <img src={src} alt="imagem do header" />
                    </div>
                    <a href="#" className={style.active}>Home</a>
                    <a href="#">Categorias</a>
                    <a href="#">Sobre nós</a>
                    <a href="#">Contato</a>
                </div>

            </nav>
        </header>
    )
}

export default Navbar