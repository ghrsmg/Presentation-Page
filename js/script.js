import { data } from "./data.js";  // Use named import

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");
    console.log("Data from data.js:", data);

    const personalSection = document.getElementById("personal-info");
    const workEducationSection = document.getElementById("work-education");
    const hobbiesSection = document.getElementById("hobbies");
    const techStackSection = document.querySelector(".tech-grid");

    // Load Personal Info (index.html)
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

    // Load Work & Education (about.html)
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

    // Load Hobbies (hobbies.html)
    if (hobbiesSection) {
        console.log("Loading Hobbies...");
        hobbiesSection.innerHTML = `
            <h2>Hobbies</h2>
            <ul class="hobbies-list">${data.hobbies.map(hobby => `<li>${hobby}</li>`).join("")}</ul>
        `;
    }

    // Load Tech Stack (tech.html)
    if (techStackSection) {
        console.log("Loading Tech Stack...");

        // Ensure techStack data is available
        if (!data.techStack || !Array.isArray(data.techStack) || data.techStack.length === 0) {
            console.error("Tech stack data is missing or empty.");
            return;
        }

        console.log("Tech Stack Data:", data.techStack);

        // Populate Tech Stack
        techStackSection.innerHTML = data.techStack.map(tech => {
            const imgSrc = tech.logo ? tech.logo : "assets/logos/default_logo.png";

            return `
                <div class="tech-card">
                    <img src="${imgSrc}" alt="${tech.name}" 
                         onerror="this.onerror=null; this.src='assets/logos/default_logo.png'; console.error('Missing image:', '${imgSrc}')">
                    <p>${tech.name}</p>
                </div>
            `;
        }).join("");
    } else {
        console.error("Tech Stack section not found in DOM.");
    }
});
