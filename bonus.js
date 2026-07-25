

function findKpositive(arr, k) {

    let current = 1;
    let i = 0;

    while (k > 0) {

        if (i < arr.length && arr[i] === current) {
            i++;
        } else {
            k--;
            if (k === 0) {
                return current;
            }
        }

        current++;
    }
}

arr =[2,3,4,7,11];
let k= 5;

console.log(findKpositive(arr,k));


    

