import { useEffect, useState, useCallback } from 'react';
import { getUserInfo } from '../api/user';

const Header = ({timeStr, userId}) => {
    console.log("rerendering header ...")

    const [userInfo, setUserInfo] = useState('');
    const [timeStrLocal, setTimeStrLocal] = useState(timeStr);
    const fetchUserInfo = useCallback(async () => {
        let serverUserInfo = await getUserInfo(userId);
        setUserInfo(serverUserInfo);
    }, userId);

    useEffect(() => {
            let nowTime = new Date();
            setTimeStrLocal(`${nowTime.toDateString()} ${nowTime.toTimeString()}`);
    }, [])

    useEffect(() => {
        fetchUserInfo();
    }, [userId])

    useEffect(() => {
        function updateTimeValue() {
          setInterval(() => {
            let nowTime = new Date();
            if (nowTime.getSeconds() === 0) {
                setTimeStrLocal(`${nowTime.toDateString()} ${nowTime.toTimeString()}`);
            }
            console.log("setTimeout:" + nowTime.getSeconds())
            console.log(timeStrLocal);
          }, 1000)
        }
        updateTimeValue();
      }, [timeStrLocal])

    return (
        // userInfo && (
            <>
                <div class="p-4 mb-4 text-sm text-gray-800 rounded-lg bg-gray-100" role="alert">
                    <span class="font-medium">{timeStrLocal}</span>
                </div>
                <div class="p-4 mb-4 text-sm text-gray-800 rounded-lg bg-gray-100" role="alert">
                    <span class="font-medium">{userInfo}</span>
                </div>
            </>
        // )
    )
}

export default Header;