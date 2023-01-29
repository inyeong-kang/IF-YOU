import React, { useState, useEffect } from "react";
import axios from '../api/axios';

//import "../styles/GameResult.css";

const RESULT_URL = '/result';

function GameResult() {

    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchResult = async () => {
      try {
        setResult(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const id = 'yh';
        
        const response = axios.post(
            RESULT_URL,
            JSON.stringify({ id }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
        );
        console.log(response);
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
            
        </div>
    );
}
export default GameResult;