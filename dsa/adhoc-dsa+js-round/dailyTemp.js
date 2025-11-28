


function dailyTemp(arr){
    const stack=[];
    const result = new Array(arr.length).fill(0);
    for(let i=0;i<arr.length;i++){
        while(stack.length>0 && arr[i]>arr[stack[stack.length-1]]){
            const index=stack.pop();
            result[index]=i-index;
        }
        stack.push(i);
    }
    return result;
}
function dailyTemp2(arr){
    const stack= [];
    const result = new Array(arr.length).fill(0);
    for(let i=arr.length-1;i>=0;i--){
        while(stack.length && arr[i]>=arr[stack[stack.length-1]]){
            stack.pop();
        }
        if(stack.length>0){
            result[i]=stack[stack.length-1]-i;
        }
        stack.push(i);
    }
    return result;
}







const temperatures = [73,74,75,71,69,72,76,73];
console.log(dailyTemp(temperatures))
console.log(dailyTemp2(temperatures))