// This is the start of a function definition, it has the name of "myFunction", and has two parameters to hold incoming data, "option1" and "option2".
function myFunction(option, option2) {

    // Using let statement to delare product as a variable that is limited to the scope of a block statement. And product takes the data from option and option2, and multiply them.
    let product = option * option2;

    // Print a message of the result of the product (product = option * option2).
    console.log(product);

    // Print in String which "The value of the option parameter is" + "option", as combined together. option is the data which 1st argument holds.
    console.log("The value of the option parameter is " + option);

    // If the condition is true here, execute the code block inside, where option is exactly equal to 0 with the same datatype matching with option/matching by both value and date type.
    if (option === 0) {
        
        // If option is exactly equal to 0, return/print the message "Everything is good!".
        return "Everything is good!";
    // If previous statement is false, execute the else if statment here. In other words, if option is not equal to 0, run and execute the else if statment here where option is exactly equal to 1, execute the code block inside.
    } else if (option === 1) {
        
        // If option is exactly equal to 1, return/print the message "An error happended!".
        return "An error happened!";
    // If previous statements are false, execute the else if statement here. In other words, if option is not equal to 0 and 1, run and execute the else if statement here which option is exactly equal to -1, execute the code block inside.
    } else if (option === -1) {
        
        // If option is exactly equal to -1, return/print the message "Everything is bad!".
        return "Everything is bad!";
    }

}

// Using let statement to delare result as a variable that is limited to the scope of a block statement; 1 and 11 are the two arguments, result holds the product of these 2 numbers.
let result = myFunction(1, 11);
// Using let statement to delare result2 as a variable that is limited to the scope of a block statement; 2 and 200 are the two arguments, result2 holds the product of these 2 numbers.
let result2 = myFunction(2, 200);

// && is a logical AND operator. The if statement is true ONLY if it meets with the explicit condition here, in which, if result is exactly euqal to the String "An error happened" AND result2 is exactly equal to the String "An error happened". (Based on the 1st arguments given in result and result2, option in result is 1 and it should hold the data "An error happend!" while option in result2 is 2 and it should hold the data "undefined"; therefore, they do not meet the explicit condition as listed in this if statement.)
if ( result === "An error happened" && result2 === "An error happened") {

    // execute the code block here which print the message "Catastophic failure."" (In this case here, the console.log should Not show up.)
    console.log("Catastrophic failure.");

}
