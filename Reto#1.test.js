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
  
  test('Test 1: return type. Expect \"number\"', () => {
    expect(typeof(findFirstRepeated([]))).toBe("number");
    expect(typeof(findFirstRepeated([1]))).toBe("number");
    expect(typeof(findFirstRepeated([1,2]))).toBe("number");
  });
  test('Test 2: findFirstRepeated([2, 1, 3, 5, 3, 2]). Expect 3', () => {
    expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3);
  });
  test('Test 3: findFirstRepeated([2, 2]). Expect 2', () => {
    expect(findFirstRepeated([2, 2])).toBe(2);
  });
  test('Test 4: findFirstRepeated([2, 4, 3, 5, 1]). Expect -1', () => {
    expect(findFirstRepeated([2, 4, 3, 5, 1])).toBe(-1);
  });
  test('Test 5: findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7]). Expect 1', () => {
    expect(findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])).toBe(1);
  });
  test('Test 6: findFirstRepeated([]). Expect -1', () => {
    expect(findFirstRepeated([])).toBe(-1);
  });
  test('Test 7: findFirstRepeated([10, 20, 30]). Expect -1', () => {
    expect(findFirstRepeated([10, 20, 30])).toBe(-1);
  });
  test('Test 8: findFirstRepeated([5, 1, 2, 3, 2, 5, 1]). Expect 2', () => {
    expect(findFirstRepeated([5, 1, 2, 3, 2, 5, 1])).toBe(2);
  });
  test('Test 9: findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7]). Expect 10', () => {
    expect(findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7])).toBe(10);
  });
  