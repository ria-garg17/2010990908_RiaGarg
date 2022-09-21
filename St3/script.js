function sun(){
    var weight = document.getElementById("inputWeight").value;
    if(weight==''||weight<0)
        alert("Please enter valid weight value");
    else{
        weight = weight * 27.01;
        document.getElementById("output").innerHTML = "Weight on Sun is: "+ weight.toFixed(3);
    }
}

function mercury(){
    var weight = document.getElementById("inputWeight").value;
    if(weight=='' || weight<0)
        alert("Please enter valid weight value");
    else{
        weight = weight * 0.38;
        document.getElementById("output").innerHTML = "Weight on Mercury is: "+ weight.toFixed(3);
    }
}

function venus(){
    var weight = document.getElementById("inputWeight").value;
    if(weight=='' || weight<0)
        alert("Please enter valid weight value");
    else{
        weight = weight * 0.91;
        document.getElementById("output").innerHTML = "Weight on Venus is: "+ weight.toFixed(3);
    }
}

function earth(){
    var weight = document.getElementById("inputWeight").value;
    if(weight=='' || weight<0)
        alert("Please enter valid weight value");
    else{
        weight = weight * 1;
        document.getElementById("output").innerHTML = "Weight on Earth is: "+ weight.toFixed(3);
    }
}

function moon(){
    var weight = document.getElementById("inputWeight").value;
    if(weight=='' || weight<0)
        alert("Please enter valid weight value");
    else{
        weight = weight * 0.166;
        document.getElementById("output").innerHTML = "Weight on Moon is: "+ weight.toFixed(3);
    }
}

function mars(){
    var weight = document.getElementById("inputWeight").value;
    if(weight=='' || weight<0)
        alert("Please enter valid weight value");
    else{
        weight = weight * 0.38;
        document.getElementById("output").innerHTML = "Weight on Mars is: "+ weight.toFixed(3);
    }
}

function jupiter(){
    var weight = document.getElementById("inputWeight").value;
    if(weight=='' || weight<0)
        alert("Please enter valid weight value");
    else{
        weight = weight * 2.34;
        document.getElementById("output").innerHTML = "Weight on Jupiter is: "+ weight.toFixed(3);
    }
}

function saturn(){
    var weight = document.getElementById("inputWeight").value;
    if(weight=='' || weight<0)
        alert("Please enter valid weight value");
    else{
        weight = weight * 1.06;
        document.getElementById("output").innerHTML = "Weight on Saturn is: "+ weight.toFixed(3);
    }
}

function uranus(){
    var weight = document.getElementById("inputWeight").value;
    if(weight=='' || weight<0)
        alert("Please enter valid weight value");
    else{
        weight = weight * 0.92;
        document.getElementById("output").innerHTML = "Weight on Uranus is: "+ weight.toFixed(3);
    }
}

function neptune(){
    var weight = document.getElementById("inputWeight").value;
    if(weight=='' || weight<0)
        alert("Please enter valid weight value");
    else{
        weight = weight * 1.19;
        document.getElementById("output").innerHTML = "Weight on Neptune is: "+ weight.toFixed(3);
    }
}

function pluto(){
    var weight = document.getElementById("inputWeight").value;
    if(weight=='' || weight<0)
        alert("Please enter valid weight value");
    else{
        weight = weight * 0.06;
        document.getElementById("output").innerHTML = "Weight on Pluto is: "+ weight.toFixed(3);
    }
}