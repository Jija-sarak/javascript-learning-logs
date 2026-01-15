# Challenge 1: Custom Data Processor

We want to create a higher-order function that processes arrays using different operations (callbacks). To make it more interesting, the higher-order function will include an additional rule:
- If the array has more than 5 elements, apply the callback function normally.
- If the array has 5 or fewer elements, simply return the array unchanged.

## Your Task:

### Create a higher-order function "processData(data, operationFn)" that:
- Takes "data" (an array of numbers).
- Takes "operationFn" (a callback function to transform the data).
- If "data.length > 5", applies "operationFn" to the data and returns the result.
- If "data.length <= 5", returns the original array.

### Write at least 3 callback functions to use with "processData":
- squareNumbers → returns a new array with all numbers squared.
- filterEvens → returns only the even numbers.
- sumNumbers → returns the sum of all numbers.

Try using "processData" with two arrays: one that has more than 5 numbers, and one that has 5 or fewer numbers. Use it with each of the different callback functions to see the results.

