const months = document.getElementById('month')
const dates = document.getElementById('date');
const years = document.getElementById('year');
function countDown(){
    var currentDate = new Date ();
    var month = currentDate.getUTCMonth()+1;
    var date = currentDate.getUTCDate();
    var year = currentDate.getFullYear();
    months.innerHTML = month;
    dates.innerHTML = date;
    years.innerHTML = year;
    console.log(month, date,year);
}
countDown();



