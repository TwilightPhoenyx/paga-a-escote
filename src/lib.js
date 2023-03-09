function roundNumber (initialNumber, numberOfDecimals) {
    return (Math.round(parseFloat(initialNumber)*(10**numberOfDecimals)))/10**numberOfDecimals;
}

export {roundNumber};