// Hierarchial Data Structure
const data = [
    {name: "michael", age: 31 }
];
  
const stratify = d3.stratify()
    .id(d => d.name)
    .parentId(d => d.parent);
  
//console.log(stratify(data));

export { data }