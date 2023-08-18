import { useState } from 'react';
import { getUserInfo } from '../api/user';

const Header = ({timeStr, userId}) => {
    console.log("rerendering header ...")

    const [userInfo, setUserInfo] = useState('');

    return (
        timeStr && userInfo && (
            <>
                <div class="p-4 mb-4 text-sm text-gray-800 rounded-lg bg-gray-100" role="alert">
                    <span class="font-medium">{timeStr}</span>
                </div>
                <div class="p-4 mb-4 text-sm text-gray-800 rounded-lg bg-gray-100" role="alert">
                    <span class="font-medium">{userInfo}</span>
                </div>
            </>
        )
    )
}

export default Header;