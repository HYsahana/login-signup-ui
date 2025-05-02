Login/Signup UI with Validation
This project is a simple Login/Signup page built using HTML, CSS, and JavaScript. It features basic validation for user inputs such as email and password. The project also allows for form switching between login and signup, and data is stored in localStorage to simulate backend storage.

Features
Responsive Design: The layout adjusts to fit different screen sizes.

Email Validation: Ensures the email entered is in a valid format.

Password Validation: Ensures password is at least 6 characters long.

Switching Between Forms: Users can toggle between the login and signup forms.

Local Storage: Data is saved in localStorage to simulate the registration and login process.

Emoji Icons: Fun and engaging emoji icons are included next to input fields for a more interactive experience.

Tech Stack
HTML: Structure of the page.

CSS: Styling the login/signup forms with responsive design.

JavaScript: Validation, form switching, and data handling.

How to Use
Clone the repository:

bash
Copy
Edit
git clone https://github.com/HYsahana/login-signup-ui.git
Navigate to the project folder:

bash
Copy
Edit
cd login-signup-ui
Open index.html in a browser to view the project.

Features Breakdown
Login Form: Takes email and password, validates inputs, and checks if the credentials match those stored in localStorage.

Signup Form: Takes full name, email, and password, and stores the user data in localStorage if validation passes.

Form Switching: Easily switch between the login and signup forms with a button.

Demo
You can test the login/signup functionality directly in your browser.

On signing up, a user's email and password are saved in localStorage.

On logging in, the credentials are validated against localStorage.

File Structure
bash
Copy
Edit
/login-signup-ui
|-- index.html     # Main HTML file with the structure
|-- style.css      # Styles for the UI
|-- script.js      # JavaScript for form switching and validation
License
This project is open-source and available under the MIT License.

