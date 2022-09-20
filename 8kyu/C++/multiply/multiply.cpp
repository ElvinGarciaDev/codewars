/*
This code does not execute properly. Try to figure out why.

function multiply(a, b){
  a * b
}

*/

#include <iostream>
using namespace std;

// Function prototypes
int multiply(int a, int b);

int main() 
{

    int a = multiply(2,5);
    cout << a << endl;
}

int multiply(int a, int b) {
    return a * b;
}