import AnalogMap from '../components/Challenges/AnalogMap'
import BlackScreenChallenge from '../components/Challenges/BlackScreenChallenge'

const Challenges = () => {
    return (
        <div className='my-20'>
            <div
                data-aos="fade-up"
                data-aos-delay="100">
                <AnalogMap />
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay="250">
                <BlackScreenChallenge />
            </div>
        </div>
    )
}

export default Challenges