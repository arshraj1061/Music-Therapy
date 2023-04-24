import countryside from '../../../Images/countryside.jpg'
import Card from '../../UI/Card';
import CountrysideBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import CityAudio from './CountrysideAudio';

function Countryside() {
    return (
        <>
        <CountrysideBg src={countryside}>
        <Label text="Country Side" />
        </CountrysideBg>
        <Card>
            <CityAudio/>
            <Player/>
        </Card>
        </>
    )
}

export default Countryside;