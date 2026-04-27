# 🚀 Project 1 - DevOps Services Portal
<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/0e3d2aeb-5f39-4974-b1a1-14374e5b7112" />


## 📌 Project Description
**DevOps Services Portal** is a real-world DevOps project designed to demonstrate a complete **CI/CD (Continuous Integration & Continuous Deployment)** pipeline for deploying a frontend web application using modern DevOps tools and cloud infrastructure.

In this project, we created a frontend service portal website using **HTML, CSS, and JavaScript**, hosted the source code on GitHub, automated the build and deployment process using Jenkins, performed static code analysis using SonarQube, containerized the application using Docker, and deployed it on AWS EC2 instances.

This project simulates how real-world organizations automate software delivery pipelines for faster, secure, and reliable deployments.

---

# 🛠 Tools & Technologies Used
- **GitHub** – Source Code Management  
- **Jenkins** – CI/CD Automation  
- **SonarQube** – Static Code Analysis / Quality Gate  
- **Docker** – Containerization  
- **AWS EC2** – Cloud Infrastructure / Deployment  
- **HTML5** – Frontend Structure  
- **CSS3** – Styling  
- **JavaScript** – Dynamic Functionality  

---

# 📂 Project Architecture

```text
Developer
   ↓
GitHub Repository
   ↓
Jenkins Pipeline
   ├── Checkout Code
   ├── SonarQube Scan
   ├── Docker Build
   └── Deploy Container
   ↓
AWS EC2 Instance
   ↓
Live Website

Implementation Process
1️⃣ GitHub Repository Setup

Created and maintained source code in GitHub repository.

Included files:
Website source code
Jenkinsfile
Dockerfile
SonarQube configuration
Screenshots & documentation
Repository URL:

https://github.com/reddijagadeesh9/project-1-devops-services-portal

2️⃣ Frontend Web Application Development

Developed a responsive DevOps Services Portal website using:

HTML
CSS
JavaScript
Features:

✅ Modern UI
✅ Search functionality
✅ Service cards
✅ Responsive design

3️⃣ AWS EC2 Infrastructure Setup

Created two AWS EC2 instances:

Jenkins Server

Used for:

Jenkins installation
Docker installation
SonarScanner installation
CI/CD Pipeline execution
Deployment hosting
SonarQube Server

Used for:

SonarQube installation
Code quality analysis reports

4️⃣ Jenkins Installation & Configuration

Installed Jenkins on EC2:

sudo apt update
sudo apt install openjdk-17-jdk -y
sudo apt install jenkins -y
sudo systemctl start jenkins
sudo systemctl enable jenkins

Access Jenkins:

http://<jenkins-public-ip>:8080

Configured:

Admin user
Plugins
Pipeline job

5️⃣ Docker Installation

Installed Docker on Jenkins server:

sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ubuntu
sudo usermod -aG docker jenkins

Verified:

docker --version

6️⃣ SonarQube Installation

Installed SonarQube on separate EC2 server using Docker:

docker run -d --name sonarqube \
-p 9000:9000 \
sonarqube:lts-community
SonarQube Dashboard:

http://13.48.196.197:9000

Created:

Sonar token
Sonar project

7️⃣ SonarScanner Installation on Jenkins Server

<img width="1905" height="875" alt="Screenshot 2026-04-24 180857" src="https://github.com/user-attachments/assets/2c382d5c-774c-48e4-b14a-4fe8602e3aa6" />


Installed SonarScanner:

wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli.zip
unzip sonar-scanner-cli.zip
sudo mv sonar-scanner-* /opt/sonar-scanner

Configured in Jenkins:

SonarQube server
SonarScanner tool

8️⃣ Jenkins Pipeline Setup

Created Jenkins Pipeline job with stages:
<img width="1899" height="519" alt="Screenshot 2026-04-24 182050" src="https://github.com/user-attachments/assets/1f8987a5-1506-4305-924d-61ac8daee843" />


✅ Checkout

Pull code from GitHub.

✅ SonarQube Scan

Run static code analysis.

✅ Docker Build

Build Docker image.

✅ Deploy Container

Deploy container on EC2.

9️⃣ Docker Containerization

Created Dockerfile:

Docker Build Command:
docker build -t devops-services-portal -f docker/Dockerfile .
Docker Run Command:
docker run -d --name devops-services-portal -p 85:80 devops-services-portal

🔟 Live Deployment

Application deployed successfully on Jenkins EC2 server.

Live Website URL:

http://16.16.124.204:85

<img width="1885" height="969" alt="Screenshot 2026-04-24 181930" src="https://github.com/user-attachments/assets/428b6308-bc3a-496c-aa99-7ecfc5b8f47d" />


📁 Repository Structure
devops-services-portal/
│
├── website/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── jenkins/
│   └── Jenkinsfile
│
├── docker/
│   └── Dockerfile
│
├── ansible/
│   ├── inventory
│   └── deploy.yml
│
├── screenshots/
│   ├── website/
│   ├── jenkins/
│   ├── sonarqube/
│   ├── docker/
│   └── deployment/
│
├── docs/
│   ├── architecture-diagram.png
│   └── setup-guide.md
│
├── sonar-project.properties
└── README.md

⚙ Jenkins Pipeline Code
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/reddijagadeesh9/project-1-devops-services-portal.git'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '/opt/sonar-scanner/bin/sonar-scanner'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t devops-services-portal -f docker/Dockerfile .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker rm -f devops-services-portal || true
                docker run -d --name devops-services-portal -p 85:80 devops-services-portal
                '''
            }
        }
    }

    post {
        success {
            echo 'Build and Deployment Successful!'
        }
        failure {
            echo 'Build Failed!'
        }
    }
}

📸 Screenshots Included

This repository includes screenshots for:

Website homepage
<img width="1885" height="969" alt="Screenshot 2026-04-24 181930" src="https://github.com/user-attachments/assets/773c3319-0d95-481a-b8d0-cb38c9b6130a" />

Search functionality
<img width="1905" height="880" alt="Screenshot 2026-04-24 181949" src="https://github.com/user-attachments/assets/3fadc49f-57ca-4103-8b02-8f6bd79bd308" />

Jenkins dashboard
<img width="1365" height="902" alt="Screenshot 2026-04-24 182232" src="https://github.com/user-attachments/assets/5571cd42-ee2f-4298-b5ae-8e795eb097df" />

Pipeline success
<img width="1899" height="519" alt="Screenshot 2026-04-24 182050" src="https://github.com/user-attachments/assets/f1b27c9d-c09b-4835-921f-2f5afe9fc5bc" />

SonarQube dashboard
<img width="1914" height="862" alt="Screenshot 2026-04-24 180923" src="https://github.com/user-attachments/assets/828942e3-4b29-48c0-8cac-f094e007f292" />

<img width="1905" height="875" alt="Screenshot 2026-04-24 180857" src="https://github.com/user-attachments/assets/12e212f7-10db-40bf-9a83-d74d788d7f2d" />

Docker build
<img width="1898" height="355" alt="docker_ps" src="https://github.com/user-attachments/assets/573aa4c3-b489-433c-b711-993adee0a48a" />

Live deployment
<img width="1885" height="969" alt="Screenshot 2026-04-24 181930" src="https://github.com/user-attachments/assets/9c902dc0-71c9-454e-bc1b-d69fa808dbb2" />


👨‍💻 Author

REDDI JAGADEESWARA RAO
