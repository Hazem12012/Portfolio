import React from 'react'
import Hero from "./components/Hero";
import Spotlight from "./components/ui/Spotlight";


function Home() {
  return (
    <main className='main_section relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-10 w-screen h-screen'>
      <div className='text_section max-w-7xl  w-full  text-center ' >
        <Hero>
        </Hero>
        <Spotlight />

      </div>

    </main>
  )
}

export default Home 