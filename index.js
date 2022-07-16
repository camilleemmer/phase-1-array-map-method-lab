const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((line) => {
    const words = line.split(' ')
    const capital = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1) 
    )
    const response = capital.join(' ')
    return response;
  })
}


// var sentence = 'the quick brown fox jumped over the lazy dog';

// var capitalizeString = (str) => str[0].toUpperCase() + 
// str.slice(1).toLowerCase();

// var capitalizeWords = (str) => str.split(' ') .map
// (capitalizeString).join(' ');

// console.log(capitalizeWords(sentence));


// const mySentence = "freeCodeCamp is an awesome resource";
// const words = mySentence.split(" ");

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }
// words.join(" ");

// function convertFirstLetterToUpperCase(str) {
//    return str
//     .toLowerCase()
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// }
// console.log(convertFirstLetterToUpperCase("that's how we make it uppercase"))

