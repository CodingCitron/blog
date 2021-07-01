import './BlogPage.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function BlogPage(){

    const [lists, setLists] = useState([])
    const [setting, setSetting] = useState({
        show: 9,
    })
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)

    useEffect(async () => {
        await axios
        .all([axios.get(`/api/list/getList/0`), axios.get(`/api/list/getListLength`)])
        .then(
            axios.spread((res1, res2) => {
                if(res1.data.success) setLists(res1.data.list)
                else console.log('글 목록을 가져오는데 실패 했습니다.')
                if(res2.data.success)console.log(res2.data.length)
                else console.log('전체 글 개수를 가져오는데 실패 했습니다.')
            })
        )
    }, [])

    return (
        <div>
            <div className="blog-page" >
                {lists && lists.map((list,index) => {
                    return(
                    <a key={index} className="post" >
                        { list.thumbnail ? 
                        <img src={list.thumbnail} className="thumbnail-image"/>
                        : <div className="thumbnail-image"> 섬네일이 없습니다. </div>
                        }
                        <h2 className="title">{list.title ? list.title : "제목 없습니다."}</h2>
                        <div className="content">
                        { list.content ? 
                        <div dangerouslySetInnerHTML={{ __html: list.content.replace(/(<([^>]+)>)/ig,"") }}></div>
                        : "내용이 없습니다." }
                        </div>
                    </a>)
                })}
            </div>
            <div className="blog-page-paging">
                <a className="btn">13</a>
            </div>
        </div>
    )
}

export default BlogPage