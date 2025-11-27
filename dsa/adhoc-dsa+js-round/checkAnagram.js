// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false


let s="anagram"
let t="nagaram"

if(checkAnagram(s,t)){
    console.log("they are anagrams");
}else{
    console.log("they are not anagrams");
}

