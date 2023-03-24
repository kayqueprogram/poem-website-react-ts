import { Link } from "react-router-dom"
import CardPoems from "../layout/CardPoems"
import natsuki from '../../assets/natsuki.png'
import natExitMusic from '../../assets/natExit.png'
import yuriFallen from '../../assets/yuriFallen.png'
import blueSkies from '../../assets/blueSkies.png'

function PoemGames() {
    return <>
        <Link to='/cardPerson'>
        <CardPoems src={natsuki} text='Doki Doki Literature Club!'/>
        </Link>
        <CardPoems src={natExitMusic} text='Doki Doki Exit Music'/>
        <CardPoems src={yuriFallen} text='Doki Doki Fallen Angel'/>
        <CardPoems src={blueSkies} text='Doki Doki Blue Skies'/>
    </>
}

export default PoemGames