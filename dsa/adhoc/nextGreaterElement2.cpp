//Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

//The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find //its next greater number. If it doesn't exist, return -1 for this number.


#include<iostream>
#include<stack>
#include<vector>
using namespace std;

vector<int> check(vector<int>&v){
	stack<int>stk;
	vector<int>answer;
	int greatestElementIndex=-1;
	bool changed=false;
	for(int i=v.size()-1;i>=0;i--){
		if(v[i]>v[v.size()-1] && !changed){
			greatestElementIndex=i;
			changed=true;
		}


		while(!stk.empty() && v[i]>stk.top()){
			stk.pop();
		}
		if(!stk.empty()){
			answer.push_back(-1);
		}else{
			answer.push_back(stk.top());
		}
		stk.push(i);
	}
	answer[answer.size()-1]=greatestElementIndex;
	return answer;
}

int main(){
	vector<int>v={1,2,1};
	vector<int>answer=check(v);
	for(int i=0;i<answer.size();i++){
	cout<<answer[i]<<" ";
	return 0;
}
}
