var resume = {
  "name": "Isaac",
  "email": "isaac.equine@gmail.com",
  "phone": "123-456-7890",
  "address": "xxx, yyyyy, zzzzz",
  "summary": "software developer with expertise in JavaScript, HTML, and CSS. Proficient in building web applications using modern frameworks like React and Angular.",
  
  "education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "school": "University XYZ",
      "location": "City, State",
      "dates": "2014 - 2018"
    }
  ],
  "skills": [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Node.js"
  ]
};

// for in loop

for (let key in resume) {
  console.log(`${key}: ${JSON.stringify(resume[key])}`);
}

// for of loop
for (let skill of resume.skills) {
  console.log(`Skill: ${skill}`);
}

// for loop

for (let i = 0; i < resume.education.length; i++) {
  console.log(`Education ${i + 1}: ${JSON.stringify(resume.education[i])}`);
}

// for each

resume.education.forEach((educationEntry, index) => {
  console.log(`Education ${index + 1}: ${JSON.stringify(educationEntry)}`);
});


