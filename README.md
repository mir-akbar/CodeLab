# **CodeLab: Collaborative Real-Time Code Editor**

## **Overview**
CodeLab is a web-based collaborative code editor designed for seamless real-time coding experiences. It combines modern technologies to enable live code syncing, syntax highlighting, and in-app communication for developers working together remotely.

---

## **Features**
- **Real-Time Collaboration**: Work on code simultaneously with live updates across users.
- **Syntax Highlighting**: Supports JavaScript, Python, and Java for improved readability.
- **User Presence Indicators**: Know who is active in the session.
- **Code Formatting & Linting**: Write clean and consistent code with integrated tools.
- **In-App Communication**:
  - Text Chat: Discuss ideas while coding.
  - Audio/Video Chat: Conduct real-time discussions and debugging.
- **File Management**: Organize files and folders with an intuitive project structure interface.
- **Code Execution**: Execute code for supported languages within the app.

---

## **Technologies Used**
### **Frontend**
- **React (v18.x)**: For building an intuitive and responsive user interface.
- **Monaco Editor**: The core of the code editor with advanced features.

### **Backend**
- **Node.js (v18.x)**: For server-side logic and API management.
- **Socket.IO (v4.x)**: Enabling real-time, bidirectional communication.

### **Real-Time Communication**
- **WebRTC**: Peer-to-peer video, audio, and data sharing.

### **Database**
- **MongoDB (v6.x)**: For storing user data, project files, and logs.

---
## Directory Structure
### **Frontend**
    src/
      components/
              app-sidebar.jsx
              CodeEditor.jsx
              CodeEditorPanel.jsx
              CollaborationPanel.jsx
              login-form.jsx
              OutputPanel.jsx
              PathBreadCrumb.jsx
              signup-form.jsx
              TopNavBar.jsx
              UserSection.jsx
      pages/
          Dashboard.jsx
          LandingPage.jsx
          LoginPage.jsx
          SingUpPage.jsx
      App.jsx
