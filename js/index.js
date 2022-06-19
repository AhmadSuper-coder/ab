
// main menu open function 
function openMenu(evt,menuName){

    var content=document.getElementsByClassName("content");

    for (var i=0;i<content.length;i++){
        content[i].style.display="none";
    }
    document.getElementById(menuName).style.display="block";
    document.getElementById(menuName).style.transform="translateX(0%)";

    let navbar=document.getElementById("nav");
    navbar.style.width="0%";
    toggler.style.display="block";

   
}
var el=document.getElementById("defaultOpen").click();






// autotyping code heree 

var typed=new Typed(".auto-type",{
    strings:["full stack developer","blogger","youtuber","motivation speeker"],
    typeSpeed:80,
    backSpeed:30,
    loop:true
})




// open nav in mobile mode  

function openNav(){
    let navbar=document.getElementById("nav");
    let toggler=document.getElementById("toggler");
    navbar.style.width="100%";
    toggler.style.display="none";
 
    
}

function closeNav(){
    let navbar=document.getElementById("nav");
    navbar.style.width="0%";
    let toggler=document.getElementById("toggler");
    toggler.style.display="block";
    
}

// toggler.style.display="none";
function openColor(){

}

// color changer from css 

// function openColor(){

//     let color=document.getElementsByClassName("color");

//     for (let i=0;i<color.length;i++){
//         let item=color[i];
//         console.log(item);
//         color[i].addEventListener('click',callColor())
//     }


//     function callColor(){
//         console.log("this has called");
//     }

// }





let redcolor=document.getElementById("color-red");

let bluecolor=document.getElementById("color-blue");

// let redcolor=document.getElementById("color-red");

let orangecolor=document.getElementById("color-orange");

let greencolor=document.getElementById("color-green");


redcolor.addEventListener('click',callRed);

bluecolor.addEventListener('click',callBlue);

orangecolor.addEventListener('click',callOrange);

greencolor.addEventListener('click',callGreen);

function callRed(){
    let elementgreen=document.getElementById("colorgreen");
    let elementorange=document.getElementById("colororange");
    let element=document.getElementById("colorred");
    let elementblue=document.getElementById("colorblue");
    console.log(element);
    element.removeAttribute("disabled");
    elementblue.setAttribute("disabled", "");
    elementorange.setAttribute("disabled", "");
    elementgreen.setAttribute("disabled", "");

}

function callBlue(){
    let elementgreen=document.getElementById("colorgreen");
    let elementorange=document.getElementById("colororange");
    let element=document.getElementById("colorblue");
    let elementred=document.getElementById("colorred");
    console.log(element);
    element.removeAttribute("disabled");
    elementred.setAttribute("disabled", "");
    elementorange.setAttribute("disabled", "");
    elementgreen.setAttribute("disabled", "");
}


function callOrange(){
    let elementorange=document.getElementById("colororange");
    let elementblue=document.getElementById("colorblue");
    let elementred=document.getElementById("colorred");
    let elementgreen=document.getElementById("colorgreen");
    console.log(elementorange);
    elementorange.removeAttribute("disabled");

    elementred.setAttribute("disabled", "");
    elementblue.setAttribute("disabled", "");
    elementgreen.setAttribute("disabled", "");
}


function callGreen(){
    let elementgreen=document.getElementById("colorgreen");
    let elementorange=document.getElementById("colororange");
    let elementblue=document.getElementById("colorblue");
    let elementred=document.getElementById("colorred");

    console.log(elementgreen);
    elementgreen.removeAttribute("disabled");

    elementred.setAttribute("disabled", "");
    elementorange.setAttribute("disabled", "");
    elementblue.setAttribute("disabled", "");
}





// js for the color switcher 

function openSwitcher(){
    let setting=document.getElementById("setting");
    let colorswitch=document.getElementById("color-switch");
    console.log(colorswitch);
    // colorswitch.style.display="block";

    if (colorswitch.style.display==="block"){
        colorswitch.style.display="none";
    }else{
        colorswitch.style.display="block";
    }

}






