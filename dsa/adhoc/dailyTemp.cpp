// 739. Daily Temperatures
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers temperatures represents the daily temperatures,
//  return an array answer such that answer[i] is the number of days you have 
//  to wait after the ith day to get a warmer temperature. If there is no 
//  future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]
 

// Constraints:

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100


#include<iostream>
#include<unordered_map>
#include<stack>
#include<vector>
#include<utility>
using namespace std;

vector<int> giveArray(vector<int>& v){
    
    stack<int>stk;
    vector<int>answer(v.size(),0);
    for(int i=v.size()-1;i>=0;i--){
        
        while(!stk.empty() && v[i]>=v[stk.top()]){
            stk.pop();
        }
        //[1,1,4,2,1,1,0,0]
        if(stk.empty())answer[i]=0;
        else{
            answer[i]=stk.top()-i; 
        }

        stk.push(i);
    }
    return answer;
}

int main(){

    vector<int> testCase={73,74,75,71,69,72,76,73};

    vector<int>answer=giveArray(testCase);
    for(int i=0;i<answer.size();i++){
        cout<<answer[i]<<" ";
    }



    return 0;
}