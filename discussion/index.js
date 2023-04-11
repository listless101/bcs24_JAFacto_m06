/*
    [Switch]
        - is a conditional statement that evaluates an expression and matches it to one of several possible cases
        - alternative for multiple 'if..else' statements

    syntax:
        switch(expression){
            case value1:
                - case represent possible match
                code to be executed if expression matches value
            break;
                - a point control is transferred to the end of a switch statement
            default:
                code to be executed if expression matches value
            break;
        }
*/

let color = 'red';

switch (color) {
    case 'red':
        console.log('The color is red.');
        break;
    case 'green':
        console.log('The color is green.');
        break;
    case 'blue':
        console.log('The color is blue.');
        break;
        default:
            console.log('The color is unknown');
}

function shirtColor(day, color){
   
    switch (day) {
        case 'Monday':
            color = 'Black'
            console.log(`Today is ${day}, Wear ${color}`)
            break;
        case 'Tuesday':
            color = 'Green'
            console.log(`Today is ${day}, Wear ${color}`)
            break;
        case 'Wednesday':
            color = 'Yellow'
            console.log(`Today is ${day}, Wear ${color}`)
            break;
        case 'Thursday':
            color = 'Red'
            console.log(`Today is ${day}, Wear ${color}`)
            break;
        case 'Friday':
            color = 'Violet'
            console.log(`Today is ${day}, Wear ${color}`)
            break;
        case 'Saturday':
            color = 'Blue'
            console.log(`Today is ${day}, Wear ${color}`)
            break;
        case 'Sunday':
            color = 'White'
            
            break;
        default:
            console.log(`Invalid Input. Enter a valid day of the week`)
            break;
    }
  
}

shirtColor('Monday')
shirtColor('Tuesday')
shirtColor('Wednesday')
shirtColor('Thursday')
shirtColor('Friday')
shirtColor('Saturday')
shirtColor('Sunday')
shirtColor('Sonday')

function roleChecker(role) {
    switch(role){
        case "Admin":
            console.log("Welcome Admin, to the Dashboard.");
            break;
        case "User":
            console.log("You are not authorize to view this page");
            break;
            // terminates the code block. If this was not added to your case then, the next case will run as well.
        case "Guest":
            console.log("Go to the registration page to register.");
            break;
        default:
            console.log("Invalid Role")
            // by default your switch ends with default case so therefore, even there is no break keyword in your default case, it will not run anything else
    }
}
roleChecker("Guest")

function gradeEvaluator(grade) {
    
    switch(true){
        case grade >= 90:
            console.log("A")
            break;
        case grade >= 80:
            console.log("B")
            break;
        case grade >= 71:
            console.log("C")
            break;
        case grade <= 70:
            console.log("F")
            break;
        default:
            console.log("Invalid")
    }
}
gradeEvaluator(90);
gradeEvaluator(85);
gradeEvaluator(69);
gradeEvaluator(71);

/* Ternary Operator
    - a shorthand way of writing if-else statement
    
    syntax:
    condition ? if-statement : else statement
*/

let price = 5000;


/* if (price > 1000) {
    console.log('Price is over 1000');
}else{
    console.log('Price is less than 1000');
} */

price > 1000 ? console.log('Price is over 1000') : console.log('Price is less than 1000')

let hero = 'Anpan Man';

hero === 'Vegeta' ? console.log('You are the prince of all saiyans') : console.log('You are not even royalty');

// else statement in ternary operation is required

let villain = 'Harvey Dent';
villain == 'Harvey Dent' ? console.log('You are supposed to be the chosen one') : console.log('Not quite villainous yet.')

// Ternary Operators are not meant for complex if-else trees. However, its advantage with our regular if else, is not that it's short but also, ternary operation implicitly returns or it can return without the return keyword

let robin = "Dick Grayson";
let currentRobin = "Tim Drake";

let isFirstRobin = currentRobin === robin ? true: false
console.log(isFirstRobin);

// else if with ternary operator

let a = 7;

a === 5 ? console.log('A') : (a === 10) ? console.log('A is 10'): console.log('A is not 5 or 10')