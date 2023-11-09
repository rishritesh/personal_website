import React from 'react'
import Banner from './Banner'
import About from './About'
import Services from './Services'
import Expertise from './Expertise'
import Footer from './Footer'
import Header from './Header'


function Page() {
  return (
   <>


      
        <Header/>
        {/* <RHeader/> */}
        <Banner/>
        <About/>
        <Services/>
        <Expertise/>
        <Footer/>

   </>
  )
}

export default Page