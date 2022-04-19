const createPhoneNumber = (nums) => {
    let phone = '(xxx) xxx-xxxx';

    for (let i = 0; i < nums.length; i++) {
        phone = phone.replace('x', nums[i]);
    };
    return phone;
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,1]))
// arr.forEach(item => {
//     phone = phone.replace('x', item);
// });
// return phone;