import park from '../../../Images/park.jpg'
import Card from '../../UI/Card';
import ParkBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import ParkAudio from './ParkAudio';

function Park() {
    return (
        <>
        <ParkBg src={park}>
        <Label text="Park" />
        </ParkBg>
        <Card>
            <ParkAudio/>
            <Player/>
        </Card>
        </>
    )
}

export default Park;