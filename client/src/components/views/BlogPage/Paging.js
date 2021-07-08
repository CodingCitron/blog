import React, { useState, useEffect } from 'react'

function Paging({ paging, getList, nowPage }) {

    const [now, setNow] = useState(1)
    const [pageSet, setPageSet] = useState({
        startPage: 1,
        endPage: 0,
        divide: 10
    })

    useEffect(() => {
        setNow(nowPage)
    }, [nowPage])

    useEffect(() => {
        setPageSet({
            ...pageSet,
            endPage: paging.length
        })
    }, [paging])

    if(paging && paging.length <= 10){ // 10 이하
        return (
            <div className="list-page-paging">
                {console.log(pageSet)}
                {paging && paging.map((pageList, index) => {
                    return <a className="btn box-shadow" key={index} onClick={() => getList(pageList)}>{pageList}</a>
                })}
            </div>
        )
    }else if(paging && paging.length > 10){ // 11 이상
        return (
            <div className="list-page-paging"> 
                <a className="btn box-shadow" >prev</a>
                {paging && paging.map((pageList, index) => {
                    return <a className="btn box-shadow" key={index} onClick={() => getList(pageList)}>{pageList}</a>
                })}
                <a className="btn box-shadow" >next</a>
            </div>
        )
    }


}

export default Paging
