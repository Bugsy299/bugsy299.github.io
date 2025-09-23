
// Task 1
//1.
let x = 1;

    if(x == 0)
        {
            console.log("This is a zero");
        }
            else if(x <= 0)
            {
                console.log("This is a negative number");
            }
                else if ( x >= 0)
                    {
                        console.log("This is a postive number");
                    }

//2.
let grade = 80;
    
    switch (grade) {
        case 90:
            console.log("A")
                break;
        case 80:
            console.log("B")
                break;
        case 70:
            console.log("C")
                break;
        case 60:
            console.log("D")
                break;
        case 50:
            console.log("F")
        default:
            console.log("Invaild input error")
            break;
    }

//Task 2 
//1.
let num = 0;
    while (num <= 9)
        {
            num++;
            console.log(num);
        }

//2.
let num2 = 5;
let multi = 0;
    do 
        {
            multi++
            console.log('5 x ' + multi + '= ' + (num2 * multi));
        } 
    while (multi <= 2);

//3.
let colors = ['Red', 'Yellow', 'Orange', 'Blue', 'Purple', 'Black'];
        for(let i = 0; i < colors.length; i++)
            {
                console.log(colors[i]);
            }
//Task 3 
//1. 
let person = {Property: '123 Maple Street', Value: '$100,000'};

    for(const id_1 in person)
        {
            console.log(id_1+ ": " + person[id_1]);
        }
//2.
let grades2 = [90,82,63,58,50,95,89,67]
        for(const logs of grades2)
            {
                console.log( "%" + logs);
            }

//Task 4 
//1.

for(let count = 1; count <= 10; count++)
    {
        console.log(count);
            if(count == 5)
                {
                    break;
                }
    }
//2.
let ran_nums = [46, 56, 64, 26, 68, 37, 9]
    for(const element of ran_nums)
        {
            if(element% 2 == 1) continue;
                console.log(element);
        }