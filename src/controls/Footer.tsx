import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

type Props = {}

function Footer({}: Props) {
  return (
    <div>
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
                <div className='bg-blue-950 p-3 rounded-lg shadow-lg flex flex-col items-center md:items-start'>
                    <h1 className='text-lg font-bold text-white '>Contact Information</h1>
                    <div className='flex flex-col items-center md:items-start'>
                      <div className='flex md:items-center gap-2'>
                        <FaWhatsapp className='hidden md:block w-10 h-10 text-green-400'/>
                        <span className='text-2xl font-bold md:text-xl text-white'>+47 9696 0777</span>
                      </div>
                      <div className='flex md:items-center gap-2'>
                        <MdEmail className='hidden md:block w-10 h-10 text-red-400'/>
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
    </div>
  )
}

export default Footer