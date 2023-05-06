import home from '../../../Images/home.jpg'
import Card from '../../UI/Card';
import HomeBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import CityAudio from './HomeAudio';
import { useContext } from 'react';
import AudioContext from '../../../store/audio-context';

function Home() {
    const audioCtx  = useContext(AudioContext);
    return (
        <>
        <HomeBg src={home}>
        <Label text="Home" />
        </HomeBg>
        <Card>
            {audioCtx.showPlayer && <Player /> } 
            <CityAudio/>
        </Card>
        </>
    )
}

export default Home;