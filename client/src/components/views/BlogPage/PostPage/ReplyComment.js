import axios from 'axios'
import React, { useState, useEffect } from 'react'
import SingleComment from './SingleComment'

function ReplyComment(props) {

    const [childCommentNumber, setChildCommentNumber] = useState(0)
    const [reply, setReply] = useState([])
    const [openReplyComments, setOpenReplyComments] = useState(false)

    useEffect(() => {
        if(props.commentList){
            setChildCommentNumber(props.commentList.replyCount)
            const variable = {
                responseTo: props.parentCommentId
            }
            axios.post('/api/comment/loadReply', variable)
            .then(response => {
                if(response.data.success){
                    setReply(response.data.reply)
                }else{
                    alert('답글을 불러오는 데 실패했습니다.')
                }
            })
        }else{ // 답글이 없다. < 불러오지 않음
            setChildCommentNumber(0)
        }
        //parentCommentId 로 상위 댓글 검색
        //위 아이디로 responseTo 검색
        //
    }, [childCommentNumber])

    const onHandleChange = () => {
        setOpenReplyComments(!openReplyComments)
    }

    let renderReplyComment = (parentCommentId) => 
        reply.map((_reply, index) => (
                <React.Fragment key={index}>
                        <div className="answer">
                            <SingleComment 
                                refreshFunction={props.refreshFunction} 
                                comment={_reply} 
                                postId={props.postId} 
                                userData={props.userData} 
                            />
                            <ReplyComment
                                refreshFunction={props.refreshFunction} 
                                parentCommentId={
                                    reply[index]._id
                                }
                                postId={props.postId}
                                commentList={reply[index]} 
                                /* <<부모의 답글 개수를 전달해야 한다. */
                                userData={props.userData} 
                            />
                        </div>
                </React.Fragment>
        ))
    

    return (
        <>
            {childCommentNumber > 0 && 
                <a onClick={onHandleChange} className="load-reply">
                    {openReplyComments === false? `답글 ${childCommentNumber}개 보기` : `답글 ${childCommentNumber}개 숨기기`}
                </a>
            }

            {openReplyComments &&
                <div>
                    {renderReplyComment(props.parentCommentId)}
                </div>
            }
        </>
    )
     
}

export default ReplyComment
