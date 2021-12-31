import {row1, row2, row3, row4} from './constants/data';

//Create place in array variable
var charactersPlaceInArray;
//Create Text Object
let verticalFlipValue = [];

//Vertical Flip Function
export const verticalFlip = (outputtedText) => {
  verticalFlipValue = [];
  for (var i = 0; i < outputtedText.length; i++) {
    if (row1.indexOf(outputtedText[i]) != -1) {
        console.log(row1)
      charactersPlaceInArray = row1.indexOf(outputtedText[i], row1);
      verticalFlipValue.push(row4[charactersPlaceInArray]);
    } else if (row2.indexOf(outputtedText[i]) != -1) {
      charactersPlaceInArray = row2.indexOf(outputtedText[i], row2);
      verticalFlipValue.push(row3[charactersPlaceInArray]);
    } else if (row3.indexOf(outputtedText[i]) != -1) {
      charactersPlaceInArray = row3.indexOf(outputtedText[i], row3);
      verticalFlipValue.push(row2[charactersPlaceInArray]);
    } else if (row4.indexOf(outputtedText[i]) != -1) {
      charactersPlaceInArray = row4.indexOf(outputtedText[i], row4);
      verticalFlipValue.push(row1[charactersPlaceInArray]);
    } else {
      verticalFlipValue.push(outputtedText[i]);
    }
  }
  return verticalFlipValue;
};
