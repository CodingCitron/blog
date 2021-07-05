import React from 'react'
import './Profile.css'

function Profile() {
    return (
        <div className="profile-container box-shadow">
            <div className="inner">
                <div className="image-block">
                    등록된 이미지가 없습니다.
                </div>
                <h2>개발자 박상민</h2>
                <p>
                    안녕하세요 세상에 개발자로 이름을 
                    남겨보고 싶은 박상민이라고 합니다.
                </p>
            </div>
        </div>
    )
}

export default Profile
