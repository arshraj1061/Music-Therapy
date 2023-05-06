import underwater from '../../../Images/underwater.jpg'
import Card from '../../UI/Card';
import UnderwaterBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import UnderwaterAudio from './UnderwaterAudio';
import AudioContext from '../../../store/audio-context';
import { useContext } from 'react';

function Underwater() {
    const audioCtx  = useContext(AudioContext);
    return (
        <>
        <UnderwaterBg src={underwater}>
        <Label text="Under Water" />
        </UnderwaterBg>
        <Card>
            {audioCtx.showPlayer && <Player /> } 
            <UnderwaterAudio/>
        </Card>
        </>
    )
}

export default Underwater;