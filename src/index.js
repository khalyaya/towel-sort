
// You should implement your task here.

module.exports = function towelSort (matrix) {
   
    if (!matrix || matrix.length === 0 ) {
        return [];
    }

   var arrMerged = [];

 
       for (let i = 0; i < matrix.length; i++){
        var row = matrix[i];
        if(i % 2 !== 0){
        row.reverse();
      }
      arrMerged = arrMerged.concat(row);
    }
       return arrMerged;

}

