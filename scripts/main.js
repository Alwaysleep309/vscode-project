const myimage = document.querySelector("img");
myimage.onclick = () => {
    const mysrc = myimage.getAttribute("src");
    if (mysrc === "images/picture.png") {
        myimage.setAttribute("src","images/picture2.png");
    } else {
        myimage.setAttribute("src","images/picture.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
    setUserName();
};

function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    } else{
        localStorage.setItem("name",myName);
        myHeading.textContent = `好久不见, ${myName}`;
    }
}