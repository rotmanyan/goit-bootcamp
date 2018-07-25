import React from 'react';
import Post from '../Post/Post';
import List from '../List/List';


const Main = () => {
    return (<div>
        <h1>Main component</h1>
        <Post title='Title 1' text='Paragraph 1' likes={100} date='02.05.12'/>
        <Post title='Title 2' text='Paragraph 2' likes={50} date='10.10.09'/>
        <Post title='Title 3' text='Paragraph 3' likes={18} />
        <Post title='Title 4' text='Paragraph 4' date='10.10.09'/>
        <List/>
    </div>)
};

export default Main;