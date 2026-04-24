 step-by-step flow 

### 1️⃣ Developer Writes Code

Developer creates frontend application using:

* HTML5
* CSS3
* JavaScript

Example files:

```text
index.html
style.css
script.js
```

---

### 2️⃣ Push Code to GitHub

Developer pushes code to GitHub repository:

```bash
git add .
git commit -m "updated project"
git push origin main
```

---

### 3️⃣ Jenkins Detects Changes

Jenkins checks GitHub repository using:

* Poll SCM / GitHub Webhook

Then pipeline starts automatically.

---

### 4️⃣ Checkout Stage

Jenkins downloads latest code:

```bash
git clone https://github.com/reddijagadeesh9/project-1-devops-services-portal.git
```

---

### 5️⃣ SonarQube Scan Stage

Jenkins connects to SonarQube server and scans code:

```bash
/opt/sonar-scanner/bin/sonar-scanner
```

Checks:

✅ Bugs
✅ Vulnerabilities
✅ Code Smells
✅ Duplicates

---

### 6️⃣ Docker Build Stage

Jenkins builds Docker image using Docker:

```bash
docker build -t devops-services-portal -f docker/Dockerfile .
```

---

### 7️⃣ Deploy Container Stage

Jenkins removes old container and deploys new one:

```bash
docker rm -f devops-services-portal || true
docker run -d --name devops-services-portal -p 85:80 devops-services-portal
```

---

### 8️⃣ Application Hosted on AWS EC2

Application runs on Amazon EC2 server:

```text
http://16.16.124.204:85
```

---

### 9️⃣ SonarQube Dashboard Access

Code quality report available at:

```text
http://13.48.196.197:9000
```

---

### 🔟 End User Accesses Website

Users can access live deployed application in browser.

### Final Flow:

```text
Developer
   ↓
GitHub
   ↓
Jenkins Pipeline
   ↓
Checkout
   ↓
SonarQube Scan
   ↓
Docker Build
   ↓
Deploy Container
   ↓
AWS EC2
   ↓
Live Website
```

