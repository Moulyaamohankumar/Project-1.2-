# Ecommerce-website
# S67_Ecommerce_Website

Description 

What is MERN 
MongoDB : It is used to store all over data of out project/App.

Express : Express provides easy-to-use methods and middleware to handle HTTP requests and responses. 
And also help in using in routing link GET, PUT, POST, DELETE.

React.js : React.js will be responsible for building the frontend, the part users interact with.Together, these technologies allow us to build a full-stack application where the frontend and backend communicate seamlessly.

Nodejs : This will be combined with the express and power the backend and helps in handling HTTPs request.

Project Overview.

In this project we will do an Ecommerce website. Where Frontend will be made with React.js. For backend we use Express and nodejs. For database we use MongoDb.

We make a Home page where we have product and search bar, filter option and cart option. And in the cart page we have products and total price of the products. In the Payment page we have the payment summary and paymnet things, 
and the user will have the invoice and tax bill. 1. What’s a Sign-Up Page?

The Sign-Up page is where users enter their details to create an account. This page typically includes fields like:

Name

Email

Password

This page allows users to provide their information, which will be sent to the server for processing. We’ll create a simple yet effective sign-up form that looks clean and is user-friendly.

2. What is Form Validation?

Form Validation ensures that the information users provide is correct and in the right format.

For instance:

Checking if the email is in the correct format.

Ensuring the password meets security criteria (e.g., minimum length).

Form validation helps prevent errors and ensures that the backend receives clean and valid data.

3. Implementation Details 🚀

Technologies Used:

React.js: To create a dynamic and responsive UI.

Tailwind CSS: For styling the components efficiently.

React Hook Form: To manage form state and validation.

Yup: For schema-based validation.

Features Implemented:

User-friendly sign-up form with Name, Email, and Password fields.

Form validation using Yup and React Hook Form:

Email validation ensures the input follows a proper email format.

Password validation requires a minimum length and security constraints.

Responsive design using Tailwind CSS to support different screen sizes.

Smooth user experience with clear error messages and input validation.

Code Structure:

Signup.js - Contains the sign-up form component.

styles.css - Additional custom styles (if needed).

validation.js - Defines validation schemas using Yup.

Steps for Milestone 5 📝

In this milestone, you will work on the frontend while your mentor will guide you through:

Building the Sign-Up Page with React.js and Tailwind CSS.

Adding form validation using React Hook Form and Yup.

Ensuring the UI is fully responsive and user-friendly.

If you missed the mentor-led session, don’t worry! You can always go through the content and reach out to your mentor for help on any coding aspects.

Milestone 5: Creating the Signup Page

Accomplishments 🎉

Designed and implemented a Sign-Up Page using React.js and Tailwind CSS.

Integrated form validation using React Hook Form and Yup.

Ensured responsiveness for different screen sizes.

Displayed real-time error messages for invalid inputs.

Updated the README file with details of the milestone.

Successfully completed and submitted the assignment. ✅

Submission Guidelines 📥

Once you’ve completed these steps:

Push your code to the same GitHub repository used for previous milestones.

Ensure your repository is publicly accessible.

Update your README file with a new section summarizing your progress for Milestone 5.

Share the repository link in the assignment submission area.

Task Instructions

Use the same GitHub repository created during Milestone 1: Ecommerce-Follow-Along.

If you haven’t done so, ensure it is initialized with a README file.

Complete the code for Milestone 5 (Frontend - Signup page).

Update the README file in the root of the repository.

Include a section titled Milestone 5: Creating the Signup Page that summarizes what was achieved in this milestone.

Ensure all changes are committed and pushed to your GitHub repository.

Share the repository link in the space provided below.

Next Steps 🚀

In the next milestone, we’ll continue building out advanced features for your app, including:

Connecting the frontend with the backend.

Managing user sessions and authentication
Milestone 6: Backend for Signup Page

Learning Goals 🎯

By the end of this milestone, you will:

Understand how to encrypt passwords before saving them.

Know how to store complete user data securely in the database.

Why Encrypt Passwords?

Protect User Data: Keeps passwords safe if hackers access the database.

Privacy: Ensures user passwords aren’t visible to anyone.

Compliance: Follows security laws like GDPR and PCI-DSS.

Stops Password Theft: Encrypted passwords can’t be easily stolen or guessed.

Steps for Milestone 6 📝

Encrypt the Password:

Use bcrypt to hash the user's password during signup.

Save the hashed password in the database instead of plain text.

Store Complete User Data:

Save all the user's data (e.g., name, email, etc.) in the database while ensuring that the password remains encrypted.

Accomplishments 🎉

Implemented backend functionality for user signup.

Used bcrypt to hash and securely store passwords.

Successfully saved user data in the database.

Ensured that passwords are never stored in plain text.

Successfully completed and submitted the assignment. ✅

Submission Guidelines 📥

Once you’ve completed these steps:

Push your code to the same GitHub repository used for previous milestones.

Ensure your repository is publicly accessible.

Update your README file with a new section summarizing your progress for Milestone 6.

Share the repository link in the assignment submission area.
