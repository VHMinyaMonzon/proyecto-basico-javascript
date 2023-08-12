// local reviews data
const reviews = [
  {
    id: 1,
    name: "Susan smith",
    job: "web developer",
    img: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/08/web_developer.jpeg.jpg",
    text: "I'm baby megging thwe carret is nerw ingenier de develo pe eweb devide estre carse de la mentir review custon every comer trows cath if sectinf frey yuor very match  courry custon bath",
  },
  {
    id: 2,
    name: "Anna Jhonson",
    job: "Web designer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN0sj1VAiEkGB3DaT3YV8oYn-ZzumQDBp3eoBSjBnd85kbeQWLWj7x67TQEgg8l8CGnmg&usqp=CAU",
    text: "I'm baby megging thwe carret is nerw ingenier de develo pe eweb devide estre carse de la mentir review custon every comer trows cath if sectinf frey yuor very match  courry custon bath",
  },
  {
    id: 3,
    name: "Victor Hugo",
    job: "Full stack",
    img: "https://www.staffcreativa.pe/blog/wp-content/uploads/disenador-web3.jpg",
    text: "I'm baby megging thwe carret is nerw ingenier de develo pe eweb devide estre carse de la mentir review custon every comer trows cath if sectinf frey yuor very match  courry custon bath",
  },
  {
    id: 4,
    name: "Mary Currie",
    job: "Web designer",
    img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/72AYgWguyRFfesCrDJi8w8/35b0d50e819d179b4d99b5f8e44fb416/GettyImages-1255905368.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
    text: "I'm baby megging thwe carret is nerw ingenier de develo pe eweb devide estre carse de la mentir review custon every comer trows cath if sectinf frey yuor very match  courry custon bath",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 1;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

//show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length-1;
    }
    showPerson(currentItem);
  });


