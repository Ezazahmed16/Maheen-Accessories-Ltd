import React from 'react'
import './Blog.css'

const Blog = () => {


    return (
        <div className='blog-bg'>
            <div className="flex flex-col justify-center max-w-4xl m-auto">
                <div className="my-10">
                    <h1 className='uppercase text-white text-center text-4xl '>
                        Maheen Accessories LTD.
                    </h1>
                    <div className="red-line"></div>
                </div>

                <div className="">

                    <div className="hero min-h-screen bg-base-200">
                        {/* <div className="hero-content flex-col lg:flex-row">
                            <img src={} />
                            <div>
                                <h1 className="text-5xl font-bold">Box Office News!</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog