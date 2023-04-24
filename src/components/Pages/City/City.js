import city from '../../../Images/city.jpg'
import Card from '../../UI/Card';
import CityBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import CityAudio from './CityAudio';

function City() {
    return (
        <>
        <CityBg src={city}>
        <Label text="City" />
        </CityBg>
        <Card>
            <CityAudio/>
            <Player/>
        </Card>
        </>
    )
}

export default City;