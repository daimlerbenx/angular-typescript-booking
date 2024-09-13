# Facility Booking System

This is a **Facility Booking System** developed using **Angular** and **TypeScript**. The application allows users to view available facilities and their respective time slots, and provides admin functionalities to manage facilities and set their availability, with a login authentication system for both users and admins.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### User Panel:
- View available facilities and their booking slots.
- Simple and intuitive user interface.
- **User login authentication**.

### Admin Panel:
- **Admin login authentication**.
- Add or remove facilities.
- Set availability (start and end times) for each facility.
- Manage facility bookings.

### General:
- Responsive design, ensuring a smooth experience on different devices.
- Scalable and clean code structure using Angular framework.

---

## Technologies

- **Frontend:** Angular, TypeScript, HTML5, CSS3
- **Styling:** Bootstrap, Custom CSS
- **Authentication:** Basic form-based login system with Angular.
- **Development Tools:** Angular CLI, Visual Studio Code

---

## Authentication

### Admin Login:
- Admins are required to authenticate with a username and password before accessing the admin panel. The login form is validated using Angular's form control features.

### User Login:
- Users need to authenticate via a username and password. Once logged in, they can view the available facilities and booking times.

Authentication is handled by a custom **AuthService** that checks the login credentials, manages session storage, and ensures that only logged-in users can access protected routes like the admin panel or the user panel.

**Auth Flow**:
1. Users (admin or regular) are required to log in through a form.
2. AuthService validates credentials and stores session details.
3. Protected routes ensure only authenticated users can proceed.
