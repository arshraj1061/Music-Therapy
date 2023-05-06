import instrumental from '../../../Images/instrumental.jpg'
import Card from '../../UI/Card';
import InstrumentalBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import CityAudio from './InstrumentalAudio';
import AudioContext from '../../../store/audio-context';
import { useContext } from 'react';

function Instrumental() {
    const audioCtx  = useContext(AudioContext);
    return (
        <>
        <InstrumentalBg src={instrumental}>
        <Label text="Instrumental" />
        </InstrumentalBg>
        <Card>
            {audioCtx.showPlayer && <Player /> } 
            <CityAudio/>
        </Card>
        </>
    )
}

export default Instrumental;