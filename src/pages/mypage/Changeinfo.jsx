import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const ChangeInfo = () => {

    // 토큰 받기
    const { token } = useSelector((state) => state.logged);

    // 상태변수 name, age, email
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const handleData = async () => {
        // 요청할 백엔드 url
        const url = `/api/member/selectone.json`;
        // 전송할 토큰을 headers에 포함시킴 Authorization키는 변경될 수 있음
        const headers = { "Authorization": `Bearer ${token}` };
        const { data } = await axios.get(url, { headers: headers });
        console.log(data);
    }

    const handleeUpdate = async (e) => {
        e.preventDefault();

    
    useEffect(() => {
        handleData();
    }, [token]);

      // 변경할 url정보
        const url = `/api/member/update.json`;
        // 토큰전송
        const headers = { "Authorization": `Bearer ${token}` };
        // 변경할 내용
        const body = { "name": name, "age": age, "email": email };
        const { data } = await axios.put(url, body, { headers: headers });
        console.log(data);
        if(data.status ===200) {
            alert('정보가 변경되었습니다');
        }
    }

    return (
        <div>
            <h3>회원정보 변경</h3>

            <div>
                이름 : <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                나이 : <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>

            <div>
                이메일 : <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <button type="submit">확인</button>
            <button>취소</button>
        </div>
    );
};

export default ChangeInfo;