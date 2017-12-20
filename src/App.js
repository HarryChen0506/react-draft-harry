import React from 'react';
import './App.css';
import MyEditor from './container/MyEditor';
import RichEditorExample from './container/RichEditor'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{width:500,margin:'20px auto',padding:20,border:'1px solid #999',textAlign:'left'}}>
           <MyEditor></MyEditor>
        </div>
        <div style={{width:500,margin:'20px auto',textAlign:'left'}}>
             <RichEditorExample></RichEditorExample>
        </div>
      </div>
    );
  }
}

export default App;
