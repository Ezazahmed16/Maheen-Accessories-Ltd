import React from 'react'
import './Blog.css'
import btn_img from '../../assets/1.jpg'
import ribbon_img from '../../assets/2.jpg'
import { Link } from 'react-router-dom'
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
                    <div className="hero bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img className='w-72' src={btn_img} />
                            <div>
                                <h1 className="text-3xl font-bold">Button Gallery</h1>

                                <Link to='/gallery'>
                                    <button className="btn btn-primary btn-outline btn-sm">Gallery</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="hero bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img className='w-72' src={ribbon_img} />
                            <div>
                                <h1 className="text-3xl font-bold">Ribbon Gallery</h1>

                                <Link to='/gallery'>
                                    <button className="btn btn-primary btn-outline btn-sm">Gallery</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">

                </div>
            </div>
        </div>
    )
}

export default Blog