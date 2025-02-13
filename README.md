## A70M Web

A70M Web is a dynamic website featuring games, chat, and updates. It includes a **hacker-style matrix background**, a **fixed header and footer**, and interactive elements such as notifications. The site is currently in **V1.0**, with ongoing testing and improvements.

## Table of Contents
1. [Features](#features)
2. [File Structure](#file-structure)
3. [Installation](#installation)
4. [Deployment](#deployment)
   - [GitHub Pages](#github-pages)
   - [Vercel](#vercel)
   - [Koyeb](#koyeb)
5. [Technologies Used](#technologies-used)
6. [Customization](#customization)
   - [Matrix Background](#matrix-background)
   - [Notification System](#notification-system)
7. [Issues & Contributions](#issues--contributions)
8. [License](#license)

## Features
- **Hacker-style matrix background** (excludes header and footer)
- **Fixed header & footer** for easy navigation
- **Games Section** (`/jarbeefis/james/`)
- **Chat Page** (`/pages/chat/`)
- **Update Notifications** with dismiss button
- **Discord Community** link
- **Dark Theme** with neon green accents

## File Structure
```
ethandupe.github.io/
│-- assets/              # Images and media files
│   ├── Ethan.png        # Site favicon
│   ├── Ethan1noloop.gif # Animated logo
│-- css/
│   ├── styles.css       # Main CSS file
│-- js/
│   ├── index.js         # Main JavaScript file
│-- pages/
│   ├── chat/            # Chat page
│   ├── update/          # Update page
│-- index.html           # Main webpage
│-- README.md            # This file
```

## Installation
1. **Clone the repository**
   ```sh
   git clone https://github.com/EthanDupe/EthanDupe.github.io
   ```
2. **Navigate to the directory**
   ```sh
   cd EthanDupe.github.io
   ```
3. **Open `index.html` in a browser**
   ```sh
   open index.html  # Mac
   start index.html # Windows
   ```

## Deployment
You can deploy A70M Web using static site providers like **Vercel, Koyeb, and GitHub Pages**:

### **GitHub Pages**
1. **Push your repository to GitHub**
2. Go to **Settings > Pages** in your GitHub repository
3. Under "Source," select the `main` branch and `/ (root)` folder
4. Click **Save**, and your site will be deployed at `https://yourusername.github.io/EthanDupe.github.io`

### **Vercel**
1. Install Vercel CLI and login:
   ```sh
   npm install -g vercel
   vercel login
   ```
2. Deploy the project:
   ```sh
   vercel
   ```

### **Koyeb**
1. Create a **new service** on Koyeb
2. Connect your GitHub repository and select the `main` branch
3. Deploy and access your site from the provided link

## Technologies Used
- **HTML5** (Structure)
- **CSS3** (Styling & Layout)
- **JavaScript** (Matrix Effect & Notifications)

## Customization
### Matrix Background:
To edit the **matrix background**, modify `js/index.js` and `styles.css`.
- Adjust the **canvas size**: `.matrix-canvas { width: 100%; height: 100vh; }`
- Change colors: Modify the **green effect** in `index.js`

### Notification System:
- Edit the notification text in `index.html`:
  ```html
  <div id="notification">BETA V2.2 Update Pushed By Buggz <button onclick="dismissNotification()">Dismiss</button></div>
  ```

## Issues & Contributions
If you find any bugs or have suggestions, feel free to **open an issue** or submit a **pull request**.

## License
This project is licensed under the MIT License.

---
**Created by Buggz and EthanDupe** 🚀

