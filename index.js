// Code your solution here
function findMatching(drivers, name){
    const newCollection = [];
    for (const driver of drivers){
        if (driver.toLowerCase() === name.toLowerCase()){
            newCollection.push(driver);
        }
    }
    return newCollection;
}
function fuzzyMatch(drivers, partialName) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(partialName.toLowerCase()));
}
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}
      