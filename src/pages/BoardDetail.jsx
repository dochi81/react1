import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const BoardDetail = () => {

    //주소창의 글번호 값 가져오기 위한 변수
    const [searchParams]= useSearchParams();


    //값을 가져와서 no에 보관하기 
    const [no, setNo] = useState(searchParams.get("id"))
    
    return (
        <div>
            <p>번호 : {no}</p>
        </div>
    );
};

export default BoardDetail;