const fullName = document.getElementById("fullName");
const jobTitle = document.getElementById("jobTitle");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const locationInput = document.getElementById("location");
const summary = document.getElementById("summary");

const educationContainer = document.getElementById("educationContainer");
const experienceContainer = document.getElementById("experienceContainer");

const previewName = document.getElementById("previewName");
const previewJobTitle = document.getElementById("previewJobTitle");
const previewEmail = document.getElementById("previewEmail");
const previewPhone = document.getElementById("previewPhone");
const previewLocation = document.getElementById("previewLocation");
const previewSummary = document.getElementById("previewSummary");
const previewEducation = document.getElementById("previewEducation");
const previewExperience = document.getElementById("previewExperience");

const addEducationBtn = document.getElementById("addEducation");
const addExperienceBtn = document.getElementById("addExperience");
const clearBtn = document.getElementById("clearBtn");
const printBtn = document.getElementById("printBtn");
const printBtnBottom = document.getElementById("printBtnBottom");

let educationCount = 0;
let experienceCount = 0;

/* -----------------------------
   PERSONAL INFORMATION
----------------------------- */

function updatePersonalPreview() {
    previewName.textContent = fullName.value.trim() || "Your Name";
    previewJobTitle.textContent =
        jobTitle.value.trim() || "Professional Title";

    previewEmail.textContent =
        email.value.trim() || "email@example.com";

    previewPhone.textContent =
        phone.value.trim() || "+91 XXXXX XXXXX";

    previewLocation.textContent =
        locationInput.value.trim() || "City, State";

    previewSummary.textContent =
        summary.value.trim() ||
        "Your professional summary will appear here.";
}

[
    fullName,
    jobTitle,
    email,
    phone,
    locationInput,
    summary
].forEach((input) => {
    input.addEventListener("input", updatePersonalPreview);
});

/* -----------------------------
   EDUCATION
----------------------------- */

function createEducation() {
    educationCount++;

    const card = document.createElement("div");

    card.className = "dynamic-card education-card";

    card.innerHTML = `
        <div class="dynamic-card-header">
            <h3>Education ${educationCount}</h3>

            <button
                type="button"
                class="remove-btn remove-education"
            >
                Remove
            </button>
        </div>

        <div class="card-grid">

            <div class="form-group">
                <label>Degree / Course</label>
                <input
                    type="text"
                    class="education-degree"
                    placeholder="B.Tech in Computer Science"
                >
            </div>

            <div class="form-group">
                <label>Institution</label>
                <input
                    type="text"
                    class="education-institution"
                    placeholder="Acropolis Institute of Technology"
                >
            </div>

            <div class="form-group">
                <label>Year</label>
                <input
                    type="text"
                    class="education-year"
                    placeholder="2023 - 2027"
                >
            </div>

            <div class="form-group">
                <label>Grade / CGPA</label>
                <input
                    type="text"
                    class="education-grade"
                    placeholder="7.88 CGPA"
                >
            </div>

        </div>
    `;

    educationContainer.appendChild(card);

    card.querySelector(".remove-education")
        .addEventListener("click", () => {
            card.remove();
            updateEducationPreview();
        });

    card.querySelectorAll("input").forEach((input) => {
        input.addEventListener("input", updateEducationPreview);
    });

    updateEducationPreview();
}

/* -----------------------------
   EXPERIENCE
----------------------------- */

function createExperience() {
    experienceCount++;

    const card = document.createElement("div");

    card.className = "dynamic-card experience-card";

    card.innerHTML = `
        <div class="dynamic-card-header">
            <h3>Experience ${experienceCount}</h3>

            <button
                type="button"
                class="remove-btn remove-experience"
            >
                Remove
            </button>
        </div>

        <div class="card-grid">

            <div class="form-group">
                <label>Job Title</label>
                <input
                    type="text"
                    class="experience-title"
                    placeholder="Web Developer Intern"
                >
            </div>

            <div class="form-group">
                <label>Company</label>
                <input
                    type="text"
                    class="experience-company"
                    placeholder="Veda Technology"
                >
            </div>

            <div class="form-group">
                <label>Duration</label>
                <input
                    type="text"
                    class="experience-duration"
                    placeholder="June 2026 - Present"
                >
            </div>

            <div class="form-group card-full">
                <label>Description</label>
                <textarea
                    class="experience-description"
                    rows="4"
                    placeholder="Describe your responsibilities and achievements..."
                ></textarea>
            </div>

        </div>
    `;

    experienceContainer.appendChild(card);

    card.querySelector(".remove-experience")
        .addEventListener("click", () => {
            card.remove();
            updateExperiencePreview();
        });

    card.querySelectorAll("input, textarea").forEach((input) => {
        input.addEventListener("input", updateExperiencePreview);
    });

    updateExperiencePreview();
}

/* -----------------------------
   EDUCATION PREVIEW
----------------------------- */

function updateEducationPreview() {

    const cards =
        document.querySelectorAll(".education-card");

    if (cards.length === 0) {
        previewEducation.innerHTML =
            `<p class="empty-preview">
                Add your education details.
            </p>`;
        return;
    }

    let html = "";

    cards.forEach((card) => {

        const degree =
            card.querySelector(".education-degree").value.trim();

        const institution =
            card.querySelector(".education-institution").value.trim();

        const year =
            card.querySelector(".education-year").value.trim();

        const grade =
            card.querySelector(".education-grade").value.trim();

        if (!degree && !institution && !year && !grade) {
            return;
        }

        html += `
            <div class="preview-entry">

                <div class="preview-entry-header">

                    <div>
                        <div class="preview-entry-title">
                            ${escapeHTML(degree || "Degree / Course")}
                        </div>

                        <div class="preview-entry-subtitle">
                            ${escapeHTML(institution || "Institution")}
                        </div>
                    </div>

                    <div class="preview-date">
                        ${escapeHTML(year)}
                    </div>

                </div>

                ${
                    grade
                    ? `<p class="preview-description">
                        ${escapeHTML(grade)}
                    </p>`
                    : ""
                }

            </div>
        `;
    });

    previewEducation.innerHTML =
        html ||
        `<p class="empty-preview">
            Add your education details.
        </p>`;
}

/* -----------------------------
   EXPERIENCE PREVIEW
----------------------------- */

function updateExperiencePreview() {

    const cards =
        document.querySelectorAll(".experience-card");

    if (cards.length === 0) {
        previewExperience.innerHTML =
            `<p class="empty-preview">
                Add your experience details.
            </p>`;
        return;
    }

    let html = "";

    cards.forEach((card) => {

        const title =
            card.querySelector(".experience-title").value.trim();

        const company =
            card.querySelector(".experience-company").value.trim();

        const duration =
            card.querySelector(".experience-duration").value.trim();

        const description =
            card.querySelector(".experience-description").value.trim();

        if (!title && !company && !duration && !description) {
            return;
        }

        html += `
            <div class="preview-entry">

                <div class="preview-entry-header">

                    <div>
                        <div class="preview-entry-title">
                            ${escapeHTML(title || "Job Title")}
                        </div>

                        <div class="preview-entry-subtitle">
                            ${escapeHTML(company || "Company")}
                        </div>
                    </div>

                    <div class="preview-date">
                        ${escapeHTML(duration)}
                    </div>

                </div>

                ${
                    description
                    ? `<p class="preview-description">
                        ${escapeHTML(description)}
                    </p>`
                    : ""
                }

            </div>
        `;
    });

    previewExperience.innerHTML =
        html ||
        `<p class="empty-preview">
            Add your experience details.
        </p>`;
}

/* -----------------------------
   HTML ESCAPE
----------------------------- */

function escapeHTML(value) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/* -----------------------------
   BUTTON EVENTS
----------------------------- */

addEducationBtn.addEventListener(
    "click",
    createEducation
);

addExperienceBtn.addEventListener(
    "click",
    createExperience
);

printBtn.addEventListener(
    "click",
    () => window.print()
);

printBtnBottom.addEventListener(
    "click",
    () => window.print()
);

/* -----------------------------
   CLEAR RESUME
----------------------------- */

clearBtn.addEventListener("click", () => {

    const confirmed = confirm(
        "Are you sure you want to clear the entire resume?"
    );

    if (!confirmed) {
        return;
    }

    fullName.value = "";
    jobTitle.value = "";
    email.value = "";
    phone.value = "";
    locationInput.value = "";
    summary.value = "";

    educationContainer.innerHTML = "";
    experienceContainer.innerHTML = "";

    educationCount = 0;
    experienceCount = 0;

    updatePersonalPreview();
    updateEducationPreview();
    updateExperiencePreview();
});

/* -----------------------------
   INITIAL DATA
----------------------------- */

createEducation();
createExperience();

updatePersonalPreview();