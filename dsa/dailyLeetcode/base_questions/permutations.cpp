#include <iostream>
#include <vector>
using namespace std;


class Solution{
    public:

    void backtrack(vector<vector<int>> &result, vector<bool> used, vector<int>current,vector<int>&nums){
        if(current.size()==nums.size()){
            //all elements complete
            result.push_back(current);
            cout<<"printing the current array"<<endl;
            for(int i=0;i<current.size();i++){
                cout<<current[i]<<" ";
            }
            cout<<endl;
            return;
        }

        //check by looping the current version of the used as to what is pending
        for(int i=0;i<nums.size();i++){
            if(used[i]==false){
                current.push_back(nums[i]);
                used[i]=true;
                backtrack(result,used,current,nums);
                //to make unique combinations we add and remove and then add the next one in the next iteration of the loop
                 current.pop_back();
                used[i] = false;
            }
        }
    }

    vector<vector<int>>permutations(vector<int>&nums){
        vector<vector<int>>result;
        vector<int>currentArray;
        vector<bool>used(nums.size(), false);

        //backtrack based on what we have
        backtrack(result,used,currentArray,nums);
        
        return result;
    }
};


int main(){

    vector<int> nums = {1,2,3};

    Solution sol1;
    vector<vector<int>> answer = sol1.permutations(nums);
    cout<<"printing the result array"<<endl;
    for(int i=0;i<answer.size();i++){
        cout<<"array number: "<<i+1<<endl;
        for(int j=0;j<answer[i].size();j++){
            cout<<answer[i][j]<<" ";
        }
        cout<<endl;
    }

    return 0;
}