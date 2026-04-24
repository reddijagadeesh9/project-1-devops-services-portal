# 🚀 Project 1 - DevOps Services Portal

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

Installed SonarScanner:

wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli.zip
unzip sonar-scanner-cli.zip
sudo mv sonar-scanner-* /opt/sonar-scanner

Configured in Jenkins:

SonarQube server
SonarScanner tool

8️⃣ Jenkins Pipeline Setup

Created Jenkins Pipeline job with stages:

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
Search functionality
Jenkins dashboard
Pipeline success
SonarQube dashboard
Docker build
Live deployment

👨‍💻 Author

REDDI JAGADEESWARA RAO
