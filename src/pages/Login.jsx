import axios from 'axios';
import React, { useState } from 'react';
import { login } from '../reducers/loggedSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

    const dispatch =useDispatch();

    // 1.상태변수설정
    const [id, setId] = useState('')
    const [pw, setPw] = useState('');

    // 2.함수설정 백엔드로 전송하기
    const handleSubmit = async(e) => {
        e.preventDefault();

        const url=`/api/member/login.json`;
        const body ={
            "id":id,
            "password":pw
        };
        const {data}= await axios.post(url,body);
        console.log(data); 
        dispatch (login({token:data.token}));

    }

    //리듀스의 login을 호출하여 값을 변경
    

    // 5.화면표시
    return (
        <div>
            <h3>로그인</h3>
            <form onSubmit={handleSubmit}>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
            <button>로그인</button>
        </form>
        </div>
    );
};

export default Login;