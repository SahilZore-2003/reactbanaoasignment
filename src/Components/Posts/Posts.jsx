import React from 'react'
import PostTabs from '../PostTabs/PostTabs'
import "./Posts.scss"
import SinglePost from '../SinglePost/SinglePost'
import PostData from '../../Data/PostData'
import { useState, useEffect } from 'react'

const Posts = () => {

  const [tab, setTab] = useState("all")
  const [data, setData] = useState(PostData)

  console.log(data)


  function checkTab(){
    if (tab === "all") {
      setData(PostData)
    } else {
      const newData = data.filter((i) => i.category === tab)
      newData.length === 0 ? setData(PostData):setData(newData)
      
    }
  }


  useEffect(() => {
    checkTab()
  }, [tab])


  const totalPosts = data.length;
  return (
    <section className='posts'>
      <PostTabs totalPosts={totalPosts} setTab={setTab} />
      {
        data.map((e) => {
          return (<SinglePost data={e} />)
        })
      }

    </section>
  )
}

export default Posts
