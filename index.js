// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

singleNumber = (arr) => {
  let frequency = {}

  for(char of arr){
    frequency[char] ? frequency[char] = frequency[char] + 1 : frequency[char] = 1
  }
  
  for(key in frequency){
    if(frequency[key] === 1){
      return key
    }
  }
}

// singleNumber([2,2,1])
singleNumber([4,1,2,1,2])