import React from 'react'
import Hero from './Hero'
import Blog from './Blog'
import TopPicks from './TopPicks'
import NewArrival from './NewArrival'
import Insta from './Insta';

const Home = () => {
  return (
    <div>
        <Hero/>
        <TopPicks/>
        <NewArrival/>
        <Blog/>
        <Insta/>

    </div>
  )
}

export default Home