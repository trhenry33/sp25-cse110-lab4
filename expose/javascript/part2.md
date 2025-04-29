1. Line 12 will print the number 2, because the var i is function wide, so it still retains 2 after the loop has ended on 2.
2. It will print the last discounted price calculated, 150 I believe, because var is a function wide variable and it will still be assigned to the last calculation of the loop after the loop finishes.
3. It will print the last finalPrice calculated, 150 I believe, because var is a function wide variable and it will still be assigned to the last finalPrice calculation of the loop after the loop finishes. Should be the same as discounted price since it doesn't need to be rounded.
4. It will return the discounted list [50, 100, 150]. This is because discounted has a function wide scope, and it is pushed full of the discounted versions of the orignal prices, so this is the result when returned.
5. This will error out, because i will not be defined in this scope, because it is outside of the loop code block.
6. This will error out, because disocuntedPrice will not be defined in this scope, because it is outside of the loop code block, in which is was orignally initialized.
7. This will output the last finalPrice, which is 150, because finalPrice was made in the scope of the function, so it will remain in the scope of the function after the loop, and be able to be sent to print. The loop is still able to edit it tho.
8. Same as above, discounted was made inside the scope of the function, so while it was edited in the loop, it will remain in scope after the loop, so it will return [50, 100, 150] like normal.
9. This will error out, because i is not in the scope of the whole function, just the loop, so i will not be assigned.
10. This line will work as intended and output 3, the length of the prices, because length was made in scope of the whole function, and it cannot be changed after that.
11. It will return [], because discounted is a constant variable, so it will not be changed by the loop, returning its initial value.
12. A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
13. A. '32'
    B. 1
    C. 3
    D. '3null'
    E. 4
    F. 0
    G. '3undefined'
    H. NaN
14. A. true
    B. false
    C. true
    D. false
    E. false
    F. true
15. The symbol == is like a loose comparison, which allows for types to be converted when comparing, but === doesn't allow this, and checks for value and type.
17. This function call we end up returning an array that is the orignal array just multiplied by 2. So to walk through, we call modify array with [1,2,3] and our function is actually doSomething. So as the modify array function runs through the loop of every array element, it sends each to doSomething which multiplies it by 2, and then this is added to the new array. So final result is [2,4,6].
19. 1, 4, 3, 2
