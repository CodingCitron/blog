import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';
import './Comment.css'

function Comment(props) {
//{ commentList, userData, postId, refreshFunction, length }
    const user = useSelector(state => state.user)
    const textarea = useRef()
    const [commentValue, setCommentValue] = useState('')
    const [commentLength, setCommentLength] = useState(props.commentLength)

    const submitHandler = (e) => {
        e.preventDefault()
        if(props.userData && !props.userData.isAuth){
            return alert('로그인 상태가 아닙니다.')
        }
        if(commentValue === ''){
            return alert('댓글을 입력하세요.')
        }
        const variable = {
            postId: props.postId,
            writer: user.userData._id,
            content: commentValue
        }
        axios.post('/api/comment/saveComment', variable)
        .then(response => {
            if(response.data.success){
                props.refreshFunction(response.data.result)
                setCommentValue('')
            }else{
                alert('댓글을 저장하지 못했습니다.')
            }
        })
    }

    const changeHandler = (e) => {
        setCommentValue(e.target.value)
    }

    useEffect(() => {
        setCommentLength(props.commentLength)
    }, [props.commentLength])
    
    return (
        <div className="comment-container">
            <h4>Comment ({commentLength})</h4> {/* Comment (댓글 수) */}

            {/* Root Comment Form */}
            <form onSubmit={submitHandler} >
                <div className="form-layout">
                    <div className="profile-image">

                    </div>
                    <textarea onChange={changeHandler} req={textarea} placeholder="댓글을 입력해 주세요." value={commentValue}>

                    </textarea>
                </div>
                <div className="comment-btn">
                    <button className="comment-button">댓글등록</button>
                </div>
            </form>

            {/* Comment List */}
            {props.commentList && props.commentList.map((comment, index) => {
                return (!comment.responseTo &&
                    <div key={index} className="comment-container-single box-shadow-inset">
                        <SingleComment 
                            refreshFunction={props.refreshFunction} 
                            comment={comment} 
                            postId={props.postId} 
                        />  
                        <ReplyComment
                            refreshFunction={props.refreshFunction}
                            parentCommentId={comment._id}
                            postId={props.postId}
                            commentList={props.commentList[index]}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Comment
