# Digital Skill Passport - A HACKX 2025 Project by Team Synapse

**Industry:** Digital Banking Services   
**Theme:** Skill Verification & Digital Identity 

---

## Project Overview

Synapse introduces the **Digital Skill Passport**, an AI-powered platform designed to provide blue-collar workers with a permanent, verified digital portfolio. This solution aims to formalize skill identity, reduce hiring friction, and empower a vital segment of the workforce.

Each worker gets a unique QR code that grants employers instant access to their verified skills, work history, and peer feedback, building a trusted ecosystem for hiring.

## The Problem

The current system for verifying skills in the unorganized labor sector is broken. Key challenges include:
* **Difficult Verification:** Industries struggle to easily verify the skills that workers claim to have.
* **Prevalence of Fraud:** The use of fake certificates and exaggerated resumes is a common issue.
* **Poor Record Keeping:** It's difficult to track worker records as they frequently move between jobs and locations.
* **Lack of a Standard:** There is no single, trusted system for managing and verifying worker skills.

## Our Solution: The AI-Powered Skill Passport

Our platform provides a single source of truth for a worker's capabilities.


The worker's journey is simple and accessible:
1.  **Create Profile:** A worker signs up and uploads evidence of their work.
2.  **AI Verification:** Our system verifies their past work and experience.
3.  **Connect:** Employers can scan a worker's QR code or search the platform to view their verified portfolio.
4.  **Hire & Feedback:** After hiring, employers can leave feedback, which further enriches the worker's profile.

## Key Features

* **Verified Digital Portfolio:** A permanent, portable digital identity for every worker.
* **AI-Powered Verification:** Custom AI models to validate work experience and evidence.
* **QR Code Access:** Instant access to a worker's profile for quick and reliable verification by employers.
* **Accessibility:** A mobile-first design with multilingual support and voice/text inputs to assist semi-literate users.
* **Offline Mode:** Allows for profile viewing and data submission even with limited internet connectivity.

## Tech Stack

* **Frontend:** React.js 
* **Backend:** Node.js, Express.js 
* **Database:** MongoDB 

## Getting Started: How to Use This Repo

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

* Node.js (v18 or later)
* npm or yarn
* Git
* A running instance of MongoDB

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)[Ashmarck]/digital-skill-passport.git
    cd digital-skill-passport
    ```

2.  **Project Structure:** We recommend a `client` and `server` folder structure.
    ```
    /digital-skill-passport
    |-- /client         # React frontend
    |-- /server         # Node.js backend
    |-- .gitignore
    |-- LICENSE
    |-- README.md
    ```

3.  **Install Server Dependencies:**
    ```bash
    cd server
    npm install
    ```

4.  **Install Client Dependencies:**
    ```bash
    cd ../client
    npm install
    ```

5.  **Environment Variables:** Create a `.env` file in the `/server` directory. This file will store your secret keys and database connection strings.
    ```
    # .env file example
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

### Running the Application

1.  **Start the Backend Server:**
    ```bash
    cd server
    npm run dev  # Or "npm start"
    ```

2.  **Start the Frontend React App:**
    ```bash
    cd client
    npm start
    ```
The application should now be running on your local machine!

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

now give me redme file with whole code

