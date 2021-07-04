import React, { useRef, useState, useEffect } from 'react'
import Moment from 'react-moment';
import axios from 'axios'

function SingleComment({ postId, userData, comment, refreshFunction }) {
    const [toggleInput, setToggleInput] = useState(false)
    const [commentValue, setCommentValue] = useState('')

    const reply = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        if(userData && !userData.isAuth){
            return alert('로그인 상태가 아닙니다.')
        }

        if(commentValue === ''){
            return alert('댓글을 입력하세요.')
        }

        const variable = {
            postId: postId,
            writer: userData._id,
            content: commentValue,
            responseTo: comment._id
        }

        axios.post('/api/comment/saveComment', variable)
        .then(response => {
            if(response.data.success){
                refreshFunction(response.data.result)
                setCommentValue('')
                setToggleInput(false)
            }else{
                alert('댓글을 저장하지 못했습니다.')
            }
        })
    }

    const changeHandler = (e) => {
        setCommentValue(e.target.value)
    }

    const clickHandler = (e) => {
        setToggleInput(!toggleInput)
    }

    useEffect(() => {
        if(toggleInput === true) reply.current.focus()
    }, [toggleInput])

    return (
        <React.Fragment>
            <div className="inner container">
                <div className="profile-image">
                    {comment.writer.image? comment.writer.image : null}
                </div>
                <div className="content">
                    <div className="box">
                        <div className="info">
                            <div className="writer">{comment.writer.name}</div>
                            <div className="date">
                                <Moment format="YYYY.MM.DD HH:mm">
                                    {comment.createdAt}
                                </Moment>
                            </div>
                        </div>
                        <div className="content-color">
                            {comment.content}
                        </div>
                    </div>
                    <button className="comment-button" onClick={clickHandler}>
                        답글 달기
                    </button>
                </div>
            </div>
            {toggleInput &&
                <div className="reply" >
                    <form onSubmit={submitHandler}>
                        <div className="form-layout">
                            <div className="profile-image">

                            </div>
                            <textarea onChange={changeHandler} placeholder="답글을 입력해 주세요." ref={reply} value={commentValue}>

                            </textarea>
                        </div>
                        <div className="comment-btn">
                            <button className="comment-button">댓글등록</button>
                        </div>
                    </form>
                </div>
            }
        </React.Fragment>
    )
}

export default SingleComment
