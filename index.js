// Get reference to the form and display area 
var Form = document.getElementById('resume-form');
var resumedisplay = document.getElementById('resumedisplay');
// Handle form submission 
Form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // prevent page reload
    // Collect input values
    var profilePicture = document.getElementById('profile-picture');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var certification1 = document.getElementById('certification1').value;
    var certification2 = document.getElementById('certification2').value;
    var certification3 = document.getElementById('certification3').value;
    var education1 = document.getElementById('education1').value;
    var education2 = document.getElementById('education2').value;
    var education3 = document.getElementById('education3').value;
    var experience1 = document.getElementById('experience1').value;
    var experience2 = document.getElementById('experience2').value;
    var experience3 = document.getElementById('experience3').value;
    var skill1 = document.getElementById('skill1').value;
    var skill2 = document.getElementById('skill2').value;
    var skill3 = document.getElementById('skill3').value;
    var profilePicFile = (_a = profilePicture.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePicURL = ''; // Placeholder for the image URL
    if (profilePicFile) {
        profilePicURL = URL.createObjectURL(profilePicFile);
    }
    // Generate the resume content dynamically 
    var resumeHTML = "\n        <html>\n            <head>\n                <title>Generated Resume</title>\n                <style>\n\n            body {\n                font-family: 'Arial', sans-serif;\n                background-color: #f4f4f4;\n                margin: 0;\n                padding: 20px;\n            }\n\n            .main-container {\n                margin: 20px auto;\n                padding: 20px;\n                border: 2px solid black;\n                box-sizing: border-box;\n                max-width: 900px;\n                width: 100%;\n            }\n\n            header {\n                height: auto;\n                width: 100%;\n                background-color: rgb(62, 59, 59);\n                color: white;\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n                box-sizing: border-box;\n                padding: 20px;\n                gap: 10px;\n                flex-wrap: wrap;\n            }\n            header h1 {\n                color: white;\n                font-size: 50px;\n                margin: 0;\n                padding: 0px;\n            }\n\n            h1 {\n                font-size: 35px;\n                color: white;\n                margin: 0;\n            }\n\n            h2 {\n                margin: 0;\n                font-size: 18px;\n                color: white;\n            }\n\n            p {\n                font-family: 'Arial', sans-serif;\n                margin: 5px;\n            }\n\n            .profile-pic {\n                border-radius: 50%;\n                height: 120px;\n                width: 120px;\n            }\n\n            .main-section {\n                display: flex;\n                gap: 20px;\n            }\n\n            .Left-section {\n                width: 35%;\n                background-color: rgb(189, 183, 183);\n                text-align: left;\n                padding: 15px;\n                box-sizing: border-box;\n                margin-top: 5px;\n            }\n\n            .right_section {\n                width: 65%;\n                padding: 10px;\n                box-sizing: border-box;\n            }\n\n            h3 {\n                font-family: 'Arial', sans-serif;\n                background-color: rgb(62, 59, 59);\n                color: white;\n                padding: 8px;\n                margin-bottom: 15px;\n                margin-top: 0;\n            }\n\n            ul li {\n                margin-bottom: 7px;\n                font-family: 'Arial', sans-serif;\n                text-align: left;\n            }\n\n            ul {\n                padding-left: 24px;\n            }\n\n            .btn {\n                display: flex;\n                justify-content: flex-end;\n                margin-left: auto;\n            }\n            .btn button {\n                border-radius: 10px;\n                cursor: pointer;\n                font-size: 20px;\n                padding: 10px;\n            }\n\n            button:hover {\n                background-color: rgb(62, 59, 59);\n                color: #f4f4f4;\n            }\n\n            .personal_info p {\n                padding-left: 30px;\n            }\n            button {\n    margin: auto;\n    margin-top: 20px;\n    display: block;\n    width: 30%;\n    background-color: rgb(44, 56, 61);\n    color: rgb(255, 251, 251);\n    border: none;\n    border-radius: 4px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n    font-size: 18px;\n    font-family: 'Times New Roman', Times, serif;\n    padding: 5px;\n    cursor: pointer;\n}\n\nbutton :hover {\n    color: rgb(133, 129, 129);\n}\n            \n\n                </style>\n            </head>\n            <body>\n                <div class=\"main-container\">\n                    <header>\n                        <div>\n                            <h1 >".concat(name, "</h1>\n                            <h2 style=\"margin: 0; padding: 0;\">Frontend developer</h2>\n                        </div>\n                         ").concat(profilePicURL ? "<img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\" class=\"profile-pic\" />") : '', "\n                    </header>\n                    <div class=\"main-section\">\n                        <aside class=\"Left-section\">\n                            <section id=\"career_objective\">\n                                <h3>Career Objective</h3>\n                                <p>To obtain a fresher position as a frontend developer in a fast-paced organization where technical\n                                    skills and creative thinking are useful.\n                                    i am highly motivated frontend developer seeking to get a position in a reputed company, where I\n                                    can use my skills and knowledge to learn new things and grow as a software developer.</p>\n                            </section>\n\n                             <section id=\"Certification\">\n                                <h3>Certification</h3>\n                                <ul>\n                                      <li>").concat(certification1, "</li>\n                                    <li>").concat(certification2, "</li>\n                                    <li>").concat(certification3, "</li>\n                                </ul>\n                            </section>\n                            <section id=\"languages\">\n                                <h3>Languages</h3>\n                                <ul>\n                                    <li>Urdu</li>\n                                    <li>English</li>\n                                </ul>\n                            </section>\n                        </aside>\n                        <div class=\"right_section\">\n                            <section id=\"personal_info\">\n                                <h3>Personal Information</h3>\n                                <p><b>Name: </b>").concat(name, "</p>\n                                <p><b>Phone No: </b>").concat(phone, "</p>\n                                <p><b>Email: </b>").concat(email, "</p>\n                            </section>\n\n                            <section id=\"education\">\n                                <H3>Education</H3>\n                                <ul>\n                                    <li>").concat(education1, "</li>\n                                    <li>").concat(education2, "</li>\n                                    <li>").concat(education3, "</li>\n                                </ul>\n                            </section>\n\n                            <section id=\"skills\">\n                                <H3>Skills</H3>\n                                <ul>\n                                    <li>").concat(skill1, "</li>\n                                    <li>").concat(skill2, "</li>\n                                    <li>").concat(skill3, "</li>\n                                </ul>\n                            </section>\n\n                            <section id=\"Work_experience\">\n                                <h3>Work Experience</h3>\n                                <ul>\n                                    <li>").concat(experience1, "</li>\n                                    <li>").concat(experience2, "</li>\n                                    <li>").concat(experience3, "</b></li>\n                                </ul>\n                            </section>\n                        </div>\n                    </div>\n                    \n                </div>\n                \n                <button id=\"edit-button\">Edit Resume</button>\n                \n            </body>\n        </html>\n    ");
    // Display the generated resume in the new window
    var newWindow = window.open("", "_blank");
    if (newWindow) {
        newWindow.document.open();
        newWindow.document.write(resumeHTML);
        newWindow.document.close();
        // Wait until the content is fully loaded before attaching event listeners
        newWindow.onload = function () {
            // Add event listener for the "Print" button
            // Add event listener for the "Edit" button
            var edit_button = newWindow.document.getElementById("edit-button");
            if (edit_button) {
                edit_button.addEventListener("click", function () {
                    newWindow.close(); // Close the new window
                    window.focus(); // Bring focus back to the original form window
                });
            }
        };
    }
    else {
        console.error("Failed to open new window.");
    }
});
