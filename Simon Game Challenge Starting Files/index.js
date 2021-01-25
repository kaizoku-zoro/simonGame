var clrs = ["red", "blue", "green", "yellow"];

function ran() {
    return Math.floor(Math.random() * 4);
}
var started=false;
var act=[];
var usr=[];
var level=0;
$(document).keypress(function(){
    if(!started){
        next();
        started=true;
    }
})
$(".btn").click(function(){
    effct($(this));
    usr.push($(this).attr("id"));
    console.log("your",usr);
    check(usr.length-1);
})
function check(curr){
    if(usr[curr]===act[curr]){
        if(usr.length===act.length){
            setTimeout(function () {
                next();
              }, 1000);
        }
    }
    else{
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        again();
    }
}
function next(){
    level++;
    $("#level-title").text("Level " + level);
    usr=[];
    var last=clrs[ran()];
    act.push(last);
    console.log(act);
    effct($("#"+last));
}
function again(){
    level=0;
    act=[];
    started=false;
}
function effctn(i) {
    $("#" + clrs[i]).addClass("pressed");
    var audio = new Audio("sounds/" + clrs[i] + ".mp3");
    audio.play();
    setTimeout(function () {
        $("#" + clrs[i]).removeClass("pressed");
    }, 100);
}

function effct(key) {
    key.addClass("pressed");
    var color = key.attr("id");
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
    setTimeout(function () {
        key.removeClass("pressed");
    }, 100);
}
// $(document).keypress(function (event) {
//     console.log("starting!");
//     game();
// })