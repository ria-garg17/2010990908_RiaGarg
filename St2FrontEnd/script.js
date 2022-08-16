function fun(){
    let l = document.getElementById("input-number").value.length;
    let n1 = document.getElementById("input-number").value;
    n1 = Number(n1);
    let sum = 0;

    if(isNaN(n1)){
        alert("Not a number");
    }

    else if(n1 == 0 || n1 == "" || n1 == " "){
        alert("Please enter a value");
    }

    else if(l<5 || l>5){
        alert("Enter 5 digit number only");
    }

    else{
        while(n1>0){
            sum += n1%10;
            n1 = Math.floor(n1/10);
        }
    
        let border = (sum/5);
    
        const box = document.getElementById("square");
    
        box.style.width = sum + "px";
        box.style.height = sum +"px";
        box.style.backgroundColor = "#1E2F97";
        box.style.borderRadius = border + "px";
        box.style.marginLeft = "47%";
    }
}