import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const ChangePW = () => {

    // 전체페이지의 공통변수(redux)에서 토큰값을 받음
    const { token } = useSelector((state) => state.logged);

    // ref 변수 생성
    const oldRef = useRef(null);
    const newRef = useRef(null);
    const new1Ref = useRef(null);

    // 상태변수 3개 만들기
    const [oldpw, setOldpw] = useState('');
    const [newpw, setNewpw] = useState('');
    const [newpw1, setNewpw1] = useState('');

    const handleSubmit = async (e) => {
        // 기본적으로 form 태그는 새로고침이 되는데 기본기능을 방지함
        e.preventDefault();

        // 유효성 검사
        if (oldpw.length <= 0) {
            alert('암호를 입력하세요.');
            oldRef.current.focus();
            return;
        }

        if (newpw.length <= 0) {
            alert('변경 암호를 입력하세요.');
            newRef.current.focus();
            return;
        }

        if (newpw1.length <= 0) {
            alert('변경 암호를 한번 더 입력하세요.');
            new1Ref.current.focus();
            return;
        }

        if (newpw != newpw1) {
            alert('변경할 암호가 일치 하지 않습니다.');
            new1Ref.current.focus();
            return;
        }

        // 백엔드 연동
        const url = `/api/member/updatepw.json`;
        // 토큰전달방식
        const headers = { "Authorization": `Bearer ${token}` };
        const body = { "password": oldpw, "password1": newpw };
        // 백엔드를 호출해서 작업을 진행시키고 결과를 data변수에 보관
        const { data } = await axios.put(url, body, { headers });
        // 결과값을 크롬의 console에 출력해봄
        console.log(data);
        if (data.status === 200) {
            alert('암호변경 되었습니다.');
        }
    }


    return (
        <div>
            암호변경
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="password" value={oldpw} onChange={(e) => setOldpw(e.target.value)} ref={oldRef} />
                </div>
                <div>
                    <input type="password" value={newpw} onChange={(e) => setNewpw(e.target.value)} ref={newRef} />
                </div>
                <div>
                    <input type="password" value={newpw1} onChange={(e) => setNewpw1(e.target.value)} ref={new1Ref} />
                </div>
                <div>
                    <button type="submit">암호변경</button>
                </div>
            </form>
        </div>
    );
};

export default ChangePW;