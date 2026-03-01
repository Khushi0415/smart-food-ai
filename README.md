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

## 📱 Interface Preview
Our high-fidelity prototype focuses on clarity for vendors and real-time freshness tracking.

<p align="center">
  <img src="assets/images/1.jpg" width="220">
 
 The "Today's Pick" and price listings (like Potato at ₹40) are the visual output of the Economic Optimization Module (EOM).

<p align="center">
  <img src="assets/images/2.jpg" width="220">

 The product recommendations are driven by the Demand Intelligence Module (DIM) which predicts what local buyers want.

<p align="center">
  <img src="assets/images/3.jpg" width="220">

 The "Shelf life 1-weeks" for tomatoes and "1-day" for mutton are real-time predictions from the Spoilage Intelligence Module (SIM).
</p>

**Key UI Highlights:**
* **Shelf-Life Intelligence:** The cart view (right) dynamically displays AI-calculated shelf life to prioritize sales.
* **Modern Aesthetic:** A clean, "Green-Tech" theme that balances professional data with rural accessibility.
* **Smart Categorization:** Easy filtering for Vegetables, Fruits, Dairy, and Poultry.

## 📱 Interface Overview
Our design prioritizes intuitive navigation and real-time decision support for users in the field.

### **Wireframe Preview**
![Smart Food AI Wireframe](https://github.com/Khushi0415/smart-food-ai/blob/main/smart-food-wireframe.png)

🔍 Feature Breakdown
Smart Dashboard: Provides a snapshot of the best produce available and current market rates (e.g., Potato at ₹40/kg).

AI Storage & Explore: Suggests healthy produce and helps vendors discover new stock through intelligent recommendations.

Hyperlocal Shelf-Life Tracking: The cart view dynamically calculates remaining shelf life (e.g., Tomato: 1-week, Mutton: 1-day) to ensure food safety and reduce loss.

---

👥 Team STRYX

Pratheeksha Shalbin – UI Lead & Repository Management

Khushi – AI Model Development & Cloud Integration

Deekshanya Shri L – UX Design & Frontend Logic

Shanney Maria George – Data Research & Analysis

---
---
## 📂 Project Structure
```text
smart-food-ai
├── app             # Frontend React/Expo Codebase
├── design          # UI/UX Wireframes & System Design
├── .kiro           # Workflow & AI Configurations
├── requirements.md # Technical Specifications
└── README.md       # Project Overview


