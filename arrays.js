var chocolateBars = ['snickers',
'hundred grand',
'kitkat',
'skittles']

var addElementToBeginningOfArray = (theArray, theElement) => {
  return [theElement,...theArray];
}

var destructivelyAddElementToBeginningOfArray = (theArray, theElement) =>{
  theArray.unshift(theElement);
  return theArray
}

var addElementToEndOfArray = (theArray, theElement) => {
  return [...theArray,theElement]
}

var destructivelyAddElementToEndOfArray = (theArray, theElement) => {
  theArray.push(theElement);
  return theArray
}

var accessElementInArray = (theArray, index) => {
  return theArray[index]
}
