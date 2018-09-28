import * as React from 'react';
import './App.scss';
import FlowEditor from './containers/editor.js'
// @ts-ignore
import logo from './logo.svg';

class App extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="App">
                <FlowEditor/>
                {/*<header className="App-header">*/}
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<h1 className="App-title">Welcome to React</h1>*/}
                {/*</header>*/}
                {/*<p className="App-intro">*/}
                {/*To get started, edit <code>src/App.tsx</code> and save to reload.*/}
                {/*</p>*/}
            </div>
        );
    }
}

export default App;
