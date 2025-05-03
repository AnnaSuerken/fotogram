

let myImages = [
    "./img/img-01.jpg",
    "./img/img-02.jpg",
    "./img/img-03.jpg",
    "./img/img-04.jpg",
    "./img/img-05.jpg",
    "./img/img-06.jpg",
    "./img/img-07.jpg",
    "./img/img-08.jpg",
    "./img/img-09.jpg",
    "./img/img-10.jpg",
    "./img/img-11.jpg",
    "./img/img-12.jpg",
];

let currentIndex = 0;

let overlayImg = document.getElementById("img");

function render(){
  let contentRefOne = document.getElementById("content_one");
    for (let index = 0; index < myImages.length; index++){
        contentRefOne.innerHTML += getImgTemplate(index);
    };
}

function getImgTemplate(index){
    currentIndex = index;
    return `<div>
                <img onclick="toggleOverlayOn(${index})" src="${myImages[index]}" class="img" id="img"> 
            </div>`      
}

function toggleOverlayOn(index,) {
    currentIndex = index;
    document.getElementById("overlay").style.display = "flex";
    connectImgs();
}

function toggleOverlayOff(event) {
   if(event.target.id === "overlay" || event.target.classList.contains("close-icon")) {
    document.getElementById("overlay").style.display = "none";
   }
}

function connectImgs(){
    let srcPath = myImages[currentIndex];
    document.getElementById("overlayImg").src = srcPath;
  
  }

function previousImg(){
    if(currentIndex <= 0){
        return false;
    }  else {
    currentIndex--;
    connectImgs()}
}

function nextImg(){
    if(currentIndex >= 11){
        return false;
    }  
    currentIndex++;
    connectImgs()
}