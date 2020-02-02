function sym(...args) {
    let workSpace = [...args];
    workSpace.map((subArr,ind,parArr)=>{
      if (parArr[ind+1]){
        let stage = [];
        subArr.map(num=>{
          if (!parArr[ind+1].includes(num)){
            stage.push(num)
          } else if (parArr[ind+1].includes(num)){
            parArr[ind+1] = parArr[ind+1].filter(e => e != num)
          }
          stage.map(num=>parArr[ind+1].push(num))
          parArr[ind+1] = parArr[ind+1].filter((e,i,a)=>a.indexOf(e)===i)
        })
      }
    })
    return workSpace.pop()
  }
  
  //should return [2,3,4,6,7]
  console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));

/*

https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
 
*/