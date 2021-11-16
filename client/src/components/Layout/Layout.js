import './Layout.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const Layout = (props) => (
    <div className='layout'>
        <Nav user={props.user} />
        <main>
            {props.children}
        </main>
        <Footer />
    </div>
)

export default Layout
