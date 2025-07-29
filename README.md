# 🚍 TravelBridge Rwanda

**Your Seamless Gateway to Smart Inter-Province Bus Booking**

---

## 📘 Project Overview

**TravelBridge** is a cloud-based web platform designed to modernize long-distance transportation in Rwanda. It connects travelers with multiple transport companies through a centralized portal, enabling passengers to view schedules, find nearby buses, and book tickets online—without visiting a bus park or needing an account.

---

## 🎯 Challenge Addressed

This project fulfills the **DevOps track** requirement:  
> *Design a CI/CD pipeline for automated, cloud-based deployment.*

TravelBridge leverages automation tools and cloud services to build, test, and deploy updates rapidly and reliably.

---

## 🚀 Features

- 🚌 Company dashboards to manage buses, routes, and bookings  
- 💳 Guest and registered ticket purchasing options  
- 🕒 Real-time schedule and seat availability viewer  
- 🧾 Instant digital ticket delivery (email/SMS)  
- 📱 Mobile-friendly interface for rural accessibility  
- 🔒 Secure login for admins and staff  
- 📊 Activity tracking and booking analytics  

---

## 🧰 Technologies Used

| Layer         | Tools & Platforms            |
|--------------|------------------------------|
| Frontend     | React.js, Tailwind CSS        |
| Backend      | Node.js + Express OR Python Flask |
| Database     | MongoDB OR PostgreSQL         |
| Deployment   | AWS EC2, S3                   |
| CI/CD        | GitHub Actions, AWS CodePipeline & CodeDeploy |
| Monitoring   | Datadog, Grafana              |
| Optional     | MTN Mobile Money / Airtel APIs for payment |

---

## ⚙️ Setup Instructions

### Clone Repository
```bash
git clone https://github.com/yourusername/travelbridge.git
cd travelbridge
```

### Frontend
```bash
cd frontend
npm install
npm start
```

### Backend
```bash
cd backend
npm install  # or pip install -r requirements.txt for Flask
npm run dev  # or flask run
```

### CI/CD & Deployment
CI/CD configuration lives under `ci-cd/`. Updates pushed to `main` trigger build, test, and deployment using GitHub Actions and AWS CodePipeline.

---

## 🖥️ Live Demo

🔗 [Live Demo Link](https://travelbridge.rw/) *(placeholder — will update upon deployment)*

---

## 👤 Demo/Test Credentials

| Role        | Username        | Password     |
|-------------|------------------|--------------|
| Passenger   | testuser@mail.com | test1234     |
| Company Admin | buscompany@mail.com | admin2025  |

---

## 🧭 Architecture Diagram

```plaintext
User → React Frontend → API Gateway → Node.js/Flask Backend → MongoDB/PostgreSQL
               ↑                                  ↓
       GitHub Actions → AWS EC2/S3 ← CodePipeline/CodeDeploy
```

Full diagram available in `/docs/architecture.png`

---

## 📎 Bonus Materials

- ✅ Screenshots of user dashboard & company admin panel  
- ✅ Demo video showcasing booking flow  
- ✅ Presentation slides (optional upload: `/docs/slides.pdf`)

---

## 🏁 Conclusion

*TravelBridge* is a scalable, smart, and inclusive transport solution tailored for Rwanda’s mobility needs. Through a robust DevOps pipeline, it demonstrates efficiency, accessibility, and potential for real-world deployment.

---

```
