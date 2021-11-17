import './Home.css';
import Layout from '../../components/Layout/Layout'
import HomeQuote from '../../components/HomeQuote/HomeQuote'
import HomeBanner from '../../components/HomeBanner/HomeBanner.js'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home'>
        <HomeBanner />
        <HomeQuote />
      </div>
    </Layout>
  )
}

export default Home
