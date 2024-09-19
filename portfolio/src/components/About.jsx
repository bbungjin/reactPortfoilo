import '../style/about.css';

function About() {
    return(
        <div className='right'>
            <div className='aboutContainer'>
                <div className='aboutBox'>
                        <h2 className='aboutMe'>About Me</h2>
                        <div className='aboutMeTop'>
                            <p className='aboutMeIntroduce'>
                                ㅇㅇㅇㅇ 손지원입니다.
                                가나다라마바사아자차카타파하
                            </p>

                            <p className='aboutMeProfile'>
                                <ul>
                                    <li>
                                        <span>Name</span>
                                        손지원
                                    </li>
                                    <li>
                                        <span>Age</span>
                                        2001.02.06
                                    </li>
                                    <li>
                                        <span>Address</span>
                                        buchun-si
                                    </li>
                                    <li>
                                        <span>Email</span>
                                        abcd@gmail.com
                                    </li>
                                    <li>
                                        <span>Phone</span>
                                        010-0000-0000
                                    </li>
                                </ul>
                            </p>
                        </div>
                        

                    <div className='aboutBottom'>
                        <div className='aboutMeExperience'>
                            <h2>Experience</h2>
                            <p></p>
                        </div>

                        <div className='aboutMeSkills'>
                            <h2>Skills</h2>

                            <ul>
                                <li>
                                    HTML
                                </li>
                                <li>
                                    CSS
                                </li>
                                <li>
                                    JavaScript
                                </li>
                                <li>
                                    React
                                </li>
                                <li>
                                    Java
                                </li>
                                <li>
                                    SpringBoot
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;