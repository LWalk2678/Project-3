import './Home.css';
import { Layout, SmoothieCards } from '../../components'


const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home'>
        <SmoothieCards />
      </div>
    </Layout>
  )
}

export default Home
