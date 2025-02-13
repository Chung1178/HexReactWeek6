import { useEffect } from "react";
import { useNavigate } from "react-router"

export default function NotFoundPage () {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(() => {
            navigate('/')
        }, 5000);
    },[])

    return (
        <h1>此頁面不存在，5秒後跳轉回首頁</h1>
    )
}