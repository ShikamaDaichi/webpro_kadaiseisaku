var roboArray = new Array();
roboArray[0] = new Image();
roboArray[0].src = 'robo/robo_up.png';
roboArray[1] = new Image();
roboArray[1].src = 'robo/robo_right.png';
roboArray[2] = new Image();
roboArray[2].src = 'robo/robo_down.png';
roboArray[3] = new Image();
roboArray[3].src = 'robo/robo_left.png';

var yubiArray = new Array();
yubiArray[0] = new Image();
yubiArray[0].src = 'yubi/up.png';
yubiArray[1] = new Image();
yubiArray[1].src = 'yubi/right.png';
yubiArray[2] = new Image();
yubiArray[2].src = 'yubi/down.png';
yubiArray[3] = new Image();
yubiArray[3].src = 'yubi/left.png';

const battleBtn = document.querySelector('.battleBtn');
battleBtn.addEventListener('click',main);

const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click',reset);

function print_robo(rWay){
    console.log(rWay)
    document.getElementById('hoi_way').src = roboArray[rWay].src;
}
function print_yubi(yWay){
    document.getElementById('yubi_way').src = yubiArray[yWay].src;
}

function judgeBattle(yWay,rWay){
    let result;
    if(yWay === rWay) {
        result = "win";
    } else {
        result = "lose";
    }
    let battle_result = document.getElementById("battleResult");
    if(result === "win"){
        battle_result.innerHTML = "すごい!あなたの勝ち!!";
    } else {
        battle_result.innerHTML = "残念!あなたの負け..."
    }
}

function judgeBtn(rWay){
    print_robo(rWay);
    if(document.getElementById("up").checked) {
        print_yubi(0);
        judgeBattle(0,rWay);
    } else if(document.getElementById("right").checked){
        print_yubi(1);
        judgeBattle(1,rWay);
    } else if(document.getElementById("down").checked){
        print_yubi(2);
        judgeBattle(2,rWay);
    } else if(document.getElementById("left").checked){
        print_yubi(3);
        judgeBattle(3,rWay);
    }
}

function reset(){
    window.location.reload();
}

function main(){
    let rWay = Math.floor( Math.random()*4);
    judgeBtn(rWay);
}