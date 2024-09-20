import React from 'react';
import './style/App.css';
import profileImg from './img/profile.jpg';
import gitImg from './img/git.png';
import instaImg from './img/insta.webp';
import vlogImg from './img/vlog.png';
import home from './img/home.png';
import me from './img/me.png';
import book from './img/book.png';
import right from './img/right.png';
import left from './img/left.png';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home'; 
import About from './components/About';
import Portfolio from './components/Portfoilo';
function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className="total">
        <div className="left">
          <div className="container">
            <div className="header">
              <div className="photo">
                <img src={profileImg} alt="Profile" className="profileImg" />
              </div>
              <div className="info">
                <h1 className="name">손 지 원</h1>
                <p className="role">Frontend Developer</p>
              </div>
              <div className="socialLinks">
                <ul className="linkList">
                  <li>
                    <a href="https://github.com/handbefore" target="_blank" rel="noopener noreferrer">
                      <img src={gitImg} alt="github" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <img src={instaImg} alt="insta" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.naver.com/" target="_blank" rel="noopener noreferrer">
                      <img src={vlogImg} alt="vlog" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="contact">
                <a href="mailto:jiwony0206@naver.com" className="contactLink">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </div>

      <div className="nav">
        <div className="navTop">
          <ul>
            <li>
              <img src={home} alt="home" onClick={() => navigate('/Home')} />
            </li>
            <li>
              <img src={me} alt="about" onClick={() => navigate('/About')} />
            </li>
            <li>
              <img src={book} alt="portfolio" onClick={() => navigate('/Portfolio')} />
            </li>
          </ul>
        </div>

        <div className="navBottom">
          <ul>
            <li>
              <img src={left} alt="left" onClick={() => navigate(-1)} />
            </li>
            <li>
              <img src={right} alt="right" onClick={() => navigate(1)} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
