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
        <MyEditor></MyEditor>
        <div style={{width:500,margin:'0 auto',textAlign:'left'}}>
             <RichEditorExample></RichEditorExample>
        </div>
      </div>
    );
  }
}

export default App;
