const Founders = [
    {name: 'Steve Jobs', Legend: true, industry: 'tech' },
    {name: 'Elon Musk', Legend: true, industry: 'tech'},
    {name: 'Warren Buffet', Legend: true, industry: 'finance'},
    {name: 'Virat Kholi', Legend: true, industry: 'Cricket'},
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
