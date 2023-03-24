import CardPoems from '../layout/CardPoems'
import doki_home from '../../assets/doki-home.png'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <Link to='/games'>
        <CardPoems src={doki_home} text='Games'/>
        </Link>
        </>
    )

}

export default Home