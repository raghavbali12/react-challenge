import { sleep } from "./utils"

const getUserName = async () => {
    await sleep(2000)
    return "test_user_id"
}

const getUserInfo = async (userId) => {
    await sleep(3000)
    if (userId){
        return "test_user_info"
    }
    return ""
}

export {
    getUserName,
    getUserInfo
}