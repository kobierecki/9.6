
var buttonElement = document.getElementById("button");
var listElement = document.getElementById("list");

buttonElement.addEventListener("click", function(){
    var newElement = document.createElement("li");
    var listLength = document.getElementsByTagName("li").length;
    newElement.innerHTML = "item " + listLength;
    console.log(newElement);
    listElement.appendChild(newElement);
});

