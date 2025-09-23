//Task 1
var userName = ' Azzie ';
let userAge = 18
const userID = ' u38379130 ';

console.log('This displays the name, age and ID of this user: ' + userName + userAge + userID);

//Task 2

 userName = ' Benny ';
 userAge = 30
 //userID = ' u198272932 ';

 console.log('This displays the name, age and ID of this user: ' + userName + userAge + userID);

 //Task 3

    let score = 95.5;
    let courseName = "JavaScript Basics";
    let isEnrolled = true;
    let grades = [90, 95, 88, 92];
    let student = {name: "Your Name", age: "Your Age", course:"CPAN"};

//Task 4 
        console.log('Addition: ' + (score + userAge));
        console.log('Subtraction: ' + (score - userAge));
        console.log('Multiplication: ' + (score * 2));
        console.log('Divison: ' + (score / userAge));

//Task 5

if(userAge == 20 )
    {
        let yesorno = true;
        console.log(yesorno)
    }
        else if(userAge === 35)
            {
                console.log(yesorno + ' second')
            }
        else 
        {
            yesorno = false
            console.log(yesorno)
        }

if(score < 100)
     {
        console.log('A+')
     }
        else if (score >= 75)
        {
            console.log('B')
        }
            else
            {
                console.log('Fail')
            }

if(isEnrolled = true)
        {
            console.log('You are enrolled')
        }
            else
            {
                console.log('You are not enrolled')
            }

if (userAge >= 18)
    {
        console.log('You are invited')
    }
        else 
        {
            console.log('You are not invited')
        }

    switch (courseName) {
        case 'JavaScript Basics':
            console.log(' You are in Java basics!')
            break;
            case 'Python Basics':
            console.log(' You are in Python basics!')
            break;
            case 'HTML Basics':
            console.log(' You are in HTML basics!')
            break;

        default:
            console.log('Error, invaild input.')
            break;
    }