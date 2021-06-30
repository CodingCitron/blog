import 'react-quill/dist/quill.snow.css';
import './Quill.css'
import React, { Component } from 'react';
import ReactQuill from 'react-quill';


class EditorComponent extends Component{
  constructor(props){
      super(props);
  }

  modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{ 'align': [] }, { 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      ['clean']
    ],
  }
  
  formats = [
    //'font',
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
    'align', 'color', 'background',        
  ]

  render(){
    const { value, onChange, onFocus } = this.props;

    return(
      <ReactQuill 
        theme="snow" 
        modules={this.modules} 
        formats={this.formats} 
        value={value || ''} 
        onChange={(content, delta, source, editor) => onChange(editor.getHTML())} 
      />
    )
  }
}
export default EditorComponent