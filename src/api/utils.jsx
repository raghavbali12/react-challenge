const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getRandomStr = () => {
    return (Math.random() + 1).toString(36).substring(7);
}


export {
    sleep,
    getRandomStr
}