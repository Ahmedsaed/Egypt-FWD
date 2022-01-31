#include <iostream>
#include <vector>
#include <algorithm>
#include <map>
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

    map<int, int>::iterator itr;
    map<int, int> frequencyCount;
    int max = 0;

    for (auto x : numbers)
        frequencyCount[x]++;

    for (itr = frequencyCount.begin(); itr != frequencyCount.end(); ++itr) 
        if (itr->second > max) max = itr->second;

    for (itr = frequencyCount.begin(); itr != frequencyCount.end(); ++itr)
        if (itr->second == max) cout << "Mode: " << itr->first << endl;  
}