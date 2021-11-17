import './Home.css';
import { Layout } from '../../components'
import HomeBanner from '../../components/HomeBanner/HomeBanner.js'


const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home'>
        <HomeBanner />
      </div>
    </Layout>
  )
}

export default Home
