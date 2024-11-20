let button = document.getElementById("bt")
button.onclick = function(){
    let weight =document.getElementById("wi").value 
    let tall = document.getElementById("hi").value 
    let result = weight/(tall*tall)
    document.getElementById("bmi").innerHTML = result
    if(result < 18){
        document.getElementById("bmic").innerHTML = "نحيف"
    }
    else if(result > 18 && result < 24.9 ){
        document.getElementById("bmic").innerHTML = "مثالي"
    }
    else if(result > 24.9 && result <29.9){
        document.getElementById("bmic").innerHTML = "وزن ذاءد"
    }
    else if(result > 29.9 && result <34.9){
        document.getElementById("bmic").innerHTML = "سمنه درجه اولي"
    }
    else if(result > 34.9 && result <39.9){
        document.getElementById("bmic").innerHTML = "سمنه درجه تانيه" 
    }
    else{
        document.getElementById("bmic").innerHTML = "سمنه خطيره"
    }
}
