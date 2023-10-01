/*event-controlled js for three circular images, checks status of the container, if display is none then it will expand and show text, if the text is already shown it will display none*/

function open1(){
    if(document.getElementById("pznDetails").style.display == "block"){
        document.getElementById("pznDetails").style.display = "none";
    }
    else{
        document.getElementById("pznDetails").style.display = "block";
    }

    if(document.getElementById("svcDetails").style.display == "block"){
        document.getElementById("svcDetails").style.display = "none";
        document.getElementById("pznDetails").style.display = "block";
    }
    else if(document.getElementById("shpDetails").style.display == "block"){
        document.getElementById("shpDetails").style.display = "none";
        document.getElementById("pznDetails").style.display = "block";
    }   

}

function open2(){
    if (document.getElementById("svcDetails").style.display == "block"){
        document.getElementById("svcDetails").style.display = "none";
    }
    else {
        document.getElementById("svcDetails").style.display = "block";
    }

    if(document.getElementById("pznDetails").style.display == "block"){
        document.getElementById("pznDetails").style.display = "none";
        document.getElementById("svcDetails").style.display = "block";
    }
    else if(document.getElementById("shpDetails").style.display == "block"){
        document.getElementById("shpDetails").style.display = "none";
        document.getElementById("svcDetails").style.display = "block";
    }

}

function open3(){
    if (document.getElementById("shpDetails").style.display == "block"){
        document.getElementById("shpDetails").style.display = "none";
    }
    else {
        document.getElementById("shpDetails").style.display = "block";
    }

    if(document.getElementById("pznDetails").style.display == "block"){
        document.getElementById("pznDetails").style.display = "none";
        document.getElementById("shpDetails").style.display = "block";
    }
    else if(document.getElementById("svcDetails").style.display == "block"){
        document.getElementById("svcDetails").style.display = "none";
        document.getElementById("shpDetails").style.display = "block";  
    }

}


