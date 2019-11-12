var chocolateBars = ['snickers',
'hundred grand',
'kitkat',
'skittles']

var addElementToBeginningOfArray = (theArray, theElement) => {
  return [theElement,...theArray];
}

var destructivelyAddElementToBeginningOfArray = (theArray, theElement) =>{
  return theArray.unshift(theElement)
}
