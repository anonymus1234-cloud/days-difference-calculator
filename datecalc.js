function daysdifference() {
    //define two variables and fetch the input from HTML form
    var dateI1 = document.getElementById("dateInput1").value;
    var dateI2 = document.getElementById("dateInput2").value;

    //define two date object variables to store the date values
    var date1 = new Date(dateI1);
    var date2 = new Date(dateI2);

    //calculate time difference
    var time_difference = date2.getTime() - date1.getTime();

    //calculate days difference by dividing total milliseconds in a day

    var resut1 = time_difference /  (1000 * 60 * 60 * 24);

   return document.getElementById("result").innerHTML = resut1 + " days between both dates is: ";
}