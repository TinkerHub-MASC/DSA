
const BinarySearch = (arr:Array<number>,x:number):string=>{
  let start = 0
  let end:number = arr.length
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
console.log(BinarySearch([2,3,4,5,6,7,8,9,12],12))
