
function getDistanceBetween(iBase, iTarget) {
    return Math.max(iBase, iTarget) - Math.min(iBase, iTarget);
}

function getWinnerPet(iRex, iBob, iOli) {
    const iRexDistance = getDistanceBetween(iRex, iOli);
    const iBobDistance = getDistanceBetween(iBob, iOli);
    if (iRexDistance === iBobDistance) { return "oli" }
    if (iRexDistance < iBobDistance) { return "rex" }
    return "bob";
}
const sWinner = getWinnerPet(2,2,3);
console.log(sWinner);






