import underwater from '../../../Images/underwater.jpg'
import Card from '../../UI/Card';
import UnderwaterBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import UnderwaterAudio from './UnderwaterAudio';

function Underwater() {
    return (
        <>
        <UnderwaterBg src={underwater}>
        <Label text="Under Water" />
        </UnderwaterBg>
        <Card>
            <UnderwaterAudio/>
            <Player/>
        </Card>
        </>
    )
}

export default Underwater;