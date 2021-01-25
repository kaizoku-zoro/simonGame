var clrs = ["green", "red", "yellow", "blue"];
var nums={"green":0,"red":1,"yellow":2,"blue":3};
function rand() {
    return Math.floor(Math.random() * 4);
}


function effct(key){
    key.classList.add("pressed");
    var color=key.id;
    var audio = new Audio("sounds/" + color+ ".mp3");
    audio.play();
    setTimeout(function () {
        key.classList.remove("pressed");
    }, 100);
}
$(".btn").click(function(){
    effct(this);
})