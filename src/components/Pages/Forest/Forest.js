import forest from '../../../Images/forest.jpg'
import Card from '../../UI/Card';
import ForestBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import ForestAudio from './ForestAudio';

function Forest() {
    return (
        <>
        <ForestBg src={forest}>
        <Label text="Forest" />
        </ForestBg>
        <Card>
            <ForestAudio/>
            <Player/>
        </Card>
        </>
    )
}

export default Forest;