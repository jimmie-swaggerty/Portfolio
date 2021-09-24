import React from 'react'
import MainBanner from '../Components/MainBanner'
import NavBar from '../Components/NavBar'

const Main = () => {
        return (
                <div className="">
                        <MainBanner />
                        <NavBar />
                        <div className="container-flex">
                                <div className="d-flex p-2">
                                        <div className="col-lg-4 col-12 text-center">
                                                <h1 className="section-header">My Story</h1>
                                        </div>
                                        <div className="col-lg-8 col-12">
                                                <div className="text-body">
                                                        <p>
                                                                My passion for <div className="highlight">web development</div>  started in 6th grade when my tech teacher introduced me to basic HTML. That year, I competed against my upperclassmen in a timed code off and won!
                                                        </p>
                                                        <p>
                                                                As a child of the MySpace era, I began to learn CSS to assist my friends in customizing their profiles. I was completely obsessed with the different aspects of design that I could accomplish with simple strings of code!
                                                        </p>
                                                        <p>
                                                                As an adult, I put my focus into entrepreneurship, doing everything from business adminstration to graphic and web design. This eventually led me to Wix, where I got my initial introduction to JQuery and their custom language, Velo. I have been designing with Wix for over 10 years, but I was desperate to learn more.
                                                        </p>
                                                        <p>
                                                                In the Spring of 2020 I decided to enroll in Coding Dojo for a self-paced course in the MERN stack. I became enthralled in the different ways you can develop using languages like React, Node.js, MongoDB, and Express. I decided to continue my education my enrolling in the part time bootcamp in Winter of 2020 to get a more one on one experience learning development.
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                                <div className="d-flex p-2">
                                        <div className="col-lg-4 col-12 text-center">
                                                <h1 className="section-header">My Toolkit</h1>
                                        </div>
                                        <div className="col-lg-8 col-12 m-2">
                                                <div className="text-body">
                                                        <p>test</p>
                                                </div>
                                        </div>
                                </div>
                        </div>

                </div>
        )
}

export default Main