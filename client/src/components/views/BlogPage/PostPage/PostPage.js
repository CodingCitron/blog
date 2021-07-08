import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import axios from 'axios'
import Alert from '../../Alert/Alert'
import Aside from '../../Aside/Aside';
import Comment from './Comment';
import Loader from '../../Loading/Loader';
import './PostPage.css'

function PostPage(props){
    const user = useSelector(state => state.user)
    const postId = props.match.params.postId
    const [post, setPost] = useState([])
    const [idCompare, setidCompare] = useState(false)
    const [modal, setModal] = useState(false)
    const [deletePost, setDeletePost] = useState(false)
    const [comments, setComments] = useState([])
    const [setting, setSetting] = useState({
        show: 10
    })
    const [commentLength, setCommentLength] = useState(0)

    useEffect(() => {
        const variable = { postId: postId }
        
        axios.post('/api/list/getPost', variable)
        .then(response => {
            if(response.data.success){
                setPost(response.data.post)
            }else{
                alert('작성 글을 불러오는데 실패했습니다.')
            }
        })
    }, [])

    useEffect(() => {
        const variable = { 
            postId: postId,
            loadLength: setting.show,
            paging: 0
        }

        axios.post('/api/comment/getComments', variable)
        .then(response => {
            if(response.data.success){
                setComments(response.data.comments)
            }else{
                alert('댓글 정보를 불러오는데 실패했습니다.')
            }
        })

        axios.get(`/api/comment/getCommentsLength/${postId}`)
        .then(response => {
            if(response.data.success){
                setCommentLength(response.data.length)
            }else{
                console.log('댓글 목록을 가져오는데 실패 했습니다.')
            }
        })
    }, [])


    useEffect(() => {
        if(user.userData && user.userData.isAuth){ 
            // userData -> undefined 방지후 isAuth 체크
            if(post.writer && post.writer._id === user.userData._id){
                setidCompare(true)
            }
        }
    }, [user.userData, post.writer]) // undefined 값 둘다 넣어줘야함

    const openModal = (e) => {
        e.preventDefault()
        if(user.userData && !user.userData.isAuth){
            return alert('로그인 상태가 아닙니다.')
        }
        if(post.writer._id !== user.userData._id){
            return alert('작성자가 일치하지 않습니다.')
        }
        return setModal(true)
    }

    useEffect(() => {
        if(deletePost === false) return
        if(user.userData && !user.userData.isAuth){
            return alert('로그인 상태가 아닙니다.')
        }
        if(post.writer._id !== user.userData._id){
            return alert('작성자가 일치하지 않습니다.')
        }
        const variable = {
            postId: post.writer._id,
        }
        axios.post('/api/list/deletePost', variable)
        .then(response => {
            if(response.data.success){
                return props.history.push('/')
            }else{
                alert('글을 삭제하는데 실패했습니다.')
            }
        })
    }, [deletePost])

    const update = () => {
        if(post.writer._id !== user.userData._id){
            return alert('작성자가 일치하지 않습니다.')
        }
        props.history.push(`/list/update/${postId}`)
    }

    // 현재 답글 에러 있음 로직 수정해야함
    // 더하기 부분은 수정 완료
    const refreshFunction = (newComment) => {
        console.log(newComment[0])
        setComments([
            ...newComment,
            ...comments 
        ])

        if(newComment[0] && newComment[0].responseTo === undefined){
            setCommentLength(commentLength + 1)
        }
    }

    useEffect(() => { // 최적화 에러 나옴
        if(comments.length < (setting.show + 1)) return
            setComments(comments.slice(0, -1))
    }, [comments])

    Comment.defaultProps ={
        length: 0
    }

    if(post.writer){
        return (
            <div className="post-page">
                <Aside />
                <div className="container">
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
                        <div className="content">
                            <div dangerouslySetInnerHTML={{ __html: post.content }}>
                        </div>
                        </div>
                        <div className="function">
                            <div className="tag">
                                {/* <a>태그:</a>  */}
                                <a href="#">태그 예시</a>
                            </div>
                            <div className={idCompare === true? 'post' : 'post disable'}>
                                <a className="button-only-text" onClick={openModal}>삭제</a>/
                                <a className="button-only-text" onClick={update}>수정</a>
                            </div>
                        </div>
                        {modal === true? 
                        <Alert 
                            message="정말 삭제하실 건가요?" 
                            setModal={setModal}
                            prompt={true}
                            setDeletePost={setDeletePost}
                        /> : null}
                    </main>
                    <div>
                        <Comment refreshFunction={refreshFunction} 
                            commentList={comments} 
                            postId={postId}
                            commentLength={commentLength} 
                        />
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <Loader />
        )
    }
}

export default PostPage