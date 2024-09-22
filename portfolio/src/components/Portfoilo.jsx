import '../style/portfolio.css';

const Portfolio = () => {
    return (
        <div>
        <div className='portfolioTitle'>Portfolio</div>
            <div className='portfolioBoard' onClick={() => window.location.href = 'https://www.naver.com/'}>
                <div className='portfolioContent'>
                    <div>
                        &lt; mapping - 팀프로젝트 &nbsp;
                        <span className='titleExpl'>할인 혜택부터 지출 관리까지, 지도로 한눈에!</span>
                    </div>
                </div>
                <div className='portfolioContentExpl'>
                    -&gt; 사용기술 : React, Node.js
                    </div>
                    <div className='portfolioContentExpl'>
                    -&gt; 역할 : 발표, 응애
                    </div>
                </div>
        </div>
    );
};

export default Portfolio;
