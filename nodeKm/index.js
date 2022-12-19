const fs = require ('fs');

//fs.mkdirSync('kampan');

//fs.writeFileSync("kampan/bio.txt", "I am a youtuber");

//fs.appendFileSync("kampan/bio.txt", "I play different games on youtube");

const data = fs.readFileSync("kampan/bio.txt", "utf-8");
console.log(data);

