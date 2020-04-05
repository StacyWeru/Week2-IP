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
        true;
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

    function genderInput(){
        gender = document.getElementsByName("gender");

        if(gender[0].checked == true){
            var gender ="maleAkan";
        }
        else if (gender[1].checked == true){
            var gender =" femaleAkan";
        }
        else {
            console.log("Invalid Entry")
        }

        
    }
    switch(gender){
        case "maleAkan":
            if (day == 1){
                alert("Hey boy, You were born on a" + daysOfTheWeek[0] +" ,therefore your Akan name is " + maleAkan[0] + "! :)");
            } else if (day == 2){
                alert("Hey boy, You were born on a" + daysOfTheWeek[1] +" ,therefore your Akan name is " + maleAkan[1] + "! :)");
            } else if (day == 3){
                alert("Hey boy, You were born on a" + daysOfTheWeek[2] +" ,therefore your Akan name is " + maleAkan[2] + "! :)");
            } else if (day == 4){
                alert("Hey boy, You were born on a" + daysOfTheWeek[3] +" ,therefore your Akan name is " + maleAkan[3] + "! :)");
            } else if (day == 5){
                alert("Hey boy, You were born on a" + daysOfTheWeek[4] +" ,therefore your Akan name is " + maleAkan[4] + "! :)");
            } else if (day == 6){
                alert("Hey boy, You were born on a" + daysOfTheWeek[5] +" ,therefore your Akan name is " + maleAkan[5] + "! :)");
            } else if (day == -0) {
                alert("Hey boy, You were born on a" + daysOfTheWeek[6] +" ,therefore your Akan name is " + maleAkan[6] + "! :)");
            } else {
                console.log("Invalid Entry!");
            } 

            break;
            case"femaleAkan":
            if (day == 1){
                alert("Hey girl, You were born on a" + daysOfTheWeek[0] +" ,therefore your Akan name is " + femalAkan[0] + "! :)");
            } else if (day == 2){
                alert("Hey girl, You were born on a" + daysOfTheWeek[1] +" ,therefore your Akan name is " + femaleAkan[1] + "! :)");
            } else if (day == 3){
                alert("Hey girl, You were born on a" + daysOfTheWeek[2] +" ,therefore your Akan name is " + femaleAkan[2] + "! :)");
            } else if (day == 4){
                alert("Hey girl, You were born on a" + daysOfTheWeek[3] +" ,therefore your Akan name is " + femaleAkan[3] + "! :)");
            } else if (day == 5){
                alert("Hey girl, You were born on a" + daysOfTheWeek[4] +" ,therefore your Akan name is " + femaleAkan[4] + "! :)");
            } else if (day == 6){
                alert("Hey girl, You were born on a" + daysOfTheWeek[5] +" ,therefore your Akan name is " + femaleAkan[5] + "! :)");
            } else if (day == -0) {
                alert("Hey girl, You were born on a" + daysOfTheWeek[6] +" ,therefore your Akan name is " + femaleAkan[6] + "! :)");
            } else{
                console.log("Invalid Entry!");
            }

            break ;
            default:

        }

        function output(){
            day = calculate();
            calculate();
            genderInput();
        }
         function clearForm(){
             document.getElementById("detailsInputForm").reset();
         }

     
