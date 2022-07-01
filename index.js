// Code your solution in this file!
function returnFirstTwoDrivers(array){
    const newArray = array.slice(0,2);
    return newArray;
}
function returnLastTwoDrivers(array){
    const newArray = array.slice(2);
    return newArray;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function (fare){
        return fare*integer;
    };
}
function fareDoubler(fare){
    return createFareMultiplier(2);
}
function fareTripler(){
    return createFareMultiplier(3);
}
function selectDifferentDrivers(arrayOfDrivers, fun){
    if (fun === returnFirstTwoDrivers()){
        return selectingDrivers[0]
    }
    else if (fun === returnLastTwoDrivers()){
        return selectingDrivers[1]
    }
}
