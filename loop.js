let arr = [10, 5, 3, 6, 15, 2]

let dict = {a : 20, b : 50, c : 100};

for(let i of arr){
    console.log(i);
}

for (const key in dict){
    console.log(`key = ${key} and value = ${dict[key]}`);
}

for (const arrValue of arr){
    console.log(`array value = ${arrValue}`);
    for (const key in dict){
        console.log(`dict value = ${dict[key]}`);
    }
}
