// Working with data collections
// Use Arrays to store ordered lists of data
// Use objects to store keyed lists of data
// Use conditional loginc to process data
// Use loops to Handle repetitive tasks.
// transform data

// // Part 1

const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"

const csvArray = csvData.split(",")
console.log(csvArray)

let cell1 = ""; cell2 = ""; cell3 = ""; cell4 = "";

let commas = 0

for (let i = 0; i < csvData.length; i++) {
    if(csvData[i] ==","){
    }else if(csvData[i]=='\n'){
        console.log(cell1, cell2, cell3, cell4)
        
        cell1 = cell2 = cell3 = cell4 = ""
        commas = 0

    } else{
        if(commas == 0){
            cell1 +=csvData[i];
        } else if (commas == 1){
            cell2 +=csvData[i];
        } else if (commas == 2){
            cell3 += csvData[i];
        } else{
            cell4 += csvData[i];
        }
    }
  if(csvData.length - 1 == i){
    console.log(cell1, cell2, cell3, cell4)
}  
}

// // Part 2
// Declare a variable that stores the number of columns in each row of data within the csv
// Instead of hardcoding four columns per row, expand your code to accpet any number of columns