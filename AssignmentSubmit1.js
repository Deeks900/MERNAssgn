//**************Ques 1**********************
const readlineSync = require('readline-Sync')
let credits = readlineSync.question("Enter Your credits:");
if(credits >= 7500){
   console.log("Tera Leader");
}
else if(credits >= 6000 && credits < 7500){
    console.log("Gega Leader");
    
}
else if(credits >= 4500 && credits < 6000){
     console.log("Mega Leader");
}
else{
     console.log("Rising Star");
}

//*************************Ques 2*****************
let amount = readlineSync.question("Enter the amount");
let time = readlineSync.question("Enter time");
let rate  = readlineSync.question("Enter the rate");
function siInterest(){
    let ans = parseInt(amount)*parseInt(time)*parseInt(rate);
    return ans;
}
console.log("Interest is " + siInterest());

//****************Ques 3************************
let a = readlineSync.question("Enter the first number:");
let b = readlineSync.question("Enter the second number");
function GCD(a, b){
    while(a != b){
        if(a > b)
        a -= b;
        else
        b -= a;
    }
    return a;
}
console.log("GCD is: " + GCD(parseInt(a), parseInt(b)));

//**************************Ques 4**********************
let num = readlineSync.question("How many numbers you want?");
function printJump(num){
    let countNum = 1;
    process.stdout.write("" + 2 + "," + " ");
    let curr = 2;
    let jump = 1;
    while(countNum != num){
        let i = 0;
        while(i != jump){
            curr += 1;
            if(Math.trunc(curr % 2) == 0){
                i++;
            }  
        }
        curr += 1;
        while(Math.trunc(curr%2) != 0){
            curr++;
        }
        process.stdout.write("" + curr + "," + " "); 

        countNum++;
        jump += 2;
    }
}
printJump(parseInt(num));

//*********************Ques 5******************
function countDigits(num){
    let count = 0;
    while(num != 0){
        num = Math.trunc(num/10);
        count++;
    }
    return count;
}
let num = readlineSync.question("Enter the number:");
console.log("No of. Digits are: " + " " + countDigits(parseInt(num)));

//********************Ques 6************************
let num = readlineSync.question("Enter the number:");
function reverseNum(num){
    let revNum = 0;
   while(parseInt(num) != 0){
       let remain = Math.trunc(num%10);
       num = Math.trunc(num/10);
       revNum = revNum*10 + remain;
   }
   return revNum;   
}
console.log("Reverse of number is:" + " " + reverseNum(parseInt(num)));

//************************* Ques 7********************
//------a-------------
let i = 0;
while(i < 5){
    let j = 0;
    while(j < i+1){
        process.stdout.write("*");
        process.stdout.write("  ");
        j++;
    }
    process.stdout.write("\n");
    i++;
}

//---------b-------------
let i = 0;
while(i < 5){
    let j = 1;
    let k = 0;
    while(k < i+1){
        process.stdout.write(""+ j);
        process.stdout.write("  ");
        j++;
        k++;
    }
    i++;
    
    process.stdout.write("\n");

}

//---------------c----------------
let space = 5-1;
let stars = 1;
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= space; j++){
        process.stdout.write("   ");
    }
    let cvalue = 1;
    for(let k = 1; k <= stars; k++){
        process.stdout.write("" + cvalue);
        process.stdout.write("  ");
        if(k <= stars/2){
            cvalue += 1;
        }
        else{
            cvalue -= 1;
        }
        }
    process.stdout.write("\n");
    space -= 1;
    stars += 2;
}

//--------------d--------------
let space = 5-1;
let stars = 1;
let value= 1;
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= space; j++){
        process.stdout.write("   ");
    }
    let cvalue = value;
    for(let k = 1; k <= stars; k++){
        process.stdout.write("" + cvalue);
        process.stdout.write("  ");
        if(k <= stars/2){
            cvalue += 1;
        }
        else{
            cvalue -= 1;
        }
        }
    process.stdout.write("\n");
    space -= 1;
    stars += 2;
    value += 1;
}

//---------------e------------
//i^Cj+1 = (i^Cj * (i-j))/(j+1);
for(let i = 0; i < 6; i++){
    let value = 1;
    for(let j = 0; j <= i; j++){
        process.stdout.write(""+value+" ");
        value = (value*(i-j))/(j+1);
    }

    process.stdout.write("\n");

} 

//-----------f----------------
let space = 11/2;
let stars = 1;
for(let i = 1; i <= 11; i++){
    for(let j = 1; j <= space; j++){
        process.stdout.write(" ");
        process.stdout.write("  ");
    }
    for(let k = 1; k<= stars; k++){
        process.stdout.write("*");
        process.stdout.write("  ");
    }
    if(i <= 11/2){
        stars += 2;
        space -= 1;
    }
    else{
         stars -= 2;
         space += 1;
    }
    process.stdout.write("\n");

}


//----------------g------------
let space = 9-1;
let stars = 1;
for(let i = 1; i <= 9; i++){
    for(let j = 1; j<= stars; j++){
       process.stdout.write("*\t");
    }
    for(let k = 1; k <= space; k++){
        process.stdout.write("\t");
    }

    for(let z = 1; z <= stars; z++){
        process.stdout.write("*\t");
    }

    process.stdout.write("\n");
    if(i <= 9/2){
        space -= 2;
        stars += 1;
    }
    else{
        space += 2;
        stars -= 1;
    }
}

//-----------------h---------------
for(let i = 1; i <= 9; i++){
    process.stdout.write("*");
    process.stdout.write(" ");
}
process.stdout.write("\n");
let space = 1;
let stars = 9/2;
for(let i = 2; i <= 8; i++){
     for(let j = 1; j <= stars; j++){
         process.stdout.write("*");
         process.stdout.write(" ");
     }
     for(let k = 1; k <= space; k++){
         process.stdout.write(" ");
         process.stdout.write(" ");
     }
     for(let z = 1; z <= stars; z++){
         process.stdout.write("*");
         process.stdout.write(" ");
     }
     if(i <= 9/2){
         stars -= 1;
         space += 2;
     }
     else{
         stars += 1;
         space -= 2;

     }
     process.stdout.write("\n");

}
for(let i = 1; i <= 9; i++){
    process.stdout.write("*");
    process.stdout.write(" ");
}

//------------------i----------------
let n = 5;
let size = (2*n-1);
let end = size-1;
let start = 0;
let arr = new Array(size);
for(let i = 0; i < size; i++){
    arr[i] = new Array(size);
}
while(n != 0){
    for(let i = start; i <= end; i++){
        for(let j = start; j <= end; j++){
            if(i == start || i == end || j == start || j == end){
                arr[i][j] = n;
            }
        }
    }
    start += 1;
    end -= 1;
    n -= 1;
}

for(let z = 0; z < size; z++){
    for(let k = 0; k < size; k++){
        process.stdout.write(""+arr[z][k]);
        process.stdout.write(" ");
    }
    process.stdout.write("\n")
}
