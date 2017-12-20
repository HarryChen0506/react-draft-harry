//我的富文本编辑器组件
import React from 'react';
import {Editor, EditorState} from 'draft-js';

class MyEditor extends React.Component{
    constructor(...args){
        super(...args);
        this.state = {
            editorState: EditorState.createEmpty()
        }        
    }
    onChange(editorState){
        this.setState({
            editorState: editorState
        })
    }
    render(){
        return (            
            <Editor editorState={this.state.editorState} onChange={this.onChange.bind(this)} />        
        )
    }
}
export default MyEditor;