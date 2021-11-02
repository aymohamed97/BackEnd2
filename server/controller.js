const { globalAgent } = require('http');
const houses = require('./db.json');

let globalId = 4;

module.exports = {
getAllHouses: (req, res) => {
    res.status(200).send(houses)
    // console.log(getAllHouses)
},
deleteHouse: (req, res) => {
    let housesIndex = houses.findIndex((house) => house.id === Number(req.params.id));
    console.log(housesIndex);
    houses.splice(housesIndex, 1)
    res.status(200).send(houses)
},

createHouse: (req,res) => {
    let {address, price, imageURL} = req.body
    let newHouse = {
        id:globalId,
        address, 
        price,
        imageURL
}
houses.push(newHouse)
res.status(200).send(houses)
globalId++;
},

updateHouse: (req, res)=> {
    let requestId = req.params.id;
    let housesIndex = houses.findIndex((house) => house.id === Number(req.params.id));

    if (req.body.type === "plus"){
        houses[housesIndex].price += 10000
    }else if (req.body.type === "minus"){
        houses[housesIndex].price -= 10000
    }
    res.status(200).send(houses)
}


}