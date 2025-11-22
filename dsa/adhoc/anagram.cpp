#include <iostream>
#include <unordered_map>
#include <string>
#include <array>
using namespace std;


bool checkAnagram(string &s1, string &s2){
        if(s1.length()!=s2.length())return false;
        array<int,26>a={};
        int pointer=0;
        while(pointer<s1.length()){
            a[s1[pointer]-'a']++;
            a[s2[pointer]-'a']--;
            pointer++;
        }
        for(int i=0;i<26;i++){
            if(a[i]>0)return false;
        }
        return true;
}


int main(){
    string s1="anagram";
    string s2="nagaram";
    string s3="rat";
    string s4="car";
    if(checkAnagram(s1, s2)){
        cout<<"yes it is an anagram of the other string"<<endl;
    }else{
        cout<<"nope not an anagram";
    }
    if(checkAnagram(s3, s4)){
        cout<<"yes it is an anagram of the other string"<<endl;
    }else{
        cout<<"nope not an anagram";
    }
    return 0;
}