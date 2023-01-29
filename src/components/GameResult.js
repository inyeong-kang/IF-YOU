import React, { useState, useEffect } from "react";
//import axios from '../api/axios';

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
        fetch('http://34.80.243.76:6006/result', {
            method : "POST",
            headers : {
                "Content-Type":"application/json; charset=utf-8"
            },
            body: JSON.stringify(id)
            })
        .then(res=>{
                console.log(res)
                setResult(res);
                return res.json();
        }).then(res=> {
            console.log(res);
        });

        } catch (err) {
            console.log(err);
        }
    };
    
    useEffect(() => {
        fetchResult();
    }, {});

    return (
        <div className="game-result">
            
        </div>
    );
}
export default GameResult;