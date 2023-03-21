import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar({ src }: { src?: string }) {
    return (
        <header className={style.header}>
            <nav >

                <div className={style.navigation_header}>
                    <div className={style.img_logo_header}>
                        <img src={src} alt="imagem do header" />
                    </div>
                    <Link to='/' className={style.active}>Home</Link>
                    <a href="#">Categorias</a>
                    <Link to='/about' >Sobre nós</Link>
                    <a href="#">Contato</a>
                </div>

            </nav>
        </header>
    )
}

export default Navbar