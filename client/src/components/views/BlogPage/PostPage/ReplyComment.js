import React, { useState, useEffect } from 'react'
import SingleComment from './SingleComment'

function ReplyComment(props) {

    const [ChildCommentNumber, setChildCommentNumber] = useState(0)
    const [OpenReplyComments, setOpenReplyComments] = useState(false)

    useEffect(() => {
        let commentNumber = 0;
        props.commentList.map((comment) => {
            if (comment.responseTo === props.parentCommentId) {
                commentNumber++
            }
        })
        setChildCommentNumber(commentNumber)
    }, [props.commentList])

    const onHandleChange = () => {
        setOpenReplyComments(!OpenReplyComments)
    }

    let renderReplyComment = (parentCommentId) => 
        props.commentList.map((comment, index) => (
            <React.Fragment key={index}>
                {comment.responseTo === parentCommentId &&
                    <div className="answer">
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
                }
            </React.Fragment>
        ))

    return (
        <>
            {ChildCommentNumber > 0 && 
                <a onClick={onHandleChange} className="load-reply">
                    {OpenReplyComments === false? `답글 ${ChildCommentNumber}개 보기` : `답글 ${ChildCommentNumber}개 숨기기`}
                </a>
            }

            {OpenReplyComments &&
                <>
                    {renderReplyComment(props.parentCommentId)}
                </>
            }
        </>
    )
     
}

export default ReplyComment
