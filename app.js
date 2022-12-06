const fromEuroToDollar = (euro)=>{
    let dollar = 1.2*euro
    return dollar
}

const fromDollarToYen = (dollar)=>{
    let euro = dollar/1.20
    let yen = 127.9 * euro
    return yen    
}

const fromYanToPound = (yan)=>{
    let euro = yan/127.9
    let pound = 0.8*euro
    return pound
}

console.log(fromYanToPound(100))
module.exports = { fromEuroToDollar, fromDollarToYen, fromYanToPound };