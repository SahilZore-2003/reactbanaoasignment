import React from 'react'
import "./PostTabs.scss"
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";

const PostTabs = ({totalPosts,setTab}) => {
   

    return (
        <div className='post-tabs'>
            <div className="left-tabs">
                <p onClick={()=>setTab("all")} className='activetab'>All Posts({totalPosts})</p>
                <p onClick={()=>setTab("artical")}>Artical</p>
                <p onClick={()=>setTab("event")}>Event</p>
                <p onClick={()=>setTab("education")}>Education</p>
                <p onClick={()=>setTab("job")}>Jobs</p>
            </div>
            <div className="right-tabs">
                <button>Write Post <IoMdArrowDropdown />
                </button>
                <button><FaUserPlus />Join Group</button>
            </div>
        </div>
        
    )
}

export default PostTabs
