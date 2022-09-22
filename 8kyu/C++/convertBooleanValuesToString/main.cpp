/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

using namespace std;
#include <iostream>
#include <string>

// Function prototype
string bool_to_word(bool value);

int main() {

    cout << bool_to_word(false);

}

string bool_to_word(bool value) {
    return value == true ? "Yes" : "No";
}