function getDiagonals(arr) {
    
    let primaryDiagonal = [];
    let secondaryDiagonal = [];

    for (let i = 0 ; i<arr.length ; i++){
        
        primaryDiagonal.push(arr[i][i]);
        secondaryDiagonal.push(arr[i][arr.length-1-i])
    } 

    let finalarray = [];
    finalarray.push(primaryDiagonal);
    finalarray.push(secondaryDiagonal);

    return finalarray;
}

// gives the array of both the diagonals of 2D matrix .