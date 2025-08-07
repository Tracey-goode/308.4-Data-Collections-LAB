// Working with data collections
// Use Arrays to store ordered lists of data
// Use objects to store keyed lists of data
// Use conditional loginc to process data
// Use loops to Handle repetitive tasks.
// transform data

// // Part 1

// const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"

// const csvArray = csvData.split(",")
// console.log(csvArray)

// let cell1 = ""; cell2 = ""; cell3 = ""; cell4 = "";

// let commas = 0

// for (let i = 0; i < csvData.length; i++) {
//     if(csvData[i] ==","){
//     }else if(csvData[i]=='\n'){
//         console.log(cell1, cell2, cell3, cell4)
        
//         cell1 = cell2 = cell3 = cell4 = ""
//         commas = 0

//     } else{
//         if(commas == 0){
//             cell1 +=csvData[i];
//         } else if (commas == 1){
//             cell2 +=csvData[i];
//         } else if (commas == 2){
//             cell3 += csvData[i];
//         } else{
//             cell4 += csvData[i];
//         }
//     }
//   if(csvData.length - 1 == i){
//     console.log(cell1, cell2, cell3, cell4)
// }  
// }

// // Part 2
// Declare a variable that stores the number of columns in each row of data within the csv
// Instead of hardcoding four columns per row, expand your code to accept any number of columns.


// const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"

// const rows = csvData.split('\n')

// const headers = rows[0].split(',');
// const numColumns = headers.length;

// const data = []

// for( let row of rows){
//     const cells = [];
//     let currentCell = '';
//     let commaCount = 0;

//     for (let i = 0; i < row.length; i++){
//         const char= row[i];
//         if (char === ','){
//             cells.push(currentCell);
//             currentCell = '';
//             commaCount++;
//         } else{
//             currentCell += char;
//         }
//     }
//     cells.push(currentCell);

//     data.push(cells)
// }
// console.log(data)

// [
//   [ 'ID', 'Name', 'Occupation', 'Age' ],
//   [ '42', 'Bruce', 'Knight', '41' ],
//   [ '57', 'Bob', 'Fry Cook', '19' ],
//   [ '63', 'Blaine', 'Quiz Master', '58' ],
//   [ '98', 'Bill', "Doctor's Assistant", '26' ]
// ]


//////////////////PART3//////////////////////////////

// const csvData = [
//   [ 'ID', 'Name', 'Occupation', 'Age' ],
//   [ '42', 'Bruce', 'Knight', '41' ],
//   [ '57', 'Bob', 'Fry Cook', '19' ],
//   [ '63', 'Blaine', 'Quiz Master', '58' ],
//   [ '98', 'Bill', "Doctor's Assistant", '26' ]
// ]

// const header = csvData[0]
// const rows = csvData.slice(1)

// const objectArray = rows.map(row => {
//     const obj = {};
//     for(let i = 0; i < header.length; i++) {
//         obj[header[i]] = row[i]
        
//     } 
//     return obj;
// })
// console.log(objectArray)

// [
//   { ID: '42', Name: 'Bruce', Occupation: 'Knight', Age: '41' },
//   { ID: '57', Name: 'Bob', Occupation: 'Fry Cook', Age: '19' },
//   { ID: '63', Name: 'Blaine', Occupation: 'Quiz Master', Age: '58' },
//   {
//     ID: '98',
//     Name: 'Bill',
//     Occupation: "Doctor's Assistant",
//     Age: '26'
//   }
// ]

////////Couldnt figure this out!!!!!///////////

/////////////////Part 4////////////////

// const csvData = [
//   [ 'ID', 'Name', 'Occupation', 'Age' ],
//   [ '42', 'Bruce', 'Knight', '41' ],
//   [ '57', 'Bob', 'Fry Cook', '19' ],
//   [ '63', 'Blaine', 'Quiz Master', '58' ],
//   [ '98', 'Bill', "Doctor's Assistant", '26' ]
// ]

// const header = csvData[0]
// const rows = csvData.slice(1)

// const objectArray = rows.map(row => {
//     const obj = {};
//     for(let i = 0; i < header.length; i++) {
//         obj[header[i]] = row[i]
//     } 
//     return obj;
    
// })
    
// console.log(objectArray)

// objectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
// objectArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" } )

// console.log(objectArray)

// [
//   { ID: '42', Name: 'Bruce', Occupation: 'Knight', Age: '41' },
//   { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
//   { ID: '57', Name: 'Bob', Occupation: 'Fry Cook', Age: '19' },
//   { ID: '63', Name: 'Blaine', Occupation: 'Quiz Master', Age: '58' },
//   {
//     ID: '98',
//     Name: 'Bill',
//     Occupation: "Doctor's Assistant",
//     Age: '26'
//   },
//   { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
]