import React, { useState } from 'react'

function Hero () {

    return (
        <div className="pt-24">
            <section className="px-4 py-24 mx-auto max-w-7xl">
                <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                    <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                        All your <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">tech news</span> in one single podcast.
    </h1>
                    <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
                    Monolith is a podcast about all things tech with crazy antic and a huge personality there is no other podcast like this! (Hosted by Matthew Bhatti and Jacob Marshall)
    </p>
                    <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                        <a className="inline-flex items-center justify-center w-full mb-2 btn btn-primary btn-lg sm:w-auto sm:mb-0" href="#">
                            Listen now
        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="w-full mx-auto mt-20 text-center md:w-10/12">
                    <img src="./disc.png" alt="Hellonext feedback boards software screenshot" className="w-full rounded-lg" />
                    <div className="absolute overlay"></div>
                </div>
            </section>

        </div>
    )
}

export default Hero
