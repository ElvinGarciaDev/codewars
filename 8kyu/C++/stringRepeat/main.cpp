/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

#include <string>
#include <iostream>
using namespace std;

// Function prototype
string repeat_str(size_t repeat, const std::string& str);

int main() {

    cout << repeat_str(5,"e") << endl;
}

string repeat_str(size_t repeat, const std::string& str) {
    string text = "";

    for (int i = 0; i < repeat; i++) {
        text += str;
    }

    return text;
}