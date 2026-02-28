# 🌾 Smart Food AI
### AI-Powered Hyperlocal Solution to Reduce Post-Harvest Loss in India
**AI for Bharat Hackathon | Prototype Phase**

Smart Food AI is a cloud-native platform designed to empower farmers and street vendors. By leveraging real-time data and Generative AI, we provide actionable insights to prevent spoilage and stabilize income in the Indian agricultural supply chain.

---

## 🚨 The Challenge
India faces massive post-harvest losses due to fragmented storage, unpredictable price swings, and poor market connectivity. This leads to economic hardship for small-scale farmers and heightened food insecurity.

## 💡 Our Solution
Our platform uses **Amazon Bedrock (Nova Micro)** and a serverless AWS architecture to provide:
* **AI Storage Insights:** Instant advice on how to preserve specific crops based on local humidity and temperature.
* **Spoilage Risk Detection:** Guidance on identifying early signs of produce decay.
* **Smart Marketplace:** Connecting vendors to nearby buyers and optimal storage facilities.

---

## 🏗 Architecture & Tech Stack
We utilize a modern, scalable, and cost-effective serverless stack:

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js / Expo (Web-optimized) |
| **Hosting** | **AWS Amplify** |
| **AI Engine** | **Amazon Bedrock** (Amazon Nova Micro) |
| **Backend** | **AWS Lambda** (Serverless Node.js) |
| **Database** | Amazon DynamoDB |



---

## ⭐ Unique Value Proposition (USP)
* **Hyperlocal Context:** Tailored specifically for the Indian "Mandi" system and local vendor needs.
* **Serverless Efficiency:** High performance with near-zero idle costs using **Amazon Nova Micro**.
* **Accessibility First:** Minimalist, high-contrast UI designed for outdoor use and varying levels of digital literacy.

---

## 📱 Interface Overview
Our design prioritizes intuitive navigation and real-time decision support for users in the field.

* **🟢 Smart Dashboard:** Central hub for price trends and spoilage alerts.
* **🟢 AI Storage Insight:** Interactive interface for crop-specific preservation logs.
* **🟢 Hyperlocal Marketplace:** Direct mapping to nearby buyers and cold storage.

### **Wireframe Preview**
![Smart Food AI Wireframe](https://github.com/Khushi0415/smart-food-ai/blob/main/smart-food-wireframe.png)

---

## 📂 Project Structure
```text
smart-food-ai
├── app             # Frontend React/Expo Codebase
├── design          # UI/UX Wireframes & System Design
├── .kiro           # Workflow & AI Configurations
├── requirements.md # Technical Specifications
└── README.md       # Project Overview
