import React, { useRef, useState } from 'react'
import axios from 'axios'
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';
import './Comment.css'

function Comment(props) {
//{ commentList, userData, postId, refreshFunction, length }
    const textarea = useRef()
    const [commentValue, setCommentValue] = useState('')

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
            writer: props.userData._id,
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
    
    return (
        <div className="comment-container">
            <h4>Comment ({props.length})</h4> {/* Comment (댓글 수) */}

            {/* Comment List */}
            {props.commentList && props.commentList.map((comment, index) => {
                return (!comment.responseTo &&
                    <div key={index} className="comment-container-single box-shadow-inset">
                        <SingleComment 
                            refreshFunction={props.refreshFunction} 
                            comment={comment} 
                            postId={props.postId} 
                            userData={props.userData} 
                        />  
                        <ReplyComment
                            refreshFunction={props.refreshFunction}
                            parentCommentId={comment._id}
                            postId={props.postId}
                            commentList={props.commentList}
                            userData={props.userData} 
                        />
                    </div>
                )
            })}

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
        </div>
    )
}

export default Comment
