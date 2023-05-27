import React from 'react'
import blogImage from '../../../Assets/blog1.jpg'
import blogList from './blogList'

const BlogCard = (props) => {
  const showBlog = () => {
    props.setvisible(true);
    props.setCurrentBlog({
      heading: props.heading,
      content: props.content,
      date: props.date
    })
  }
  return (
    <div className='blogCardWrapper'>
        <div className='blogImage' style={{height:"300px", width:"100%" }}></div>
        {/* <img src={blogImage} /> */}
        <h4>{props.heading}</h4>
        <p>{props.content}</p>
        <button className='readMore' onClick={showBlog}>Read More</button>
    </div>
  )
}

export default BlogCard