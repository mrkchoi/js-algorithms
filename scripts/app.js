
// // #2 Factorialize a number
// function factorialize(num) {
//     let result = 1;
//     for(let i = 1; i <= num; i++) {
//         result = result * i;
//     }
//     console.log(result);
// }
// factorialize(5);


// // #3 Palindrome Checker
// function palindrome(string) {
//     let stringSplit = string.split('');
//     let reverseArray = stringSplit.reverse();
//     let stringJoin = reverseArray.join('');

//     if(string === stringJoin) {
//         console.log('This is indeed a palindrome!');
//     } else {
//         console.log('Sorry! Not a palindrome.');
//     }
//     // console.log(stringJoin);
// }

// palindrome('racecar');

// // 4. Find the longest word in a string
// function longestWord(string) {
//     let splitString = string.split(' ');
//     // console.log(splitString);

//     let length = 0;
//     for(var i = 0; i < splitString.length; i++) {
        
//         if(splitString[i].length > length) {
//             length = splitString[i].length;
//         }
//     }
//     console.log(length);
// }

// longestWord('The quick fox jumped over the brown dog.');


// // 5. Titlecase Case a Sentence
// function titleCase(string) {
//     words = string.toLowerCase().split(' ');

//     for(let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     console.log(words.join(' '));
// }

// titleCase('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam consequatur ducimus necessitatibus. Fuga sint error beatae quasi itaque inventore vitae natus unde sapiente. Consequuntur vero eum modi, reiciendis possimus nulla?');

// // 6. Latest Numbers in Arrays

// function largestNum(arr) {
//     let value = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > value) {
//             value = arr[i];
//         }
//     }
//     console.log(value);
// }

// largestNum([1,2,3,4,5,6,7,8,65,345,2436,4567,45678]);


// // 7. Confirm the Ending
// function endMatch(string, target) {
//     // console.log(string.substr(-target.length));

//     if(string.substr(-target.length) === target) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// endMatch('Kenneth', 'eth');


// // 8. Repeat a string
// function repeatStr(string, num) {
//     // V1
//     // if (num < 0) {
//     //     console.log('');
//     // } else {
//     //     console.log(string.repeat(num));
//     // }

//     // // For loop
//     // var final = '';
//     // if (num < 0) {
//     //     console.log('');
//     // } else {
//     //     for(var i = 0; i < num; i++) {
//     //         final += string;
//     //     }
//     //     console.log(final);
//     // }
// }

// repeatStr('Kenny', 30);

// // 9. Truncate a string

// function truncateString(str, num) {

//     if(num <= 3) {
//         console.log(str.slice(0, num) + '...');
//     } else {
//         console.log(str.slice(0, num - 3) + '...');
//     }
// }

// truncateString('Weouthere, getting those javascript gains!', 20);


// // 10. Chunky Monkey
// function chunkArrayInGroups(arr, size) {
//     // Break it up
//     var groups = [];
//     while(arr.length > 0) {
//         groups.push(arr.splice(0, size));
//     }

//     console.log(groups);
// }

// chunkArrayInGroups([1,2,3,4,5,6,7,8,9], 2);


// // 11. Slasher Flick
// function slasher(arr, howMany) {
//     // let newArr = [];
//     arr.splice(0, howMany);
//     console.log(arr);
// }

// slasher(['burger', 'fries', 'shake'], 2);