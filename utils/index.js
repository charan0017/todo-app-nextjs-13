function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomRotation() {
    const randomValue = getRandomInt(3, 8);
    const isPositive = getRandomInt(0, 1) === 1;
    return isPositive ? randomValue : -randomValue;
}
