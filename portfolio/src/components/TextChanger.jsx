import React, { useState, useEffect } from 'react';
const TextChanger = () => {
    const texts = [
        "Hello, Welcome to my portfolio.",
        "안녕하세요, 저의 포트폴리오를 방문해주셔서 감사합니다."
    ];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
      texts[index]
    );
};
export default TextChanger;