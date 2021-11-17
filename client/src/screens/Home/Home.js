import './Home.css';
import Layout from '../../components/Layout/Layout'
import HomeQuote from '../../components/HomeQuote/HomeQuote'


const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home'>
        <HomeQuote />
      </div>
    </Layout>
  )
}

export default Home
