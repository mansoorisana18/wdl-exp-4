let displaytext = document.querySelector(".inner-display");
displaytext.innerHTML=0;

let button = document.querySelectorAll(".button");
button.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.innerHTML=='AC')
        {
            displaytext.innerHTML = 0;
        }else if(e.target.innerHTML=='='){
            displaytext.innerHTML = eval(displaytext.innerHTML);
        }else {
            if(displaytext.innerHTML=='0'){
                displaytext.innerHTML = '';
            }
            displaytext.innerHTML+= e.target.innerHTML;
        }
    });
});

let theme = document.querySelector("#color-choice");
let ele1 = document.querySelector(".cal-body");
let ele2 = document.querySelectorAll(".change");

theme.addEventListener('change', function(){        
    let color = theme.value;
    if(color == "blue"){
        
        document.body.style.backgroundImage = "url('./images/Background blue.png')";
        ele1.style.backgroundColor = "#1F2833";    
        for(ele in ele2){
            console.log(ele);
            ele2[ele].style.backgroundColor = "#66FCF1";
        }
    }else if(color == "black"){
        
        document.body.style.backgroundImage = "url('./images/Background black.png')";
        ele1.style.backgroundColor = "#242323";    
        for(ele in ele2){
            ele2[ele].style.backgroundColor = "#FFB78E";
        }
    }else{
        document.body.style.backgroundImage = "url('./images/Background pink.png')";
        ele1.style.backgroundColor = "#532A43";  
        for(ele in ele2){
            ele2[ele].style.backgroundColor = "#FFDFF6";
        }        
    }
}); 
