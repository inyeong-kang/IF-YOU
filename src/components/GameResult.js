import React, { useState, useEffect } from "react";
import axios from '../api/axios';

//import "../styles/GameResult.css";

const RESULT_URL = '/result';

function GameResult() {
    const [result, setResult] = useState('');

    const fetchResult = async () => {
      try {
        setResult(null);
        // loading 상태를 true 로 바꿉니다.
        const id = localStorage.getItem("name");
        
        const response = await axios.post(
            RESULT_URL,
            JSON.stringify({ id }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
        );
        console.log(response);
        console.log(response.data);
        setResult(response.data);
        
        } catch (err) {
            console.log(err);
        }
    };
    
    useEffect(() => {
        fetchResult();
    }, []);

    return (
        <div className="game-result">
            { result != 'nothing' || result != undefined ? String(result) + "점이군요!" : '(게임을 먼저 완료해주세요!)'}
            { result >= 5 ? " 이제 당신에게 필요한 건 고백할 용기 하나!😄" : "좀 더 친해지길 바라! 고백은 다음에~..😥"}
        </div>
    );
}
export default GameResult;