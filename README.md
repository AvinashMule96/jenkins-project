# 🚀 CI/CD Pipeline with Jenkins and Node.js

## 📌 Project Overview

This project demonstrates a complete **CI/CD pipeline** using a Node.js application integrated with Jenkins and GitHub webhooks.

The pipeline automatically builds and deploys the application whenever code is pushed to the repository.

---

## 🧱 Tech Stack

* Node.js
* Express.js
* Jenkins
* GitHub
* AWS EC2

---

## ⚙️ Architecture

```
Developer → GitHub → Jenkins → EC2 Deployment
```

### 🔁 Workflow

1. Developer pushes code to GitHub
2. GitHub Webhook triggers Jenkins
3. Jenkins executes pipeline (Jenkinsfile)
4. Application is deployed on EC2
5. App becomes accessible via public IP

---

## 📁 Project Structure

```
jenkins-project/
│── index.js
│── package.json
│── Jenkinsfile
```

---

## 🧪 Application Details

Simple Node.js app using Express:

* Runs on port **3000**
* Endpoint:

  ```
  /
  ```
* Output:

  ```
  CI/CD Pipeline Working 🚀
  ```

---

## 🔧 Setup Instructions

### 1️⃣ Launch EC2 Instance

* Install Node.js and npm
* Install Jenkins
* Open ports:

  * 22 (SSH)
  * 8080 (Jenkins)
  * 3000 (Application)

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Run Application

```
npm start
```

---

### 4️⃣ Access Application

```
http://<EC2-PUBLIC-IP>:3000
```

---

## ⚡ Jenkins Pipeline

### Jenkinsfile

```
pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/<your-username>/<repo>.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Stop Old App') {
            steps {
                sh 'pkill node || true'
            }
        }

        stage('Run App') {
            steps {
                sh 'nohup node index.js > app.log 2>&1 &'
            }
        }
    }
}
```

---

## 🔔 Webhook Configuration

In GitHub:

* Go to **Settings → Webhooks**
* Add:

  ```
  http://<EC2-IP>:8080/github-webhook/
  ```
* Content Type: `application/json`

---

## 🔄 CI/CD Flow

```
Code Push → Webhook → Jenkins Build → Deploy → Live App
```

---

## ✅ Features

* Automated build and deployment
* Real-time deployment using GitHub Webhooks
* Hands-on DevOps CI/CD pipeline
* Cloud deployment using AWS EC2

---

## 🚀 Future Improvements

* Use PM2 for process management
* Dockerize the application
* Add Nginx reverse proxy
* Deploy on separate app server
* Integrate testing stage

---

## 🧠 Key Learnings

* CI/CD pipeline fundamentals
* Jenkins pipeline creation
* Webhook integration
* Node.js deployment on EC2
* Automation of application lifecycle

---

## 📷 Output

```
CI/CD Pipeline Working 🚀
```

---

## 👨‍💻 Author

Avinash Mule

---

## ⭐ Conclusion

This project demonstrates how to automate application deployment using Jenkins and GitHub, forming the foundation of modern DevOps practices.
