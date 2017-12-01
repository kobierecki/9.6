
var buttonValue = document.getElementById("button");
var listValue = document.getElementById("list");

buttonValue.addEventListener("click", function(){
    var newElement = document.createElement("li");
    var listLength = document.getElementsByTagName("li").length;
    newElement.innerHTML = "item " + listLength;
    console.log(newElement);
    listValue.appendChild(newElement);
});

