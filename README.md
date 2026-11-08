# Module 03: Cloud Services & Web App Deployment

## 1. Architecture Overview
- **Frontend:** Custom HTML/CSS Portfolio (Served via Node/Express)
- **Backend:** Node.js Express API running on Port 8080.
- **Cloud Services:** AWS EC2 (Compute), AWS Security Groups (Networking/Firewall), IAM (Security).

## 2. Security & Configuration
- **Environment Variables:** Port is injected via `PORT=8080`.
- **Binding:** The app explicitly binds to `0.0.0.0` to accept public internet traffic.
- **IAM & Security Groups:** SSH restricted to My IP; HTTP (Port 8080) open to the world.
- **Logging:** The Express server logs requests to the console for monitoring.

## 3. Deployment Steps
1. Launched an EC2 instance (Amazon Linux 2023) in the Stockholm region.
2. Installed Node.js and Git via SSH.
3. Cloned the application code from this repository.
4. Ran `npm install` to install dependencies.
5. Modified `app.js` to bind to `0.0.0.0` and started the app on Port 8080.
6. Verified the live application via the Public IPv4 address.

## 4. Proof of Work
<img width="2301" height="1060" alt="Screenshot From 2026-11-07 19-06-30" src="https://github.com/user-attachments/assets/1e9cead9-1f52-40a3-826b-f34fd0fa9150" />
<img width="2301" height="1060" alt="Screenshot From 2026-11-07 19-06-48" src="https://github.com/user-attachments/assets/e321beb5-b6e0-4123-916f-c5214d54f137" />
<img width="1932" height="1041" alt="Screenshot From 2026-11-07 19-07-07" src="https://github.com/user-attachments/assets/f2d9421d-0603-483b-b935-85fec62af253" />
<img width="1932" height="1041" alt="Screenshot From 2026-11-07 19-34-28" src="https://github.com/user-attachments/assets/74f7893f-22ca-43fe-a3d7-542c3ffb37f6" />
<img width="2314" height="1060" alt="Screenshot From 2026-11-07 19-35-03" src="https://github.com/user-attachments/assets/b12e4ee4-4a17-48a0-99bc-b4687e3f30f3" />
