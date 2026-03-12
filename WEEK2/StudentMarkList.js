//Student mark list
const marks = [78, 92, 35, 88, 40, 67]

//filter() marks ≥ 40 (pass marks)
const filterMarks=marks.filter(mark=>mark>=40)
console.log(filterMarks)

//map() to add 5 grace marks to each student
const map=marks.map(mark=>mark+5)
console.log(map)

//reduce() to find highest mark
const highest=marks.reduce((max,mark)=>mark>max?mark:max)
console.log(highest)

//find() first mark below 40
const find=marks.find(mark=>mark<40)
console.log(find)

//findIndex() of mark 92
const index=marks.findIndex(mark=>mark===92)
console.log(index)