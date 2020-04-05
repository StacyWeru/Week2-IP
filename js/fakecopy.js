
let calculateDayValue = function() {};

function calculateDayValue(){
     var day = ( ( (CC/4) -2*CC -1) + ( (5* YY/4) ) + ((26*(MM + 1)/10) ) + DD)% 7;
    console.log(day);
    return(Math.round(day));
}

    function submit(){
    var day = daysOfTheWeek[calculateDayValue()];
    var name = akanName();
    document.getElementById("day").innerHTML = day;
    document.getElementById("name").innerHTML = name;
    document.getElementById("output").style.display= "block";
}


    function genderInput();{
      radio = document.getElementById("genderInput"); 
    }
      if(gender[0].checked== true){
        var gender = "maleAkan";

    }else if(gender[1].checked == true){
        var gender ="femaleAkan";
    }else{
        return false;
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
            } else if (day ==-0) {
                alert("Hey boy, You were born on a" + daysOfTheWeek[6] +" ,therefore your Akan name is " + maleAkan[6] + "! :)");
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
            } else if (day ==-0) {
                alert("Hey girl, You were born on a" + daysOfTheWeek[6] +" ,therefore your Akan name is " + femaleAkan[6] + "! :)");
            }
            break 
            default:

   
    function submit(){
       day = calculateDayValue();
       calculateDayValue();
       genderInput();
    }
}
     let clearform = function(){};

     function clearform(){
        document.getElementById("detailsInputForm").reset();
     }
