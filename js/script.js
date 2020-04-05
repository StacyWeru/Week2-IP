var maleAkan = [ "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleAkan = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


function validate();{
    var date = parseInt(document.getElementById("dateInput").value);
    var month = parseInt(document.getElementById("monthInput").value);
    var year = parseInt(document.getElementById("yearInput").value);
    var century = parseInt(document.getElementById("centuryInput").value);
    var gender = document.getElementById("genderInput");

    if(date.value == "" || month.value == "" || year == "" || century.value == "");
    {
        alert("Please fill in the blanks appropriately");
        return false;
    } else {

    }
}
    function calculate(){
        var CC = century;
        var YY = year;
        var MM = month;
        var DD = date;
        var day = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
        console.log(day);
        return (Math.floor(day));
      }
    }
    

     
