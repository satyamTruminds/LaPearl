import React, { useState } from 'react'
import SectionHeader from '../../Reusable/SectionHeader'
import './style.css'
import BlogCard from './BlogCard'
import blogImage from '../../../Assets/blog1.jpg'
import blogList from './blogList'

const Blog = () => {
    const [currentBlog, setCurrentBlog] = useState({});
    const [visible, setVisible] = useState(false);
    const backClick = () => {
        setVisible(false)
    }
  return (
    <div className='blogWrapper'>
        <div className='blogListWrapper'>
            {!visible && <>
                <SectionHeader header={'Blog'} info={"Find our best tips and tricks!"}/>
                <div className='blogView'>
                    {
                        blogList.map((e) => {
                            return(
                                <BlogCard setvisible={setVisible} setCurrentBlog={setCurrentBlog} heading={e.blogTitle} content={`${e.blogContent.slice(0, 200)}...`} date={e.blogDate} />
                            )
                        })
                    }
                </div>
            </>}
            {visible && <>
                <button className='backButton' onClick={backClick}>Go Back</button>
                <div className='blogViewExpanded'>
                    <h1>Why is getting regular facials by a professional important for your skin care?</h1>
                    <hr />
                    <p className='blogViewDate'>22 May 2023</p>
                    <img className='blogImg' src={blogImage} />
                    <div className='blogCon'>
                    <p>
                        Dear lovely ladies, 
                    </p>
                    <p>As a beauty therapist, I have had the privilege of witnessing the transformative effects of regular facials on my clients' skin. Facials are not just a luxurious pampering session; they are an essential part of a comprehensive skincare routine that can yield numerous benefits for your skin and your overall well-being.\nOne of the key benefits of regular facials is the access to professional expertise. As a beauty therapist, I am trained and knowledgeable about various skin types, conditions, and treatments. This expertise ensures that my clients receive safe and effective treatments tailored to their individual skin concerns.</p>
                    <p>Below are some of the advantages of getting regular facials.</p>
                    <ul>
                        <li><b>Deep Cleansing:</b> Facials help with the removal of dirt, debris, and excess oil, can help unclog pores, and prevent breakouts.</li>
                        <li><b>Exfoliation:</b> done during facials helps remove dead skin cells and reveals fresher, smoother skin underneath. This can improve the texture and tone of your skin and promote a more youthful appearance.</li>
                        <li><b>Increased Circulation:</b> Facial massages and other techniques used during a facial can help stimulate blood circulation to the skin, which can improve oxygen and nutrient delivery to the cells. This can promote a healthy glow and overall skin health.</li>
                        <li><b>Relaxation and Stress Relief:</b> Facials often include relaxing massages and steamy, which can help reduce stress and promote relaxation. Lower stress levels can benefit the skin by reducing inflammation and promoting a more youthful appearance.</li>
                        <li><b>Professional Extraction:</b> Beauty therapists are trained in safely extracting blackheads. This can help prevent scarring and further skin damage that may occur with improper extraction at home.</li>
                        <li><b>Education and Advice:</b> Regular facials can provide an opportunity to learn more about your skin type, how to care for your skin at home, and receive expert advice on skincare routines and products. This knowledge can empower you to make informed decisions about your skincare and maintain a healthy skin care regimen.</li>
                    </ul>
                    <p>As an experienced and certified beauty therapist, during facials I use professional-grade products and techniques and create a serene and calming environment for my clients to unwind and de-stress. Also, I take the time to educate my clients about their skin type, its specific needs, and how to care for it at home. I would love to have the opportunity to provide you a professional facial.</p>
                    <p>Yours Truly,<br/>Sumiti.
                    </p>
                </div>
                </div>
            </>}
        </div>
        <section className='footerMain'>
            All Rights Reserved.
        </section>
    </div>
  )
}

export default Blog