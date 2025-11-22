/*
Problem: Next Nearest Greater Element Position

Given an array A of size N, for each element A[i], find the 1-based index of the
nearest element to the right that is strictly greater than A[i].
If no such element exists, output -1 for that position.

Example:
Input:  A = [4, 5, 2, 25]
Output: [2, -1, 4, -1]

Constraints:
1 <= N <= 200000
-1e9 <= A[i] <= 1e9

Your task:
Print an array ans[] of size N where ans[i] is the 1-based index of the nearest
greater element to the right of A[i], or -1.
*/


#include <iostream>
#include<vector>
#include<stack>
#include<algorithm>
#include<unordered_map>
using namespace std;

vector<int> nextGreaterElement(vector<int>&v){
    vector<int>answer;
    stack<pair<int,int>>stk;
    for(int i=v.size()-1;i>=0;i--){
        
        while(!stk.empty() && stk.top().first<v[i]){
                stk.pop();
            }
        if(!stk.empty()){
            answer.push_back(stk.top().second);
        }else{
            answer.push_back(-1);
        }
        stk.push({v[i],i+1});
    }
    reverse(answer.begin(),answer.end());
    return answer;
}

int main(){
    vector<int>v = {4, 5, 2, 25};
    vector<int>ans=nextGreaterElement(v);
    for(int i=0;i<ans.size();i++){
        cout<<ans[i]<<" ";
    }
    return 0;
}