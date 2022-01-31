#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
#include <cmath>

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

    double mean = (accumulate(numbers.begin(), numbers.end(), 0) * 1.0)/numbers.size();

    cout << endl << "Mean: " << mean << endl;

    double variance = 0;

    for (auto x : numbers)
    {
        variance += pow((x - mean), 2);
    }
    
    variance /= numbers.size();
    
    cout << "Variance: " << variance << endl;

    cout << "Standard Deviation: " << sqrt(variance);
}