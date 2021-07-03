import './BlogPage.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Moment from 'react-moment';

function BlogPage(){

    const [lists, setLists] = useState([])
    const [setting, setSetting] = useState({
        show: 9,
    })

    const [paging, setPaging] = useState([])
    const [listLength, setListLength] = useState(0)

    useEffect(async () => {
        await axios
        .all([axios.get(`/api/list/getList/0/show/${setting.show}`), axios.get(`/api/list/getListLength`)])
        .then(
            axios.spread((res1, res2) => {
                if(res1.data.success){
                    setLists(res1.data.list)
                }else console.log('글 목록을 가져오는데 실패 했습니다.')
                if(res2.data.success) {
                    let divide = Math.ceil((res2.data.length)/setting.show),
                    page = Array.from({length: divide}, (v, i) => i + 1)
                    setListLength(res2.data.length)
                    setPaging(page)
                }else console.log('전체 글 개수를 가져오는데 실패 했습니다.')
            })
        )
    }, [])

    const getList = (page) => {
        const from = setting.show * (page - 1)
        axios.get(`/api/list/getList/${from}/show/${setting.show}`)
        .then(response => {
            if(response.data.success){
                setLists(response.data.list)
                window.scrollTo({ top: 0 })
            }else{
                console.log('글 목록을 가져오는데 실패 했습니다.')
            }
        })
    }

    return (
        <div className="show-list">
            <h2>Latest Posts</h2>
            <div className="blog-page" >
                {lists && lists.map((list,index) => {
                    return(
                    <a key={index} className="post" href={`/blog/post/${list._id}`}>
                        { list.thumbnail ? 
                        <img src={list.thumbnail} className="thumbnail-image"/>
                        : <div className="thumbnail-image"> 섬네일이 없습니다. </div>
                        }
                        <h3 className="title">{list.title ? list.title : "제목이 없습니다."}</h3>
                        <div className="content">
                        { list.content ? 
                        <div dangerouslySetInnerHTML={{ __html: list.content.replace(/(<([^>]+)>)/ig,"") }}></div>
                        : "내용이 없습니다." }
                        </div>
                        <div className="info">
                            <span>{list.writer.name}</span>
                            <span>
                                <Moment format="YYYY.MM.DD HH:mm">
                                    {list.createdAt}
                                </Moment>
                            </span>
                        </div>
                    </a>)
                })}
                {listLength === 0? '작성된 글이 없습니다.' : null}
            </div>
            <div className="blog-page-paging">
                {paging && paging.map((pageList, index) => {
                    return <a className="btn" key={index} onClick={() => getList(pageList)}>{pageList}</a>
                })}
            </div>
        </div>
    )
}

export default BlogPage