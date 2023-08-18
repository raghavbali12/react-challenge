import { sleep, getRandomStr } from "./utils"

const updateItem = async (item, userId) => {
    await sleep(1000)
    return `${getRandomStr()}-${item}-${userId}`
}

export {
    updateItem
}