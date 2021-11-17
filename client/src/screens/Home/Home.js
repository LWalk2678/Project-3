import './Home.css';
import Layout from '../../components/Layout/Layout'
import HomeQuote from '../../components/HomeQuote/HomeQuote'
import HomeBanner from '../../components/HomeBanner/HomeBanner.js'


const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home'>
        <HomeBanner />
        <HomeQuote
          quote='Time flies like an arrow – but fruit flies like a banana &#127820;'
        />
        <HomeQuote
          quote='You’ve got to go out on a limb sometimes, because that’s where the fruit is'
          img='https://www.timeshighereducation.com/sites/default/files/fruit-hanging-from-branches.jpg'
        />
      </div>
    </Layout>
  )
}

export default Home
