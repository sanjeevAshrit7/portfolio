import React from 'react';
import image from '../bg.JPG';

function Home() {
  return (
    <main>
        <img src={image} alt={"NA"} className={"absolute object-cover w-full h-full"}/>
        <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 justify-center'>
            <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>Aloha... i am Sanjeev</h1>
        </section>
    </main>
  )
}

export default Home;
