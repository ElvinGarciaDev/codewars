#include <string>
#include <iostream>
using namespace std;

// Prototype
string number_to_string(int num);

int main() {
    cout << number_to_string(5) << endl;
}

string number_to_string(int num) {
    return to_string(num);
}