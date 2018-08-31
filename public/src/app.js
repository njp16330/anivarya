import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
    render (){
        return <div>Hello, World!</div>;
    }
}

ReactDOM.render(<Main></Main>, document.getElementById('main-container'));