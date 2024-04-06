function saturdayFun(activity = 'roller-skate') {
    console.log(`This Saturday, I want to ${activity}!`);
    return `This Saturday, I want to ${activity}!`;
    }
    function mondayWork(workActivity="go to the office"){
        return `This Monday, I will ${workActivity}.`
 }
 function wrapAdjective(aString="*") {
 
    return function( adjective = 'special'){
        return `You are ${aString}${adjective}${aString}!`
    }
}