const array = [3, 1, 6, 4, 2, 7, 5, 1];

const findDuplicate = (array) => {
    let tortoise = array[0];
    console.log('tortoise: ', tortoise);
    let hare = array[0];
    console.log('hare: ', hare);
    while (true) {
        tortoise = array[tortoise];
        console.log('tortoise---2: ', tortoise);
        hare = array[array[hare]];
        console.log('hare---2: ', hare);
        if (tortoise === hare) {
            break;
        }
    }
    let pointer1 = array[0];
    console.log('pointer1: ', pointer1);
    let pointer2 = tortoise;
    console.log('pointer2: ', pointer2);
    while (pointer1 !== pointer2) {
        pointer1 = array[pointer1];
    }
    return pointer1;
};

const duplicatedNum = findDuplicate(array);
console.log('duplicatedNum: ', duplicatedNum);
