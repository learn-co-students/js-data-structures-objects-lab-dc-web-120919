const driver = {};

let updateDriverWithKeyAndValue = function (driver, key, value){
    //
    return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){

    driver[key] = value; //cannot return here. This only returns the updated value;
    return driver; //must update it first, then return driver 
}

console.log(destructivelyUpdateDriverWithKeyAndValue(driver, "name", "John-Louis"));


function deleteFromDriverByKey(driver, key){

    let newDriverObject =  Object.assign({}, driver);
    delete newDriverObject[key];
    return newDriverObject;
}

console.log(deleteFromDriverByKey(driver, "name"))

function destructivelyDeleteFromDriverByKey(driver, key){

    delete driver[key];
    return driver;
}