import React, { useState } from 'react';

const Login = () => {

    // 1.상태변수설정
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    // 2.함수설정 백엔드로 전송하기
    const handleSubmit = () => {

    }

    // 5.화면표시
    return (
        <div>
            <h3>로그인</h3>
            <from onSubmit={handleSubmit}></from>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button>로그인</button>
        </div>
    );
};

export default Login;