// Element should be product of all elements except self .


function productExceptSelf(nums) {
    
    let product = [];

    for (let i=0; i<nums.length ; i++){
        let temp=1;
        if (nums.length<=1){
            return product;
        }

        for ( let j=0; j<nums.length; j++){
            if (i!==j){
                temp*=nums[j]
            }
        } product.push(temp)
    } return product;
}