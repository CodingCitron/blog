import './CreatePage.css'
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SelectBox from './SelectBox';

function CreatePage(){

    const [content, setContent] = useState({
        category: 'CATEGORY',
        title: '',
        content: ''
    })

    const handleChange = (e) => {
       const { name, value } = e.target

       setContent({
           ...content, 
           [name]: value
       })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        console.log(content)
    }
    
    const updateSelect = (category) => {
        setContent({
            ...content, 
            category
        })
    }

    SelectBox.defaultProps = {
        value: 'CATEGORY'
    }

    return (
        <div className="post-create">
            <form onSubmit={submitHandler}>
                <SelectBox updateSelect={updateSelect}/>
                <input type="text" placeholder="Title" className="title" name="title" autoFocus
                onChange={handleChange} />
                <CKEditor 
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setContent({
                            ...content, 
                            content: data
                        })
                    } }
                />
                <div className="info">
                    <div></div>
                    <button>등록하기</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePage