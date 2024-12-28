# CodeAnt AI Application

This repository contains the CodeAnt AI application, which provides AI-driven solutions to detect and auto-fix bad code. The application includes features for user authentication, repository management, and AI-powered code review. This README will guide you through the setup and features of the application.

## Features

### Login Component
- **Sign-in Options**: Users can sign in via GitHub, BitBucket, Azure DevOps, or GitLab.
- **SAAS vs. Self-Hosted**: Users can toggle between SAAS and Self-Hosted options.
- **Key Highlights**:
  - AI for detecting and fixing bad code.
  - Supports 30+ languages.
  - Trusted by 10K+ developers and has saved 100K+ hours.

### Sidebar Component
- **Navigation Items**:
  - Repositories
  - AI Code Review
  - Cloud Security
  - Settings
  - Chat Support
- **User Profile Selector**: Displays the logged-in user's profile.
- **LogOut Option**: Allows users to securely log out.

### Repositories Component
- **Repository List**: Displays repositories with details such as name, status, type, size, and last updated date.
- **Add Repository**: Allows users to add a new repository.

## File Structure
```plaintext
src/
├── components/
│   ├── Login.js
│   ├── Sidebar.js
│   ├── Repos.js
│   └── RepoList.js
├── assets/
│   ├── images/
│   │   ├── image1.svg
│   │   ├── graph.svg
│   │   ├── github.svg
│   │   ├── bitbucket.svg
│   │   ├── azure.svg
│   │   ├── gitlab.svg
│   │   ├── home.svg
│   │   ├── code.svg
│   │   ├── cloud.svg
│   │   ├── settings.svg
│   │   ├── support.svg
│   │   ├── logout.svg
│   │   └── refresh.svg
├── App.js
└── index.js
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/codeant-ai.git
   ```

2. Navigate to the project directory:
   ```bash
   cd codeant-ai
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Open the application in your browser at `http://localhost:3000/`.
2. Use the login page to sign in and access your repositories.
3. Navigate through the sidebar to explore various features like AI Code Review, Cloud Security, and more.

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For navigation and routing.
- **Tailwind CSS**: For styling.

## Future Enhancements
- Add more sign-in options for developers.
- Include analytics for repository activity.
- Integrate AI-driven insights directly into the repositories list.

## License
This project is licensed under the [MIT License](LICENSE).

---

Thank you for using CodeAnt AI. For any issues or contributions, please reach out via [GitHub Issues](https://github.com/your-username/codeant-ai/issues).
