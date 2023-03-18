//
// Created by hhy on 2023/3/18.
//


#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    bool checkSubarraySum(vector<int>& nums, int k) {
        int r = 0;
        unordered_map<int, int> mp; // 使用map进行优化
        mp[0] = -1;
        for(int i = 0; i < nums.size(); i++) {
            r = (r + nums[i]) % k;
            auto it = mp.find(r);
            if (it == mp.end())
                mp[r] = i;
            else if(i - mp[r] >= 2)
                return true;
        }
        return false;
    }
};
int main() {
    Solution solution;
    vector<int> nums = {2,4,3};
    int k = 6;
    cout << solution.checkSubarraySum(nums, k);
    return 0;
}