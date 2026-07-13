import React from 'react'
import RecentPost from '../Components/RecentPost'

export default function Home() {
  return (
    <>
    <div className='container-fluid bg-dark hero-section text-center'>
        <h1 className='fs-1 fw-bold text-light'>Welcome to Web Paraside</h1>
        <p className='text-light fs-5 mt-3'>
            Dive into the world of Creativity insight, and inspiration that leads people to become unemployed is AI really gonna take job.
        </p>
    </div>

    <div className='conatiner-fluid'>
        <RecentPost/>
    </div>


    
    </>
  )
}
