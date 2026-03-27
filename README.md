# LoRa Alert: Emergency Notifications for Signal-Blocked Shelters 🛡️📡

**Solving the "Shelter Connectivity Gap" using LoRa technology and WebUSB.**

## 📋 Overview
During emergency situations, reinforced concrete shelters (Mamads) often block cellular and WiFi signals, leaving people in a state of uncertainty. This project provides a **Plug & Play** solution that polls real-time alerts from the Home Front Command API and transmits them through walls using LoRa (Long Range) radio waves directly to a smartphone.

---

## 🚀 How It Works
The system is comprised of two ends:

### 1. The Transmitting Side (Python)
* **API Polling:** A Python script continuously polls the Home Front Command (Red Color) API.
* **State Machine:** Analyzes the data and manages a 4-state logic (Routine, Warning, Alert, Event Ended).
* **Latch Logic:** Implements a software "latch" to ensure an alert remains active on the user's end even if the API signal is momentary, until a formal "All Clear" is received.

### 2. The Receiving Side (JavaScript PWA)
* **WebUSB API:** A Progressive Web App (PWA) that communicates directly with the LoRa receiver via USB.
* **Offline Ready:** Utilizing Service Workers for full offline functionality once installed.
* **Visual & Audio Alerts:** Provides immediate color-coded UI changes and audio announcements.

---

## 🛠️ Tech Stack
* **Language:** Python 3.x (Backend), JavaScript (Frontend/PWA).
* **Hardware:** LoRa SX1276/8 USB modules.
* **APIs & Protocols:** WebUSB API, Home Front Command API, Serial Communication.

---

## 💡 Key Engineering Challenges
* **Signal Penetration:** Choosing LoRa for its superior ability to penetrate thick concrete walls compared to WiFi/Bluetooth.
* **Browser Security:** Overcoming "Autoplay" restrictions in mobile browsers to ensure audio alerts trigger reliably upon state changes.
* **Power Optimization:** Implementing polling intervals and Wake-Lock logic to balance real-time readiness with mobile battery life.

---

## 🔧 Setup & Installation
1. **Hardware:** Connect a LoRa USB module to your PC (Sender) and another to your Android phone via OTG (Receiver).
2. **Sender:** Run `python main.py` on your internet-connected PC.
3. **Receiver:** Open the (https://guyeiger.github.io/lora-alert/) in Chrome, click **Connect**, and install as a PWA.

---



https://github.com/user-attachments/assets/e437f292-3989-40bf-a401-b2fd554ce26f


---
*Note: This project was developed as a proactive response to local emergency needs, focusing on rapid deployment and reliability.*
