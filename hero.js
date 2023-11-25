var heroName = prompt("Digite o nome do herói: ");
var heroExp = prompt("Digite a EXP do herói: ");
var heroClass;

if(heroExp<=1000){
    heroClass = "Ferro";
}else if(heroExp<=2000){
    heroClass = "Bronze"
}else if(heroExp<=5000){
    heroClass = "Prata"
}else if(heroExp<=7000){
    heroClass = "Ouro"
}else if(heroExp<=8000){
    heroClass = "Platina"
}else if(heroExp<=9000){
    heroClass = "Ascendente"
}else if(heroExp<=10000){
    heroClass = "Imortal"
}else{
    heroClass = "Radiante"
}

alert(`O Herói de nome ${heroName} está no nível de ${heroClass}`)