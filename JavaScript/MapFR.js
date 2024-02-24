const Founders = [
    {name: 'Steve Jobs', Legend: true, industry: 'tech', company: ["Apple Inc", "Pixel Studio"] },
    {name: 'Elon Musk', Legend: true, industry: 'tech', companu: ["Space X", "Tesla", "SolaeCity" ]},
    {name: 'Andrew Tate', Legend: true, industry: 'Markething', company: ["Top G"]},
    {name: 'Virat Kholi', Legend: true, industry: 'Cricket', company: ["Audi", "Vcap"]},
    // Just for fun purpose 
    // Founders jnon 

];

Founders.forEach((data) => {
    console.log(data.name);
    console.log(data.industry);
})


const filterData = Founders.filter((data) => {
    if( data.industry == 'tech' && data.name == 'Elon Musk'){
        return true;
    }
});
console.log(filterData);


const dataHolding = Founders.filter((data) => data.Legend == true && data.industry == 'tech').map((data) => {
    return data;
}) ;

console.log(dataHolding);


const numArr = [12, 34, 54, 23,54, 13, 42, 31];

numArr.reduce((accumulator, num) => {
    if(num >= 15){
        console.log(num);
    }
})
