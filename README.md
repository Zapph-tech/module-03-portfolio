# Module 03: Cloud Services & Web App Deployment

## 1. Architecture Overview
- **Frontend:** `index.html` (Served via Node/Express)
- **Backend:** Node.js Express API on Port 80.
- **Cloud Services:** AWS EC2 (Compute), AWS S3 (for future static assets), AWS IAM (Security).

## 2. Security & Configuration
- **Environment Variables:** Database status is injected via an environment variable (`DB_STATUS`), keeping configuration separate from code.
- **IAM Policies:** The EC2 instance uses a principle of least privilege (SSH restricted to My IP).
- **Logging:** The Express server logs health check requests to the console for monitoring.

## 3. Deployment Steps
1. Launched an EC2 instance (Amazon Linux 2023).
2. Installed Node.js and Git via SSH.
3. Cloned the application code from this repository.
4. Ran `npm install` to install dependencies.
5. Injected environment variables and started the app on Port 80.
6. Verified the live application via the Public IPv4 address.

## 4. Proof of Work
<img width="2302" height="1026" alt="Screenshot From 2026-11-05 19-23-29" src="https://github.com/user-attachments/assets/a7538e5e-d9db-4c66-9ac5-4aa6622c848f" />
<img width="2302" height="1026" alt="Screenshot From 2026-11-05 19-23-50" src="https://github.com/user-attachments/assets/255fd303-e1f6-478f-9e04-8abae9f3461d" />
<img width="2302" height="1026" alt="Screenshot From 2026-11-05 19-23-59" src="https://github.com/user-attachments/assets/d305ccbe-5b71-48a2-a555-464ff84f2d6a" />
<img width="1926" height="1024" alt="Screenshot From 2026-11-05 19-29-21" src="https://github.com/user-attachments/assets/5bbeb051-9953-4a0f-be68-a81715156d16" />
<img width="2301" height="1114" alt="Screenshot From 2026-11-05 19-59-44" src="https://github.com/user-attachments/assets/e4d7f1d6-5451-4e8f-8ae1-4c38096653bb" />
