import park from '../../../Images/park.jpg'
import Card from '../../UI/Card';
import ParkBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import ParkAudio from './ParkAudio';
import AudioContext from '../../../store/audio-context';
import { useContext } from 'react';

function Park() {
    const audioCtx  = useContext(AudioContext);
    return (
        <>
        <ParkBg src={park}>
        <Label text="Park" />
        </ParkBg>
        <Card>
            {audioCtx.showPlayer && <Player /> } 
            <ParkAudio/>
        </Card>
        </>
    )
}

export default Park;