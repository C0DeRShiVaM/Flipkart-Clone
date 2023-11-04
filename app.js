let arr = [
    {
        imgSrc: "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
        title: "Grocery",
    },
    {
        imgSrc: "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
        title: "Mobiles",
    },
    {
        imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100",
        title: "Fashion"
    },
    {
        imgSrc: "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
        title: "Electronics",
    },
    {
        imgSrc: "https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
        title: "Home & Furniture",
    },
    {
        imgSrc: "https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100",
        title: "Appliances",
    },
    {
        imgSrc: "https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
        title: "Travel",
    },
    {
        imgSrc: "https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
        title: "Beauty, Toys & More",
    },
    {
        imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
        title: "Two Wheelers",
    },
];


arr.map((element)=>{               //the map method is used to traverse (iterate over) an array and perform a specified operation on each element of the array. It creates a new array
    let image = document.createElement("img");
    image.src = element.imgSrc;

    let title = document.createElement("p");
    title.innerHTML = element.title;

    let box = document.createElement('div');
    box.append(image, title);

    document.getElementById("categories").append(box);

});


//secondRowOfCategory
document.addEventListener("DOMContentLoaded", function (){
    let arrTwo = [
        {
            imgSrc: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS7biq2Nd7mYVIPUOz1Zehh5krazD535-VDTv16TV-1ecKtRasQWF48Og2NvZjqjHxeG_V9Oy65Exz2fNsry7iShz1TZZfqFNjC6DYzE5eTeNGx0H3cbKT-Zd6tAjQKrnRGe_Z1P74&usqp=CAc",
            title: "Women's innerwear",
        },
        {
            imgSrc: "https://m.media-amazon.com/images/I/61cAF6+KnmL._AC_UL320_.jpghttps://m.media-amazon.com/images/I/61cAF6+KnmL._AC_UL320_.jpg",
            title: "Joggers",
        },
        {
            imgSrc: "https://m.media-amazon.com/images/I/71peb+H+V+L._AC_UL320_.jpg",
            title: "Running Shoe"
        },
        {
            imgSrc: "https://m.media-amazon.com/images/I/618mcZaabNL._UY879_.jpg",
            title: "Hats",
        },
        {
            imgSrc: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/s/q/r/l-lrc-18-adwyn-peter-original-imagpxce8myxywxz.jpeg?q=70",
            title: "Men's Shirts",
        },
        {
            imgSrc: "https://m.media-amazon.com/images/I/71c45nRcbiL._SX522_.jpg",
            title: "Weighted Vests",
        },
        {
            imgSrc: "https://rukminim2.flixcart.com/image/832/832/kz4gh3k0/t-shirt/s/i/a/l-pain-red-cooque-original-imagb7p8brm5rmt7.jpeg?q=70",
            title: "Tshirt",
        },
    ];

    arrTwo.map((e)=>{
        let image = document.createElement("img");
        image.src = e.imgSrc;

        let title = document.createElement("p");
        title.innerHTML = e.title;

        let box = document.createElement('div');
        box.append(image, title);

        document.getElementById("secondRowOfCategory").append(box);
    });
});
