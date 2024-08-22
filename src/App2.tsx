import Category2 from './components/Category2'
import Cover from './components/Cover'
import FavoriteWithBorder from './components/FavoriteWithBorder'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import People from './components/People'
import Rights from './components/Rights'
import './style/index.css'

function App2() {

  return (
    <>
      <section className=' w-full flex flex-col'>
        <div className='relative w-full flex justify-center'>
          <Navbar/>
        </div>
          <Cover/>
          <People/>
          <FavoriteWithBorder/>
          <Feedback/>
          <Category2/>
          <Newsletter/>
          <Footer/>
          <Rights/>
      </section>
    </>
  )
}

export default App2
