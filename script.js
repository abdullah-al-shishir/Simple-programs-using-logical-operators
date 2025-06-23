

let marks = prompt('Enter Marks : ');


if (marks >100 )
    console.log('invalid');
else if (marks >= 80 && marks <= 100)
    console.log('A+');
else if (marks >= 75 && marks <=79)
    console.log('A');
else if (marks >= 70 && marks <=74)
    console.log('A-');
else if (marks >= 65 && marks <=69)
    console.log('B+');
else if (marks >= 60 && marks <=64)
    console.log('B');
else if (marks >= 55 && marks <=59)
    console.log('B-');
else if (marks >= 50 && marks <=54)
    console.log('C+');
else if (marks >= 45 && marks <=49)
    console.log('C');
else if (marks >= 40 && marks <=44)
    console.log('D');
else
console.log('Fail');
