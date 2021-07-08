import React from 'react'
import BlogPage from '../BlogPage/BlogPage'
import Aside from '../Aside/Aside'
import './LandingPage.css'

function LandingPage(props){

    const record = {
        padding: '1rem',
        margin: '3rem 0',
        backgroundColor: 'white',
        borderRadius: '0.2rem',
        lineHeight: '1.8'
    }

    const h1 = {
        margin: '0 0 1rem',
    }

    const p = {
        fontSize: '16px',
    }

    return (
        <div className="ladingPage">
            <Aside />
            <div style={{ width: '100%' }}>
                <div className="record" style={record}>
                    <h1 style={h1}>
                        고치거나, 추가 해야할 것 !
                    </h1>
                    <p style={p}>
                        1. 로그인 페이지 - 아이디 저장 체크 박스 해제시 적혀있는 아이디 사라짐
                        <br></br>
                        2. 댓글 페이징 기능
                        <br></br>
                        3. 카테고리 추가 기능
                        <br></br>
                        4. 전체적인 디자인 - 특히 Aside
                        <br></br>
                        5. 활동 중일 때 캐시 유지 기능(글 쓰다가 로그 아웃 발생함)
                        <br></br>
                        6. 캐시 시간 만료로 로그 아웃 발생 시 푸터 버그 있음
                        <br></br>
                        7. 10 페이지 이후 간격 기능 (현재는 글 10개가 넘어가도 다 보여줌)
                        <br></br>
                        8. 댓글 추가 시 상태 변화 
                        <br></br>
                        9. 어드민 페이지
                        <br></br>
                        10. 방명록 페이지
                        <br></br>
                        11. Contact 페이지
                        <br></br>
                        12. 반응형
                        <br></br>
                        13. view 파일 세분화 지금 페이지와 컴포넌트가 한 곳에 있음
                        <br></br>
                        14. 서버단 코드 then, catch로 보기 좋게 만들기
                        <br></br>
                        15. 리팩토링
                        <br></br>
                        16. 세팅 기능(블로그 전체적인 세팅을 데이터 베이스에 넣고,
                        리덕스 스토어에 추가)
                        <br></br>
                        17. Quill 에디터 이미지 수정 시 변화된 이미지 크기를 가져오지 않음 
                        고칠 방법 찾아보기
                        <br></br>
                        18. 노란 경고 뜨는 것들이 많이 있는데 없앨 방법 찾아보기
                        <br></br>
                        19. css 모듈 기능 사용하기
                        <br></br>
                        20. 검색 기능
                        <br></br>
                        21. 방문자 표시 기능
                        <br></br>
                        22. 홈은 필요 없을지도
                        <br></br>
                        23. 최적화 현재도 에러 뜨는 중...
                        <br></br>
                        24. postPage refreshfunction 다시 만들기 - 에러가 있음
                    </p>
                </div>
                <BlogPage />
            </div>
        </div>
    )
}

export default LandingPage