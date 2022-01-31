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
    cout << endl;
    
    if (numbers.size() % 2 == 1)
        cout << "Median: " << numbers[static_cast<int>((numbers.size() - 1)/2 + 0.5)];
    else 
        cout << "Median: " << (numbers[static_cast<int>((numbers.size() - 1)/2 + 0.5)] + numbers[static_cast<int>(numbers.size()/2 + 0.5)])/2.0;
}