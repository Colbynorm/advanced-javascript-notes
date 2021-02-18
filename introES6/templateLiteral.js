function parseHouse(property){
    return `${property.owner} is selling the property at ${property.address} for ${property.price}`
}
const house = {
    address = "123 Main St, Dallas Tx",
    floors = 2,
    price = 100000,
    owner = "John Doe"
};
console.log(parseHouse(house));