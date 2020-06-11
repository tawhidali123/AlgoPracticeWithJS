// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

// singleNumber = (arr) => {
//   let frequency = {}

//   for(char of arr){
//     frequency[char] ? frequency[char] = frequency[char] + 1 : frequency[char] = 1
//   }
  
//   for(key in frequency){
//     if(frequency[key] === 1){
//       return key
//     }
//   }
// }

// singleNumber([2,2,1])
// singleNumber([4,1,2,1,2])



// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

// Given linked list -- head = [4,5,1,9], which looks like following:

// Example 1:

// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
// Example 2:

// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
 

// Note:

// The linked list will have at least two elements.
// All of the nodes' values will be unique.
// The given node will not be the tail and it will always be a valid node of the linked list.
// Do not return anything from your function.


class Node {
  constructor(val){
    this.val = val,
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null,
    this.tail = null,
    this.length = 0
  }

  delete(node){
    let val = this.head

    for(i = 0; i < this.length; i ++){
      if(val.next === node){
        let temp = val
        temp.next = val.next
        break
      }
      val = val.next
    }
  }
  
}