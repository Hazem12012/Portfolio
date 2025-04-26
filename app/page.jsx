import React from 'react'
import Hero from "./components/Hero"


function Home() {
  return (
    <main className='main_section relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-10 w-screen h-screen'>
      <div className='text_section max-w-7xl  w-full  text-center ' >
        <Hero/>
      </div>

    </main>
  )
}

export default Home 