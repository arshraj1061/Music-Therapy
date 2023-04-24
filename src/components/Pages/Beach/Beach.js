import beach from '../../../Images/beach.jpg';
import Card from '../../UI/Card';
import BeachBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import BeachAudio from './BeachAudio';

function Beach() {
    return (
        <>
        <BeachBg src={beach}>
        <Label text="Beach" />
        </BeachBg>
        <Card>
            <BeachAudio/>
            <Player/>
        </Card>
        </>
    )
}

export default Beach;