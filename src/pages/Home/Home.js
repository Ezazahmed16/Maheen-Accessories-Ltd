import React from 'react'
import Banner from '../../components/Banner/Banner'
import Blog from '../../components/Blog/Blog'
import ContactUs from '../../components/ContactUs/ContactUs'
import AboutUs from '../../components/AboutUs/AboutUs'

const Home = () => {
  return (
    <div>
      <Banner />
      <Blog />
      <AboutUs />
      <ContactUs />
    </div>
  )
}

export default Home