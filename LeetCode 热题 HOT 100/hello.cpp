//
// Created by hhy on 2023/3/18.
//


#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        unordered_map<int, int> frontMp;
        unordered_map<int, int> ednMp;
        int r = 1;
        for(int i = 0; i < nums.size(); i++) {
            r = r * nums[i];
            frontMp.s
        }
    }
};

int main() {
    Solution solution;
    vector<int> nums = {2,4,3};
    solution.productExceptSelf(nums);
    return 0;
}