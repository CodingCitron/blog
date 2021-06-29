import './BlogPage.css'
import React from 'react'

function Post(props){
    return (
        <a className="post">
            <h2 className="title">TITLE</h2>
            <img />
            <div className="content">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </a>
    )
}

function BlogPage(){
    return (
        <div className="blog-page">
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default BlogPage