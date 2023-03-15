function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun("bathe my dog")
saturdayFun();


function mondayWork(activity = "go to the office") {
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(adj1 = "*") {
    return function(adjective = "special"){
        return `You are ${adj1}${adjective}${adj1}!`
    }
}
console.log(wrapAdjective())