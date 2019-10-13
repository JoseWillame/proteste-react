import React from 'react';

import Post from './Post';

export default class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello Word</h1>
                <Post title="Aprendendo ReactJs"/>
                <Post title="tutorial ReactJs"/>
                <Post title="Willame Alves"/>

            </div>
            
        );
            
        
    }

}