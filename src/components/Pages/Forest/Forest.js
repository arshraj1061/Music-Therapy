import forest from '../../../Images/forest.jpg'
import Card from '../../UI/Card';
import ForestBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import ForestAudio from './ForestAudio';
import { useContext } from 'react';
import AudioContext from '../../../store/audio-context';

function Forest() {
    const audioCtx  = useContext(AudioContext);
    return (
        <>
        <ForestBg src={forest}>
        <Label text="Forest" />
        </ForestBg>
        <Card>
            {audioCtx.showPlayer && <Player /> } 
            <ForestAudio/>
        </Card>
        </>
    )
}

export default Forest;