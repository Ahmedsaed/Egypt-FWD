#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

using namespace std;
double median(vector<int> numbers);
vector<int> slicing(vector<int>& arr, int X, int Y);

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
    
    double min = numbers[0];
    double q1 = median(slicing(numbers, 0, (numbers.size() - 1)/2));
    double q2 = median(numbers);
    double q3 = median(slicing(numbers, (numbers.size() - 1)/2, numbers.size()));
    double max = numbers[numbers.size() - 1];

    cout << "Min: " << min << endl;
    cout << "Q1: " << q1 << endl;
    cout << "Q2 (Median): " << q2 << endl;
    cout << "Q3: " << q3 << endl;
    cout << "Max: " << max << endl;
    cout << "Range: " << (max - min) << endl;
    cout << "Interquartile Range (IQR): " << (q3- q1) << endl;
}

double median(vector<int> numbers)
{
    if (numbers.size() % 2 == 1)
        return numbers[static_cast<int>((numbers.size() - 1)/2 + 0.5)];
    else 
        return (numbers[static_cast<int>((numbers.size() - 1)/2 + 0.5)] + numbers[static_cast<int>(numbers.size()/2 + 0.5)])/2.0;
}

vector<int> slicing(vector<int>& arr, int X, int Y)
{
 
    // Starting and Ending iterators
    auto start = arr.begin() + X;
    auto end = arr.begin() + Y + 1;
 
    // To store the sliced vector
    vector<int> result(Y - X + 1);
 
    // Copy vector using copy function()
    copy(start, end, result.begin());
 
    // Return the final sliced vector
    return result;
}