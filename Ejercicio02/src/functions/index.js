export default function callFunctions(stringToCompare, stringDictionary) {
   const separateString = separateByComma(stringDictionary);
   const compareEnd = compareStringWithLongString(stringToCompare, separateString);

   return compareEnd.sort(orderValue)[0].value;
}

function separateByComma(arrayOfString) {
   return arrayOfString.split(",");
}

function compareStringWithLongString(stringToCompare, arrayOfString) {
   let result = [];
   for (let index = 0; index < arrayOfString.length; index++) {
      const element = arrayOfString[index];
      result.push(stringsCompare(stringToCompare, element));
   }
   return result;
}

function stringsCompare(stringToCompare, element) {
   const compare = removeDuplicates(stringToCompare.split(""));
   const dictionary = removeDuplicates(element.split(""));

   let resultado = {};
   let existe = 0;

   for (let index = 0; index < compare.length; index++) {
      const element = compare[index];
      if (dictionary.includes(element)) {
         existe = existe + 1;
      }
   }
   resultado.name = element;
   resultado.value = existe;
   return resultado;
}

function removeDuplicates(arr) {
   return arr.filter((item, index) => arr.indexOf(item) === index);
}

function orderValue(a, b) {
   if (a.value < b.value) {
      return 1;
   }
   if (a.value > b.value) {
      return -1;
   }
   return 0;
}
