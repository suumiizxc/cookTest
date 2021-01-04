const arr = [23, 46 ,55];

let myFunc = a =>{
    console.log("too : " + a);
}

const arr2 = [...arr, 44,55];

myFunc(arr2);