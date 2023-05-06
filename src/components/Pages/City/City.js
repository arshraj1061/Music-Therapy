import city from '../../../Images/city.jpg'
import Card from '../../UI/Card';
import CityBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import CityAudio from './CityAudio';
import AudioContext from '../../../store/audio-context';
import { useContext } from 'react';

function City() {
    const audioCtx = useContext(AudioContext);
    return (
        <>
        <CityBg src={city}>
        <Label text="City" />
        </CityBg>
        <Card>
            {audioCtx.showPlayer && <Player /> }
            <CityAudio/>
        </Card>
        </>
    )
}

export default City;