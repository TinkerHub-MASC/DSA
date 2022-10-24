
const BinarySearch = (arr,x)=>{
    let start = 0;
    let end = arr.length

    let mid=0
    while(start<end){
        mid=Math.floor((start + end)/2);
    if(arr[mid]==x){
        return `Element  ${x} Found in Postion ${mid},`
    }else if(arr[mid]>x){
        end=mid
    }else{
        start=mid+1
    }
}
return `Element ${x} Not Found`   
} 

console.log(BinarySearch([2,3,4,5,6,7],0))

//Binary search using recursion
/*
*
**
***
**
*/

function binarySearch(start,end,arr,x){
    
    if(start>end) {
        console.log(`Element ${x} Not Found`);
        return
    }
    let mid = Math.floor((start+end)/2)
       
    if(arr[mid]===x){
        
        console.log(`Element  ${x} Found in Postion ${mid},`);
    }else if(arr[mid]>x){
        binarySearch(start,mid,arr,x)
    }else{
        binarySearch(mid+1,end,arr,x)
    }
}
let start = 0
const arr = [1,2,3,4,5,6,7,8]
let end = arr.length
binarySearch(start,end,arr,8)
