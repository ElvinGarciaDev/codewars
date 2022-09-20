
#include <iostream>
#include <string> // need to include string whenever you want to use it
using namespace std;

// Function prototype
string evenOrOdd(int number);


int main() {
}

string evenOrOdd(int number) {
    if(number % 2 == 0) {
        return "Even";
    }else {
        return "Odd";
    }
}