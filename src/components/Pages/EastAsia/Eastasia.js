import eastasia from '../../../Images/eastasia.jpg'
import Card from '../../UI/Card';
import EastasiaBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import EastasiaAudio from './EastasiaAudio';
import { useContext } from 'react';
import AudioContext from '../../../store/audio-context';

function Eastasia() {
    const audioCtx  = useContext(AudioContext);
    return (
        <>
        <EastasiaBg src={eastasia}>
        <Label text="East Asia" />
        </EastasiaBg>
        <Card>
            {audioCtx.showPlayer && <Player /> } 
            <EastasiaAudio/>
        </Card>
        </>
    )
}

export default Eastasia;