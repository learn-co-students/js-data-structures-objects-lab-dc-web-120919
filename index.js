// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign( {}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    // Alternate using ES6 Spread operators:
    // const newObj = { ...driver }
    const newObj = Object.assign({}, driver);
  
    delete newObj[key];
  
    return newObj;
  }

function destructivelyDeleteFromDriverByKey(driver, key){
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    
    return newObj;
}


  

