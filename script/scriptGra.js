let score=0;
let money=0;
let lvlScore=1;
let lvlMoney=1;
let lvlZabaScore=0;
let lvlZabaMoney=0;
let ulvlMoney = lvlMoney * 400;
let ulvlScore = lvlScore * 300;
let ulvlZabaMoney = lvlZabaMoney *1000;
let ulvlZabaScore = lvlZabaScore *500;
let completeAchievements=0;
function clickBtn() 
    {
        score=score+lvlScore;
        money=money+lvlMoney;
        document.getElementById("score").innerHTML=score;
        document.getElementById("money").innerHTML=money;
    }
function uZabaMoney ()
{
    if(money > ulvlMoney - 1){
        money = money-ulvlMoney;
        lvlMoney = lvlMoney+1;
        ulvlMoney = lvlMoney*500;
        document.getElementById("money").innerHTML=money;
        document.getElementById("uPoziomMoney").innerHTML=("Pieniądze poziom "+lvlMoney);
        document.getElementById("ulvlMoney").innerHTML=("Koszt " + ulvlMoney)
    }

}
function uZabaScore ()
{
    if(money > ulvlScore -1)
    {
        money = money-ulvlScore;
        lvlScore = lvlScore +1;
        ulvlScore = lvlScore * 300;
        document.getElementById("uPoziomScore").innerHTML=("Wynik poziom "+lvlScore)
        document.getElementById("money").innerHTML=money;
        document.getElementById("ulvlScore").innerHTML=("Koszt "+ulvlScore)
    }
}
function uZabyMoney ()
{
    
    if(money > ulvlZabaMoney -1)
    {
        money = money - ulvlZabaMoney;
        lvlZabaMoney = lvlZabaMoney+1;
        ulvlZabaMoney = lvlZabaMoney *300;
        document.getElementById("kosztZabyMoney").innerHTML=("Koszt " + ulvlZabaMoney)
        document.getElementById("money").innerHTML=money;
        document.getElementById("lvlZabyMoney").innerHTML=("Żaby monety poziom "+lvlZabaMoney)
        
    }


}
function ZabyMoney () 
{
    for(let i=0; i<1; i++){
        money += lvlZabaMoney;
        document.getElementById("money").innerHTML=money;
        
    }
}setInterval(ZabyMoney,1000)
function uZabyScore ()
{
    
    if(money > ulvlZabaScore -1)
    {
        money = money - ulvlZabaScore;
        lvlZabaScore = lvlZabaScore+1;
        ulvlZabaScore = lvlZabaScore *300;
        document.getElementById("kosztZabyScore").innerHTML=("Koszt " + ulvlZabaScore)
        document.getElementById("money").innerHTML=money;
        document.getElementById("lvlZabyScore").innerHTML=("Żaby wynik poziom "+lvlZabaScore)
        
    }
}
function ZabyScore () 
{
    for(let i=0; i<1; i++){
        score += lvlZabaScore;
        document.getElementById("score").innerHTML=score;
        
    }
}setInterval(ZabyScore,1000)