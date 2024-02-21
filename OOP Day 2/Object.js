const WebMatrixCoders = [{
    bestCoders: true,
    frameworks: ['React', 'Node.js', 'Next Js'],
    isHiring: true,
    remoteWork: true,
    nastedTwo: {
        nastedOne: {
            nasted: {
                name: 'Rehan',
            }
        }
    }
}, 
{
        experienceLevel: 'Expert',
        teamSize: 10,
        tool: ['VS Code', 'Git', 'Docker'],
        githubRepo: 'https://github.com/webmatrixcoders',

},
];

// de - structuring
const {bestCoders: Coders} = WebMatrixCoders[0]
console.log(Coders);


WebMatrixCoders[1].tool.forEach((data) => {
    console.log(data);
});

console.log(WebMatrixCoders[0].nastedTwo.nastedOne.nasted.name);


WebMatrixCoders[0].frameworks.forEach((data) => {
     console.log(data);
}) 

const {teamSize: sizeOTeam} = WebMatrixCoders[1];
console.log(sizeOTeam);

WebMatrixCoders[1].experienceLevel = 'Top';
console.log(WebMatrixCoders[1].experienceLevel);
console.log(WebMatrixCoders);


const user1 = {
    Profession: 'Developer',
    marvelFan: true,
    email: 'IronMan@avenger.com',
}

const user2 = {
    name: 'Tony Stark',
    age: 2000,
}

const user3 = {...user1, ...user2};
console.log(user3);
console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));
console.log(Object.hasOwnProperty('Thor'));