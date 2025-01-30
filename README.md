# Uncaught TypeError: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error: 'Uncaught TypeError: Cannot read properties of null (reading 'length'). This error occurs when you try to access the 'length' property of a variable that is null or undefined.  The example shows how to handle this potential error gracefully.

## Bug

The `foo` function attempts to access `x.length` without first checking if `x` is null or undefined. If `x` is null, this will throw a TypeError.

## Solution

The solution involves adding a check to handle the case where `x` is null before attempting to access `x.length`.  This can be done by adding a simple `if` statement that returns a default value when `x` is null.
