import { data } from "./data.js";  

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");
    console.log("Data from data.js:", data);

    const personalSection = document.getElementById("personal-info");
    const workEducationSection = document.getElementById("work-education");
    const hobbiesSection = document.getElementById("hobbies");
    const techStackSection = document.querySelector(".tech-grid");

    // Load Personal Info 
    if (personalSection) {
        console.log("Loading Personal Info...");
        const { name, dateOfBirth, education, location } = data.personal;

        personalSection.innerHTML = `
            <img src="img/poza_cv.jpg" alt="Profile Picture" class="profile-pic">
            <h2>${name}</h2>
            <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
            <p><strong>Education:</strong></p>
            <ul>${education.map(edu => `<li>${edu}</li>`).join("")}</ul>
            <p><strong>Location:</strong> ${location}</p>
        `;
    }

    // Load Work & Education 
    if (workEducationSection) {
        console.log("Loading Work & Education...");
        let experienceHTML = "<h2>Work Experience</h2>";
        data.professional.experience.forEach(job => {
            experienceHTML += `
                <div class="card">
                    <h3>${job.role} at ${job.company}</h3>
                    <p><strong>Period:</strong> ${job.period}</p>
                </div>
            `;
        });

        workEducationSection.innerHTML = experienceHTML;
    }

    // Load Hobbies 
    if (hobbiesSection) {
        console.log("Loading Hobbies...");
        hobbiesSection.innerHTML = `
            <h2>Hobbies</h2>
            <ul class="hobbies-list">${data.hobbies.map(hobby => `<li>${hobby}</li>`).join("")}</ul>
        `;
    }

    // Load Tech Stack 
    if (techStackSection) {
        console.log("Loading Tech Stack...");

        techStackSection.innerHTML = data.techStack.map(tech => `
            <div class="tech-card">
                <div class="tech-card-inner">
                    <div class="tech-card-front">
                        <img src="${tech.logo}" alt="${tech.name}" 
                             onerror="this.src='assets/logos/default_logo.png'">
                    </div>
                    <div class="tech-card-back">
                        <p>${tech.name}</p>
                    </div>
                </div>
            </div>
        `).join("");
    } else {
        console.error("Tech Stack section not found in DOM.");
    }
});
