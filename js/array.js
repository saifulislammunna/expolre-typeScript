"use strict";
const salary = 7500;
const friendSalaries = [7500, 12300, 17200, 9400, 8300];
const friends = ['sakib', 'rakib', 'Nakib', 'Dakib'];
friendSalaries[0] = 10500;
friendSalaries.push(13100);
/*
friendSalaries[4] = '9000';
friendSalaries.push('7300'); */
friends.push('Bakib');
friends[2] = 'Qakib';
// friends.push(45800);
let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}
