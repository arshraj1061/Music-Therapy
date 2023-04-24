import instrumental from '../../../Images/instrumental.jpg'
import Card from '../../UI/Card';
import InstrumentalBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import CityAudio from './InstrumentalAudio';

function Instrumental() {
    return (
        <>
        <InstrumentalBg src={instrumental}>
        <Label text="Instrumental" />
        </InstrumentalBg>
        <Card>
            <CityAudio/>
            <Player/>
        </Card>
        </>
    )
}

export default Instrumental;