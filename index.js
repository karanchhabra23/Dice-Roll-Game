const arr = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var turns = 0;
function func(image_id)
{
    var num = Math.floor(Math.random()*6);
    document.getElementById(image_id).src = arr[num];
    turns++;

    if(turns%2==0)
    {
        let e1 = document.getElementById("img1"); 
        let e2 = document.getElementById("img2");
        let winner = (e1.src < e2.src) + 1 ;
        document.getElementById("result").innerText=`player ${winner} wins`; 
    }
    
}
