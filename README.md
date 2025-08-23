# NoteSphere-2

NoteSphere-2 is a minimalist note-taking app built with **Next.js**, **Tailwind CSS**, and **Firebase**, designed to help users capture, organize, and manage notes efficiently across devices.

## Features
- Secure Cloud Storage with Firebase  
- Clean & User-Friendly Interface  
- Cross-Device Sync  
- Light & Dark Mode  
- Share & Copy Notes  
- Offline Access  

## Technologies
- Frontend: Next.js  
- Styling: Tailwind CSS  
- Backend: Firebase  

## Installation
```bash
git clone https://github.com/Onetatcode/NoteSphere-2.git
cd NoteSphere-2
npm install
Set up Firebase: create a project, enable Firestore & Authentication, then add your config to .env.local:

env
Copy code
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
Run the app:

bash
Copy code
npm run dev
Contributing
Fork → Branch → Commit → Push → Pull Request
