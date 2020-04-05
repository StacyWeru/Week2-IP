var maleAkan = [ "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleAkan = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


function validate();{
    var date = parseInt(document.getElementById("dateInput"));
    var month = parseInt(document.getElementById("monthInput"));
    var year = parseInt(document.getElementById("yearInput"));
    var century = parseInt(document.getElementById("centuryInput"));
    var gender = document.getElementById("genderInput");

    if(date.value == "" || month.value == "" || year == "" || century.value == "" || gender.value == "" )
    {
        alert("Please fill in the blanks appropriately");
    }
    else
}
