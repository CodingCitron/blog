import './PostPage.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CategoryList from '../../Aside/CategoryList'
import Moment from 'react-moment';

function PostPage(props){

    const postId = props.match.params.postId
    const [post, setPost] = useState([])

    useEffect(() => {
        const variable = { postId: postId }

        axios.post('/api/list/getPost', variable)
        .then(response => {
            if(response.data.success){
                console.log(response.data)
                setPost(response.data.post)
                console.log(response.data.post.writer)
            }else{
                alert('작성 글을 불러오는데 실패했습니다.')
            }
        })
    }, [])

    if (post.writer) {
    return (
        <div className="post-page">
            <aside className="aside">
                <CategoryList />
            </aside>
            <main>
                <div className="title">
                    <h1>{post.title}</h1>
                    <div className="info">
                        <div className="category">
                            {post.category}
                        </div>
                        <div className="date">
                            <Moment format="YYYY.MM.DD HH:mm">
                                {post.createdAt}
                            </Moment>
                        </div>
                        <div>
                            {post.writer.name}
                        </div>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.content }}>
                </div>
                <div className="tag">
                    <span>태그:</span> 
                    <span>태그 예시</span>
                </div>
            </main>
        </div>
    )
    }else{
        return (
            <div>loading...</div>
        )
    }
}

export default PostPage