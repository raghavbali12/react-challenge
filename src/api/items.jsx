import { sleep, getRandomStr } from "./utils"

const updateItem = async (item, userId) => {
    await sleep(5000)
    return `${getRandomStr()}-${item}-${userId}`
}

export {
    updateItem
}