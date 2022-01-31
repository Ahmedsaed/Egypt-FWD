# Data Analysis - Lecture 1

## Types of data
- Quantitative:
    - Contiguous: Height, Age, Income
    - Discrete: number of pages, dogs
- Categorical:
    - Ordinal: Letter grade, survey rating
    - Nominal: Gender, Breakfast item

## Quantitative vs. Categorical
Some of these can be a bit tricky - notice even though zip codes are a number, they aren’t really a quantitative variable. If we add two zip codes together, we do not obtain any useful information from this new value. Therefore, this is a categorical variable.

Height, Age, the Number of Pages in a Book and Annual Income all take on values that we can add, subtract and perform other operations with to gain useful insight. Hence, these are quantitative.

Gender, Letter Grade, Breakfast Type, Marital Status, and Zip Code can be thought of as labels for a group of items or individuals. Hence, these are categorical.

## Continuous vs. Discrete
To consider if we have continuous or discrete data, we should see if we can split our data into smaller and smaller units. Consider time - we could measure an event in years, months, days, hours, minutes, or seconds, and even at seconds we know there are smaller units we could measure time in. Therefore, we know this data type is continuous. Height, age, and income are all examples of continuous data. Alternatively, the number of pages in a book, dogs I count outside a coffee shop, or trees in a yard are discrete data. We would not want to split our dogs in half.

## Ordinal vs. Nominal
In looking at categorical variables, we found Gender, Marital Status, Zip Code and your Breakfast items are nominal variables where there is no order ranking associated with this type of data. Whether you ate cereal, toast, eggs, or only coffee for breakfast; there is no rank ordering associated with your breakfast.

Alternatively, the Letter Grade or Survey Ratings have a rank ordering associated with it, as ordinal data. If you receive an A, this is higher than an A-. An A- is ranked higher than a B+, and so on... Ordinal variables frequently occur on rating scales from very poor to very good. In many cases we turn these ordinal variables into numbers, as we can more easily analyze them, but more on this later!

---

## Quantitative Variables
There are four main aspects used to describe quantitative variables:

- Measures of Center
- Measures of Spread
- Shape of the Distribution
- Outliers

## Measures of Center
Calculating measures of Center

- Medians
- Modes
- Means

## Measures of Spread
Calculating measures of Spread

- Range
- Interquartile Range
- Standard Deviation
- Variance

## Shape
The distribution of our data is frequently associated with one of the three shapes:

1. Right-skewed
1. Left-skewed
1. Symmetric (frequently normally distributed)

Depending on the shape associated with our dataset, certain measures of center or spread may be better for summarizing our dataset.

When we have data that follows a normal distribution, we can completely understand our dataset using the mean and standard deviation.

However, if our dataset is skewed, the 5 number summary (and measures of center associated with it) might be better to summarize our dataset.

## Outliers  
Outliers have a larger influence on measures like the mean than on measures like the median. We learned that we should work with outliers on a situation by situation basis. Common techniques include:

1. At least note they exist and the impact on summary statistics.
1. If typo - remove or fix
1. Understand why they exist, and the impact on questions we are trying to answer about our data.
1. Reporting the 5 number summary values is often a better indication than measures like the mean and standard deviation when we have outliers.
1. Be careful in reporting. Know how to ask the right questions.

## Histograms and Box Plots 
Use histograms and box plots to visualize our quantitative data. Identifying outliers and the shape associated with the distribution of our data are easier when using a visual as opposed to using summary statistics.

---

## Descriptive vs. Inferential Statistics

## Descriptive Statistics
Descriptive statistics is about describing our collected data using the measures discussed throughout this lesson: measures of center, measures of spread, shape of our distribution, and outliers. We can also use plots of our data to gain a better understanding.

## Inferential Statistics
Inferential Statistics is about using our collected data to draw conclusions to a larger population. Performing inferential statistics well requires that we take a sample that accurately represents our population of interest.

A common way to collect data is via a survey. However, surveys may be extremely biased depending on the types of questions that are asked, and the way the questions are asked. This is a topic you should think about when tackling the first project.

We looked at specific examples that allowed us to identify the

    Population - our entire group of interest.  
    Parameter - numeric summary about a population  
    Sample - subset of the population  
    Statistic - numeric summary about a sample  