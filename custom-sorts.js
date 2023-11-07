let  ageSort = (users) => users.sort((a, b) =>  a.age - b.age) 

//  for(let user of users) {
//   console.log(user.age)

//  }
 



function oddEvenSort(arr) {
  // Your code here
  // let left = 0;
  // let right = arr.length - 1

  return arr.sort((a, b) => {
    if((a + b) % 2 === 0) { // if the sum of a + b is even 
      return a - b 
    } else if((a % 2 === 0)) {
      return 1 // a should come after the b element 
    } return -1 // if not a should come before b 
  })



}

function validAnagrams(s, t) {
  // Your code here
  if(s.length !== t.length) {
    return false  
  }

  let firstWord = s.split('').sort().join('') 
  let secondWord = t.split('').sort().join('')
  
  return firstWord === secondWord

}

function reverseBaseSort(arr) {
  // Your code here
return arr.sort((a, b) => {
  const baseA = Math.floor(Math.log10(a))
  const baseB = Math.floor(Math.log10(b))

  console.log(baseA, baseB)
  if(baseA === baseB) {
    return a - b
  } else {
    return baseB - baseA
  }
})
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];