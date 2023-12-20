const container = document.querySelector('#container');
const para = document.createElement("p");
const heading = document.createElement("h3");
const theDiv = document.createElement("div");
const headingTwo = document.createElement("h1");
const paraTwo = document.createElement("p");
const btn = document.querySelector("#btn");
const btnOne = document.querySelector(".btn");



para.textContent = "Hey i'm red!";
para.style.cssText = "color: red;";
heading.textContent = "I'm a blue h3!";
heading.style.cssText = "color: blue;";
theDiv.style.cssText = "border: solid black 2px; background-color: pink;";
headingTwo.textContent = "I'm in a div";
paraTwo.textContent = "ME TOO!";
theDiv.append(headingTwo, paraTwo);
container.append(para, heading, theDiv);

btn.onclick = () => alert("Hello World");
btn.addEventListener('click', () => {
    alert("Hello World");
})

function alertFunction(){
    alert("YAY! You Did it!");
}
// btnOne.onclick = alertFunction;
btnOne.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });