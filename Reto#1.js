function findFirstRepeated(gifts) {
    let tempArray=[]
    for(let i=0; gifts.length>i; i++){
        for(let j=0; tempArray.length>j;j++){
          if(gifts[i]===tempArray[j]){
            return gifts[i]
          }
        }
        tempArray.push(gifts[i])
      }
      return -1
    }
  