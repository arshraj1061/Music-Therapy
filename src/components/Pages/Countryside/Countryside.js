import countryside from '../../../Images/countryside.jpg'
import Card from '../../UI/Card';
import CountrysideBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import CityAudio from './CountrysideAudio';
import { useContext } from 'react';
import AudioContext from '../../../store/audio-context';

function Countryside() {
      const audioCtx  = useContext(AudioContext);

    return (
        <>
        <CountrysideBg src={countryside}>
        <Label text="Country Side" />
        </CountrysideBg>
        <Card>
             {audioCtx.showPlayer && <Player /> } 
            <CityAudio/>
        </Card>
        </>
    )
}

export default Countryside;