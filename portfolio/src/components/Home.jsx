import '../style/home.css';
import React from 'react';
import TextChanger from './TextChanger';

const Home = ()=>{
    return (
        <div className='right'>
        <div className='center'>
            <p className='title'>WELCOME</p>
            <div className='content'>
            <p className='phrase'> <TextChanger /></p>
            </div>
        </div>
        </div>
    )
}
export default Home;