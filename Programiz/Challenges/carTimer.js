// convet total minutes into hours and minutes .

function carTimer(totalMinutes) {
    let output = "";

    let minutes = totalMinutes%60;
    let hours = Math.floor(totalMinutes/60);

    if (hours<10){
        hours='0'+hours;
    }

    if ( minutes==0){
        minutes='00'
    }

    output = `${hours}:${minutes}`;
    return output;
}