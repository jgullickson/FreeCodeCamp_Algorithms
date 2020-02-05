/* 
Compare two 2d arrays of inventory items, merge matching items, and ouput an alphabetized updated inventory
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update
*/

function updateInventory(arr1, arr2) {
    let allItems = [...arr1, ...arr2];
    let updatedInv = [];
    for (let i = 0; allItems.length > 0; i++){
        let item = allItems.shift();
        let itemName = item[1];
        let hasMatch = false;
        for (let j = 0; j < allItems.length; j++){
            if (allItems[j][1] == itemName){
                hasMatch = true
                let quantity = (allItems[j][0] + item[0]);
                allItems.splice(j,1)
                updatedInv.push([quantity, itemName]);
                break;
            }
        }
        if (hasMatch == false){
            updatedInv.push(item)
        }
    }
    return updatedInv.sort((a,b)=>{
        if (a[1].toUpperCase() > b[1].toUpperCase()) {return 1}
        if (b[1].toUpperCase() > a[1].toUpperCase()) {return -1} 
        return 0
    });
}

//example
updateInventory(
    [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
    [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]
    )
/*expected output
    [
        [88, "Bowling Ball"], 
        [2, "Dirty Sock"], 
        [3, "Hair Pin"], 
        [3, "Half-Eaten Apple"], 
        [5, "Microphone"], 
        [7, "Toothpaste"]]
*/