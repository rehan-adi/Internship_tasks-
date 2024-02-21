const WebMatrixCoders = [{
    bestCoders: true,
    frameworks: ['React', 'Node.js', 'Next Js'],
    isHiring: true,
    remoteWork: true,
}, 
{
        experienceLevel: 'Expert',
        teamSize: 10,
        tool: ['VS Code', 'Git', 'Docker'],
        githubRepo: 'https://github.com/webmatrixcoders',

},
];


console.log(WebMatrixCoders[0].bestCoders);

WebMatrixCoders[1].tool.forEach((data) => {
    console.log(data);
})


WebMatrixCoders[0].frameworks.forEach((data) => {
     console.log(data);
}) 

WebMatrixCoders[1].experienceLevel = 'Top';
console.log(WebMatrixCoders[1].experienceLevel);
console.log(WebMatrixCoders);