document.addEventListener("DOMContentLoaded", async function () {
    const personalSection = document.getElementById("personal-info");
    const workEducationSection = document.getElementById("work-education");
    const hobbiesSection = document.getElementById("hobbies");
    const techStackSection = document.querySelector(".tech-grid");

    // Load Personal Info
    if (personalSection) {
        try {
            const res = await fetch("http://localhost:5000/api/personal");
            const data = await res.json();

            personalSection.innerHTML = `
                <img src="img/poza_cv.jpg" alt="Profile Picture" class="profile-pic">
                <h2>${data.name}</h2>
                <p><strong>Date of Birth:</strong> ${data.dateOfBirth}</p>
                <p><strong>Education:</strong></p>
                <ul>${data.education.map(edu => `<li>${edu}</li>`).join("")}</ul>
                <p><strong>Location:</strong> ${data.location}</p>
            `;
        } catch (err) {
            console.error("Error loading personal info:", err);
        }
    }

    // Load Work & Education
    if (workEducationSection) {
        try {
            const res = await fetch("http://localhost:5000/api/work");
            const data = await res.json();

            let experienceHTML = "<h2>Work Experience</h2>";
            data.experience.forEach(job => {
                experienceHTML += `
                    <div class="card">
                        <h3>${job.role} at ${job.company}</h3>
                        <p><strong>Period:</strong> ${job.period}</p>
                    </div>
                `;
            });
            workEducationSection.innerHTML = experienceHTML;
        } catch (err) {
            console.error("Error loading work experience:", err);
        }
    }

    // Load Hobbies
    if (hobbiesSection) {
        try {
            const res = await fetch("http://localhost:5000/api/hobbies");
            const data = await res.json();

            hobbiesSection.innerHTML = `
                <h2>Hobbies</h2>
                <ul class="hobbies-list">${data.list.map(hobby => `<li>${hobby}</li>`).join("")}</ul>
            `;
        } catch (err) {
            console.error("Error loading hobbies:", err);
        }
    }

    // Load Tech Stack
    if (techStackSection) {
        try {
            const res = await fetch("http://localhost:5000/api/tech");
            const techData = await res.json();

            techStackSection.innerHTML = techData.map(tech => `
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
        } catch (err) {
            console.error("Error loading tech stack:", err);
        }
    }
});
