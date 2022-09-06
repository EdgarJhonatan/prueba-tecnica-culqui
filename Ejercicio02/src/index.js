import { stringArray1 } from "./common/constans.js";
import callFunctions from "./functions/index.js";

const arrayToProcess = stringArray1;

function arrayChallenge(arrayToProcess) {
   let result = {};
   const stringToCompare = arrayToProcess[0];
   const stringDictionary = arrayToProcess[1];

   const resultFunctions = callFunctions(stringToCompare, stringDictionary);
   const subtractCharacters = stringToCompare.length - resultFunctions;

   return subtractCharacters === 0
      ? (result = { outPut: -1 })
      : (result = { outPut: subtractCharacters });
}

console.log(arrayChallenge(arrayToProcess));
