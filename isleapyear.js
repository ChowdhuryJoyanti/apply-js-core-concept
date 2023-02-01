function isleapyear(year){
    const remainder = year % 4;
    if(remainder === 0){
        // console.log('It is leapear', year);
        return true;
    }
    else {
        // console.log('It is not leapyear', year);
        return false;
    }
}
 const isMyYearleapyear = isleapyear(1993);
 console.log('It is not leapyear', isMyYearleapyear);
 const herMyYearleapyear = isleapyear(1960);
 console.log('It is not leapyear', herMyYearleapyear);












