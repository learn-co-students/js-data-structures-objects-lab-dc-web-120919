const driver = {}


function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    return Object.assign(driver, {[key]: value})
}

function deleteFromDriverByKey(driver, key, value){
  return Object.assign({}, driver, {[key]: value})
  delete driver.key;
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
  return Object.assign(driver, {[key]: value})
  delete driver.key;
}
