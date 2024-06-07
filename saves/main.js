const myCatArray = [
  {
    "id": "2gv",
    "url": "https://cdn2.thecatapi.com/images/2gv.jpg",
   "width": 1920,
"height": 1440
  },
  {
    "id": "5m1",
    "url": "https://cdn2.thecatapi.com/images/5m1.jpg",
    "width": 1920,
    "height": 1440
  },
  {
    "id": "66c",
    "url": "https://cdn2.thecatapi.com/images/66c.jpg",
    "width": 1920,
"height": 1440
  },
  {
    "id": "9qo",
    "url": "https://cdn2.thecatapi.com/images/9qo.jpg",
    "width": 1920,
    "height": 1440
  },
  {
    "id": "e5n",
    "url": "https://cdn2.thecatapi.com/images/e5n.jpg",
    "width": 1920,
    "height": 1440
},
{
"id": "MTgzNTcxMQ",
"url": "https://cdn2.thecatapi.com/images/MTgzNTcxMQ.jpg",
"width": 1920,
"height": 1440
},
{
"id": "MTg0NDExOQ",
"url": "https://cdn2.thecatapi.com/images/MTg0NDExOQ.jpg",
"width": 1920,
"height": 1440
},
{
"id": "MTg3NDk0Ng",
"url": "https://cdn2.thecatapi.com/images/MTg3NDk0Ng.jpg",
"width": 1920,
"height": 1440
},
{
"id": "tmH3RG7rD",
"url": "https://cdn2.thecatapi.com/images/tmH3RG7rD.jpg",
"width": 1920,
"height": 1440
},
{
"id": "blr4iUu-b",
"url": "https://cdn2.thecatapi.com/images/blr4iUu-b.jpg",
"width": 1920,
"height": 1440
}
  
];

function getRandomCatImage() {
  const randomIndex = Math.floor(Math.random() * myCatArray.length);
  return myCatArray[randomIndex].url;
}

function changeBackgroundImage() {
  const randomCatImage = getRandomCatImage();
  document.body.style.backgroundImage = `url(${randomCatImage})`;
}

document.getElementById('changeButton').addEventListener('click', changeBackgroundImage);