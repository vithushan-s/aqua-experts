import './index.css'
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { TbCurrencyKroneCzech } from "react-icons/tb";
import { FaHeadset } from "react-icons/fa";
import Favorite from "./controls/cardFavorite";
import Feedback from "./controls/cardFeedback";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

function App() {

  function handleMenuClick(){
    let menu = document.querySelector('#menuItem');
    if(menu.classList.contains('hidden') === true){
        menu?.classList.remove('hidden');
        menu?.classList.add('flex');
        menu?.classList.add('flex-col')
        menu?.classList.add('gap-2')
    }
    else
    {
      menu?.classList.add('hidden');
      menu?.classList.remove('flex');
      menu?.classList.remove('flex-col');
    }
  }

  return (
    <>
      <main className="flex md:min-h-screen flex-col">
            
      {/* Cover Section */}
      {/* <section className="bg-blue-950 md:bg-gradient-to-b md:from-zinc-900 md:to-zinc-500 h-96 md:h-screen w-full md:relative md:flex md:flex-col md:justify-center md:items-center">
        <img src="cover.jpg" className="hidden md:block md:w-full md:h-full md:bg-cover md:mix-blend-overlay md:absolute" />
          
          <nav className="md:backdrop-blur-md md:bg-white/80 bg-white w-full md:w-2/3 md:rounded-full p-3 flex justify-between items-center drop-shadow-lg sticky top-0 md:absolute  md:top-4">
             <div className='flex justify-between items-center md:flex-none w-full'>
              
                <div className="flex items-center gap-1"> 
                  <img src="logo.png" className='h-14 w-14' alt="logo for aqua experts" />
                  <div className="flex flex-col">
                    <span className="text-sm">Norway</span>
                    <span className="font-bold">Aqua Experts</span>
                  </div>
                </div>
                
                <div className='md:hidden'>
                    <button onClick={handleMenuClick}><RxHamburgerMenu/></button> 
                </div>
             </div>

             <div>
                <ul className="hidden md:flex gap-5 font-medium text-sm" id='menuItem'>
                    <li><a href="#">Category</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div className='hidden md:block'>
                    <a className="bg-red-600 px-8 py-5 rounded-full text-xs font-semibold text-white" href="#">Login</a>
                </div>
             </div>

          </nav>

          <div className="flex flex-col justify-center items-center md:absolute w-full mt-10 md:mt-0 gap-5 ">
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="md:text-3xl font-bold text-gray-50 drop-shadow-lg">WELCOME TO NORWAY AQUA EXPERTS</h1>
              <h1 className="md:text-2xl font-thin text-gray-50 drop-shadow-lg">DEEP DIVE INTO OUR AQUARIUM</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-2 w-full p-3 md:w-1/2 justify-center">
              <input type="text" placeholder="enter your email" className="p-3 rounded-full md:w-1/2"/>
              <button className="bg-yellow-400 p-3 rounded-full font-semibold text-xs hover:bg-yellow-500">Customer Inquiry</button>
            </div>
          </div>
      </section> */}


      <section className="bg-blue-950 md:bg-gradient-to-b md:from-zinc-900 md:to-zinc-500 h-96 md:h-screen w-full md:relative md:flex md:flex-col md:justify-center md:items-center">
        <img src="cover.jpg" className="hidden md:block md:w-full md:h-full md:bg-cover md:mix-blend-overlay md:absolute" />
          
          <nav className="md:backdrop-blur-md md:bg-white/80 bg-white w-full md:w-2/3 md:rounded-full p-3 md:flex justify-between items-center drop-shadow-lg block top-0 md:absolute  md:top-4">
             <div className='flex justify-between items-center md:flex-none w-full md:w-1/4'>
              
                <div className="flex items-center gap-1"> 
                  <img src="logo.png" className='h-14 w-14' alt="logo for aqua experts" />
                  <div className="flex flex-col">
                    <span className="text-sm">Norway</span>
                    <span className="font-bold">Aqua Experts</span>
                  </div>
                </div>
                
                <div className='md:hidden'>
                    <button onClick={handleMenuClick}><RxHamburgerMenu/></button> 
                </div>
             </div>

             <div className='hidden md:flex md:items-center md:gap-2' id='menuItem'>
                <ul className="flex flex-col gap-3 md:flex-row md:gap-5 font-medium text-sm" >
                    <li><a href="#">Category</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <a className="bg-red-600 md:px-8 md:py-5 rounded-full text-xs font-semibold text-white" href="#">Login</a>
             </div>
          </nav>

          <div className="flex flex-col justify-center items-center md:absolute w-full mt-10 md:mt-0 gap-5 ">
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="md:text-3xl font-bold text-gray-50 drop-shadow-lg">WELCOME TO NORWAY AQUA EXPERTS</h1>
              <h1 className="md:text-2xl font-thin text-gray-50 drop-shadow-lg">DEEP DIVE INTO OUR AQUARIUM</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-2 w-full p-3 md:w-1/2 justify-center">
              <input type="text" placeholder="enter your email" className="p-3 rounded-full md:w-1/2"/>
              <button className="bg-yellow-400 p-3 rounded-full font-semibold text-xs hover:bg-yellow-500">Customer Inquiry</button>
            </div>
          </div>

      </section>
     
     {/* Why people choose us */}
     <section className="md:h-72 p-5 flex flex-col items-center gap-10 justify-center">
        <h1 className="text-xl font-bold text-blue-950 md:text-2xl">Why most of the people are choose us</h1>

        <div className="flex flex-col gap-10 md:flex-row md:gap-40">
          {/* single circle */}
          <div className="flex flex-col items-center gap-1">
              <div className="rounded-full w-20 h-20 bg-blue-300 flex justify-center items-center">
                  <FaChalkboardTeacher className="w-10 h-10"/>
              </div>
              <span className="text-sm font-bold">Guidane</span>
              <p className='text-xs text-gray-600'>Lorem ipsome</p>
          </div>
          {/* single circle */}
          <div className="flex flex-col items-center gap-1">
              <div className="rounded-full w-20 h-20 bg-blue-300 flex justify-center items-center">
                  <FaHandshake className="w-10 h-10"/>
              </div>
              <span className="text-sm font-bold">Quality Sevice</span>
              <p className='text-xs text-gray-600'>Lorem ipsome</p>
          </div>
          {/* single circle */}
          <div className="flex flex-col items-center gap-1">
              <div className="rounded-full w-20 h-20 bg-blue-300 flex justify-center items-center">
                  <TbCurrencyKroneCzech className="w-10 h-10"/>
              </div>
              <span className="text-sm font-bold">Affordable Price</span>
              <p className='text-xs text-gray-600'>Lorem ipsome</p>
          </div>
          {/* single circle */}
          <div className="flex flex-col items-center gap-1">
              <div className="rounded-full w-20 h-20 bg-blue-300 flex justify-center items-center">
                  <FaHeadset className="w-10 h-10"/>
              </div>
              <span className="text-sm font-bold">Get help any time</span>
              <p className='text-xs text-gray-600'>Lorem ipsome</p>
          </div>
        </div>
     </section>

     {/* Top customer favorite */}
     <section className="bg-blue-950 p-5 flex flex-col gap-5 items-center justify-center md:h-screen">

        <h1 className="text-xl font-bold md:font-normal md:text-2xl text-gray-50">Top 5 Customer Favorite </h1>

        <div className="flex flex-col md:flex-row gap-3 ">
          <Favorite image="1.png">
            <h1 className='text-lg font-semibold'>Hello</h1>
            <p className='text-sm'>sdkjfhsdkjfhsdjkfh</p>
            <button className='bg-black/50 p-2 rounded'>
                <FaRegHeart/>
            </button>
          </Favorite>
          <Favorite image="2.png">
            <h1 className='text-lg font-semibold'>Hello</h1>
            <p className='text-sm'>sdkjfhsdkjfhsdjkfh</p>
            <button className='bg-black/50 p-2 rounded'>
                <FaRegHeart/>
            </button>
          </Favorite>
          <Favorite image="3.png">
            <h1 className='text-lg font-semibold'>Hello</h1>
            <p className='text-sm'>sdkjfhsdkjfhsdjkfh</p>
            <button className='bg-black/50 p-2 rounded'>
                <FaRegHeart/>
            </button>
          </Favorite>
          <Favorite image="4.png">
            <h1 className='text-lg font-semibold'>Hello</h1>
            <p className='text-sm'>sdkjfhsdkjfhsdjkfh</p>
            <button className='bg-black/50 p-2 rounded'>
                <FaRegHeart/>
            </button>
          </Favorite>
          <Favorite image="5.png">
            <h1 className='text-lg font-semibold'>Hello</h1>
            <p className='text-sm'>sdkjfhsdkjfhsdjkfh</p>
            <button className='bg-black/50 p-2 rounded'>
                <FaRegHeart/>
            </button>
          </Favorite>
          
        </div>
        
     </section>


    {/* Feedback corner */}
    <section className="md:h-80 w-full p-10 flex flex-col items-center gap-3 justify-center">
      <h1 className="text-2xl text-blue-950">Feedback Corner</h1>
      <div className='flex w-3/4 justify-center items-center'>
          
          <img src="feedback.svg" className='hidden md:block w-72' />
          
          <div className=' flex flex-col md:flex-row gap-2 border-2 border-dashed p-3'>
             <Feedback profile="profile3.jpg" name="Elon Musk" feedback="sdafsgf\gsddsjfsdjgfjh"/>
             <Feedback profile="profile2.jpg" name="David" feedback="sdafsgf\gsddsjfsdjgfjh"/>
             <Feedback profile="profile1.jpg" name="John" feedback="sdafsgf\gsddsjfsdjgfjh"/>
          </div>
      </div>
    </section>
    

    {/* Top customer favorite */}
     <section className="bg-blue-950 p-5 flex flex-col gap-5 items-center justify-center h-screen">

        <h1 className="text-2xl text-gray-50">Categories</h1>

        {/* Row 1 */}
        <div className="flex gap-3 ">
          <Favorite image="1.png">
            <h1 className='text-lg font-semibold'>Hello</h1>
            <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                <span>View More</span>
                <FaChevronRight/>
            </button>
          </Favorite>

          <Favorite image="2.png">
            <h1 className='text-lg font-semibold'>Hello</h1>
            <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                <span>View More</span>
                <FaChevronRight/>
            </button>
          </Favorite>

          <Favorite image="3.png">
            <h1 className='text-lg font-semibold'>Hello</h1>
            <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                <span>View More</span>
                <FaChevronRight/>
            </button>
          </Favorite>

          <Favorite image="4.png">
            <h1 className='text-lg font-semibold'>Hello</h1>
            <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                <span>View More</span>
                <FaChevronRight/>
            </button>
          </Favorite>

          <Favorite image="5.png">
            <h1 className='text-lg font-semibold'>Hello</h1>
            <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                <span>View More</span>
                <FaChevronRight/>
            </button>
          </Favorite>
          
        </div>

        {/* Row 2 */}
        <div className="flex gap-3 ">
          <Favorite image="1.png">
            <h1 className='text-lg font-semibold'>Hello</h1>
            <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                <span>View More</span>
                <FaChevronRight/>
            </button>
          </Favorite>

          <Favorite image="2.png">
            <h1 className='text-lg font-semibold'>Hello</h1>
            <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                <span>View More</span>
                <FaChevronRight/>
            </button>
          </Favorite>

          <Favorite image="3.png">
            <h1 className='text-lg font-semibold'>Hello</h1>
            <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                <span>View More</span>
                <FaChevronRight/>
            </button>
          </Favorite>

          <Favorite image="4.png">
            <h1 className='text-lg font-semibold'>Hello</h1>
            <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                <span>View More</span>
                <FaChevronRight/>
            </button>
          </Favorite>

          <Favorite image="5.png">
            <h1 className='text-lg font-semibold'>Hello</h1>
            <button className='bg-black/50 hover:bg-white/60 hover:text-blue-950  p-2 rounded flex text-sm items-center gap-2 w-full'>
                <span>View More</span>
                <FaChevronRight/>
            </button>
          </Favorite>
          
        </div>
        
     </section>


     {/* Newsletter */}
     <section className="h-72 w-full p-5 flex flex-col items-center gap-3 justify-center">
      <h1 className="text-2xl text-blue-950">Subscribe to Newsletter</h1>
      <div className='flex flex-col md:flex-row w-full md:w-3/4 md:justify-center md:items-center border-2 border-dashed md:p-3'>
          
          <img src="newsletter.svg" className='hidden md:block w-72' alt="" />
          
          <div className='w-full md:w-3/4 flex flex-col md:ml-20 gap-2 p-2'>
             <h1 className='text-xl font-medium text-left'></h1>
             <div className='flex flex-col md:flex gap-2 md:gap-1'>
                <input type="text" placeholder='enter your email address' className='p-3 bg-gray-100 outline-none rounded-full md:w-96'/>
                <button className='bg-blue-950 p-3 rounded-full text-sm text-white'>Subscribe</button>
             </div>
             <p className='text-sm text-gray-300 text-center md:text-left'>It is a long established fact that a reader will be distracted by the readable content</p>
          </div>
      </div>
    </section>


    {/* Footer */}
    <section className='flex flex-col w-full bg-blue-900 md:h-96 p-10 md:flex-row md:justify-between'>
      {/* column1 */}
      <div className='flex flex-col justify-center items-center md:items-start'>
        <img src="logo.png"  className='w-24 h-24'/>
        <h1 className='text-md md:text-xl font-semibold text-white border-b border-gray-500'>Norway Aqua Expert</h1> 
        <p className='text-sm text-white mt-5 text-center md:text-left'>It is a long established fact that a reader <br /> 
        will be distracted by the readable content <br /> of 
        page when looking at its layout. The point of <br /> 
        Lorem Ipsum is that it has a more-or-less 
        distribution <br /> of letters, as opposed to using '
        Content here.
        </p>
      </div>

      {/* column2 */}
      <div className='flex flex-col md:flex-row gap-12 mt-10 md:mt-0 text-white'>
          <div className='flex flex-col items-center md:items-start'>
              <h1 className='text-lg font-bold'>Quick Links</h1>
              <div className='flex flex-col justify-center md:justify-start items-center md:items-start gap-2 text-sm'>
                  <a href="#">Category</a>
                  <a href="#">About Us</a>
                  <a href="#">Contact</a>
              </div>
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-lg font-bold'>Products</h1>
            <div className='flex flex-col justify-center md:justify-start items-center md:items-start gap-2 text-sm'>
                  <a href="#">Discus</a>
                  <a href="#">Arowana Us</a>
                  <a href="#">Angel</a>
                  <a href="#">Gourami</a>
                  <a href="#">Platty Us</a>
                  <a href="#">Tetra</a>
              </div>
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <h1 className='text-lg font-bold'>Others</h1>
            <div className='flex flex-col justify-center md:justify-start items-center md:items-start gap-2 text-sm'>
                  <a href="#">Terms & Policies</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Sitemap</a>
                  <a href="#">Blog</a>
            </div>  
          </div>
      </div>

      {/* column3 */}
      <div className='flex flex-col gap-5 mt-5 md:mt-0'>
          <div className='flex flex-col items-center md:items-start'>
              <h1 className='text-lg font-bold text-white'>Contact Information</h1>
              <div className='flex flex-col items-center md:items-start'>
                <div className='flex md:items-center gap-2'>
                  <FaWhatsapp className='hidden md:block w-10 h-10 text-white'/>
                  <span className='text-2xl font-bold md:text-xl text-white'>+47 9696 0777</span>
                </div>
                <div className='flex md:items-center gap-2'>
                  <MdEmail className='hidden md:block w-10 h-10 text-white'/>
                  <span className='text-2xl font-bold md:text-xl text-white'>norwayaquaexperts@gmail.com</span>
                </div>
              </div>
          </div>

          <div className='flex flex-col items-center md:items-start'>
              <h1 className='text-lg font-bold text-white'>Opening Hours</h1>
              <div className='border-2 border-dashed p-3'>
                  <div className='flex gap-1 text-white'>
                    <h1>Monday - Sunday :</h1>
                    <h1>09:00AM - 06:00PM</h1>
                  </div>
                  <div className='flex gap-1 text-white'>
                    <h1>Public Holidays :</h1>
                    <h1>09:00AM - 06:00PM</h1>
                  </div>
              </div>
          </div>
      </div>
    </section>

    {/* Footer End */}
    <section className='h-14 bg-blue-950 flex justify-center items-center text-white'>
      <p>@2024 All right reserved aqua-experts.com</p>
    </section>
    </main>
    </>
  )
}

export default App
