import home from '../../../Images/home.jpg'
import Card from '../../UI/Card';
import HomeBg from '../../BgImage/BgImage';
import Label from '../../Label/Label';
import Player from '../../Player/Player';
import CityAudio from './HomeAudio';

function Home() {
    return (
        <>
        <HomeBg src={home}>
        <Label text="Home" />
        </HomeBg>
        <Card>
            <CityAudio/>
            <Player/>
        </Card>
        </>
    )
}

export default Home;