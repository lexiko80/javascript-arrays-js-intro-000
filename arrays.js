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
  return [theArray,...theElement]
}
