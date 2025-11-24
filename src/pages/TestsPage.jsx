import QuizTestPage from '../components/Tests/QuizTestPage'
import TimeDashboard from '../components/Tests/TimeDashboard'

const TestsPage = () => {
    return (
        <div className='my-20'>
            <div
                data-aos="fade-up"
                data-aos-delay="100">
                <QuizTestPage />
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay="100">
                <TimeDashboard />
            </div>
        </div>
    )
}

export default TestsPage