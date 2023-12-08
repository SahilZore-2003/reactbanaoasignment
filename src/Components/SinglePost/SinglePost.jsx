import React from 'react'
import "./SinglePost.scss"
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const SinglePost = ({data}) => {
    
    return (
        <div className='single-post'>
            <img src={data.postimg} alt="" />

            <div className="post-details">
                <p className="category">
                    ✍️ {data.category}
                </p>
                <div className='title-container'>
                    <h3 className="title">{data.title} </h3>
                    <HiOutlineDotsHorizontal />
                </div>
                <p className='description'>
                    {data.description}
                </p>

                <div className="user-info">
                    <div className="user">
                        <img src={data.userprofile} alt="" />
                        <p>{data.username}</p>
                    </div>
                    <div className="views">
                        <FaEye className='eye' />
                        1.4k views
                        <FaShareAlt className='share' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SinglePost
