import eastasia from '../../../Images/eastasia.jpg'
import Card from '../../UI/Card';
import EastasiaBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import EastasiaAudio from './EastasiaAudio';

function Eastasia() {
    return (
        <>
        <EastasiaBg src={eastasia}>
        <Label text="East Asia" />
        </EastasiaBg>
        <Card>
            <EastasiaAudio/>
            <Player/>
        </Card>
        </>
    )
}

export default Eastasia;