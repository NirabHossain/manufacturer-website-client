// import hammer from './../../assets/images/hammer.png'
// import axe from './../../assets/images/axe.png'
// import spade from './../../assets/images/spade.png'

const services = [
    {
        _id: 1,
        name: "Hammer",
        description: "This is a hammer made of 98% grey iron which makes this hard. It takes less power to break anything because of its structure designed by us.",
        minimum_order:150,
        quantity:40000,
        price: 200,
        img:"hammer"
    },
    {
        _id: 2,
        name: "Axe",
        description: "This axe is made with iron in the rear side and best quality duralumin in the blade (front). It's very rough and tough if someone is not careful about using it.",
        minimum_order:100,
        quantity:800,
        price: 150,
        img:"axe"
    },
    {
        _id: 3,
        name: "Spade",
        description: "This spade is fully made of aluminum and stainless still. The face is covered by nickel so that it doesn't get rusted. It's super fast when it goes to the expert hand.",
        minimum_order:100,
        quantity:5000,
        price: 400,
        img: "spade"
    }
];

export default services;