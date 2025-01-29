Here's how you can modify your README to include an **Installation Setup** section. I added the necessary steps for setting up the project locally:

---

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

## **Directory Structure**
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

---

## **Installation Setup**

To set up **CodeLab** locally on your machine, follow these steps:

### **Prerequisites**
- Ensure you have the following tools installed on your system:
  - **Node.js (v18.x)**: [Install Node.js](https://nodejs.org/)
  - **MongoDB (v6.x)**: [Install MongoDB](https://www.mongodb.com/try/download/community)
  - **Git**: [Install Git](https://git-scm.com/)

### **Steps to Set Up**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/codelab.git
   cd codelab
   ```

2. **Install dependencies:**

   - **Frontend dependencies**: Navigate to the frontend directory and install the required dependencies.

     ```bash
     cd frontend
     npm install
     ```

   - **Backend dependencies**: Navigate to the backend directory and install the required dependencies.

     ```bash
     cd backend
     npm install
     ```

3. **Set up environment variables:**

   - In the **backend** folder, create a `.env` file and set the necessary environment variables. Example:

     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

4. **Run MongoDB**:
   - Ensure MongoDB is running on your local machine or use a cloud MongoDB instance.
   - If running locally, start the MongoDB server with the following command:
   
     ```bash
     mongod
     ```

5. **Start the backend server**:

   ```bash
   cd backend
   npm start
   ```

6. **Start the frontend server**:

   ```bash
   cd frontend
   npm start
   ```

   This will open the app in your browser at `http://localhost:3000`.

---

Now you're all set to start collaborating with others on CodeLab! Feel free to explore the features and dive into the development process.

---
