var maleAkan = [ "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleAkan = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


function validate();{
    var DD = parseInt(document.getElementById("dateInput").value);
    var MM = parseInt(document.getElementById("monthInput").value);
    var YY = parseInt(document.getElementById("yearInput").value);
    var CC = parseInt(document.getElementById("centuryInput").value);
    var gender = document.getElementById("genderInput");
}
function calculateDayValue(){
    day = (((CC/4) -2*CC -1) + ((5* YY/4)) + ((26*(MM + 1)/10)) + DD)% 7;
    console.log(d);
    return(Math.floor(day));
}

    if(gender[0].checked== true){
        var gender = "maleAkan";

    }else if(gender[1].checked == true){
        var gender ="femaleAkan";
    }else{
        return false;
    }
