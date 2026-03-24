function findSum(...a){
    sum=0
    for(let i of a){
        sum=sum+i
    }
    console.log(sum)
}
findSum(13,89,99,67,56)




function findsum(...a){
    let sum=a.reduce((acc,ele)=>acc+ele)
    console.log(sum)
}
findsum(13,89,99,67,56)