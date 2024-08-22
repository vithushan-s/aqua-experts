import Category from './components/Category'
import Cover from './components/Cover'
import Favorite from './components/Favorite'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import People from './components/People'
import Rights from './components/Rights'
import './style/index.css'

function App() {

  return (
    
    <>
      <section className=' w-full flex flex-col'>
        <div className='relative w-full flex justify-center'>
          <Navbar/>
        </div>
          <Cover/>
          <People/>
          <Favorite/>
          <Feedback/>
          <Category/>
          <Newsletter/>
          <Footer/>
          <Rights/>
      </section>
    </>
  )
}

export default App
