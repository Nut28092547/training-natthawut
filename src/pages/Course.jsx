import React from 'react'
import Layout from '../components/Layout';


const About = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-800 mb-2 p-10">หลักสูตรการสอน</h1>
      <hr />
<section className="container flex flex-col items-center justify-center max-w-screen-xl mx-auto pb-10">
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4">
          <div class="max-w-sm rounded-md overflow-hidden shadow-md bg-white">
          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/457515419_466019079759570_4794481852196949195_n.png?stp=dst-png_s240x240&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGLFmt3m07WquQolrWA6QGKQKyRm-QU5ThArJGb5BTlOL6a1QyA8U5yVnpZJdoeu7p_gXblh65feHjIa0ONeGko&_nc_ohc=NIH56ftdnP0Q7kNvgGjMVS0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGv2NEX0UVwSOwr35Q7OMzyBJtd5vwVCqdWNxagICIrkQ&oe=6703741B"
              className="w-full h-80 object-cover" />
            <div className='p-2'>
              <h2 class="font-semibold text-xl">Basic React Native</h2>
              <h3 className='text-gray-600'>ระยะเวลา (วัน): 5</h3>
              <h2 class="font-bold text-xl">ราคา 7500 บาท</h2>
            </div>
          </div>
          <div class="max-w-sm rounded-md overflow-hidden shadow-md bg-white">
            <img src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.15752-9/457404464_3645147969073180_2817047069808753143_n.png?stp=dst-png_s240x240&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeH1_6gY6Frxw_fI8PydGNCwinzSTNhlVuqKfNJM2GVW6l4N4pTiX-judFetzkQI1odJkGyHgzcjuhK8Kjg2pr6T&_nc_ohc=6oqYrpzSsKQQ7kNvgH4YLqD&_nc_ht=scontent.fbkk14-1.fna&_nc_gid=AhgjfIIR2waEDBAVO4WXIOY&oh=03_Q7cD1QEnCCsDenuGfGt1tZagDhL9ht7c32zbaCjWcG8TOGg2kg&oe=67037B31"
              className="w-full h-80 object-cover" />
            <div className='p-2'>
              <h2 class="font-semibold text-xl">Power BI Dashboard</h2>
              <h3 className='text-gray-600'>ระยะเวลา (วัน): 4</h3>
              <h2 class="font-bold text-xl">ราคา 5500 บาท</h2>
            </div>
          </div>
          <div class="max-w-sm rounded-md overflow-hidden shadow-md bg-white">
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/458408963_1228593765151958_3806946804551374025_n.png?stp=dst-png_s240x240&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeF4fUaISGfeq5x7UgCtwUsk_q9vgnN8b4z-r2-Cc3xvjDZJwUUBSjHhmuh61wN4FW1dCOZRnHtgDVYVlTrfpwAi&_nc_ohc=EbXI6amyea4Q7kNvgEDvUwa&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGZbOgcLGaVox1hnh_4A6Dm5kWgwB8YU8G2orZcLZDdaA&oe=67036C26"
              className="w-full h-80 object-cover" />
            <div className='p-2'>
              <h2 class="font-semibold text-xl">UI Design with Figma</h2>
              <h3 className='text-gray-600'>ระยะเวลา (วัน): 3</h3>
              <h2 class="font-bold text-xl">ราคา 5000 บาท</h2>
            </div>
          </div>
          <div class="max-w-sm rounded-md overflow-hidden shadow-md bg-white">
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/457439713_1056774622906304_3370642406202038301_n.png?stp=dst-png_s240x240&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFFYxg7M58nfM7irXlrsV7vUCha2ksxmatQKFraSzGZq5A_aunSq9dMVDnDTqB4vEVNRlqrEM--Vvn7wa8vbR42&_nc_ohc=bLdatLEdcMoQ7kNvgEzCEZN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHzOF5QCsc6HbF4Zm7G6lYnnUn6bD-nHgu9SKyEURl59A&oe=67038E1E"
              className="w-full h-80 object-cover"/>
            <div className='p-2'>
              <h2 class="font-semibold text-xl">Cross Platform with Flutter</h2>
              <h3 className='text-gray-600'>ระยะเวลา (วัน): 5</h3>
              <h2 class="font-bold text-xl">ราคา 6500 บาท</h2>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About