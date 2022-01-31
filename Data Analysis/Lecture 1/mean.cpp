#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

using namespace std;

int main()
{
    vector<int> numbers;
    int n = 0;

    cout << "Enter Values: ", cin >> n;

    while (n != -1)
    {
        numbers.push_back(n);
        cin >> n;
    }
    
    sort(numbers.begin(), numbers.end());

    cout << "Sorted Values: ";
    for (auto x : numbers)
        cout << x << " ";

    cout << endl << "Mean: " << (accumulate(numbers.begin(), numbers.end(), 0) * 1.0)/numbers.size();  
}