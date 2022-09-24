/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

#include <iostream>
#include <vector>
using namespace std;

//Function prototype
int findSmallest(vector <int> list);

int main() {
    
}

int findSmallest(vector <int> list) {
    int smallest = list[0]; // Make the first element the smallest

    for (int i = 1; i < list.size(); i++) {
        if (list[i] < smallest) {
            smallest = list[i];
        }
    }

    return smallest;
}