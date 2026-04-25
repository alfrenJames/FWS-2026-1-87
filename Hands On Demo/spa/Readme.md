# 🚀 Minimalist Developer Portfolio

A fast, responsive, and modern Single Page Application (SPA) portfolio built entirely with Vanilla Web Technologies (HTML, CSS, JavaScript). No frameworks, no build tools, just clean code.

## ✨ Features

* **Responsive Design:** Fluid layout that adapts to all screen sizes using CSS Flexbox and Grid.
* **Light/Dark Mode:** Interactive theme toggle that remembers user preferences via `localStorage` with smooth CSS transitions.
* **Mobile Navigation:** Custom hamburger menu with animated side-drawer for mobile devices.
* **Typing Animation:** JavaScript-powered typewriter effect in the hero section.
* **Working Contact Form:** Fully functional form that sends emails directly to my inbox using the Web3Forms API.
* **Blazing Fast:** Zero dependencies or heavy framework bundles.

## 🛠️ How It Was Created

This project was built following a strict "Vanilla" architecture to ensure maximum performance and complete control over the DOM. 

The project is structured into three core files:
1. `index.html`: Contains the semantic structure, accessible form inputs, and SVG icon CDNs (FontAwesome).
2. `style.css`: Handles all styling, custom CSS variables (for theme switching), keyframe animations, and media queries for mobile responsiveness.
3. `script.js`: Manages the interactive elements including the typewriter effect, theme toggle logic, mobile menu state, and handling asynchronous HTTP `fetch` requests for the contact form.

## 💻 Local Setup

To run this project locally, using livesever on your VsCode

## 🌍 Complete Deployment Guide (GitHub & Vercel)

This project is deployed using Vercel, which natively hosts static web pages for free and updates automatically whenever you change your code. Here is the step-by-step guide to get it live.

# Phase 1: Account Creation
Create a GitHub Account: Go to github.com and sign up for a free account. This is where your code will live.

Create a Vercel Account: Go to vercel.com and sign up. Important: When asked how you want to sign up, choose "Continue with GitHub". This automatically links your Vercel account to your code.

# Phase 2: Upload Code to GitHub
On GitHub, click the "+" icon in the top right corner and select "New repository".

Name your repository (e.g., my-portfolio), leave it as "Public", and click "Create repository".

To upload your files, you have two options:

Option A (Easy Drag & Drop): Click the link that says "uploading an existing file" on the GitHub page. Drag and drop your index.html, style.css, and script.js files into the box, then click "Commit changes".

Option B (Using Git in Terminal): Open your terminal inside your project folder and run git commands

# Phase 3: Deploy on Vercel
Log in to your Vercel Dashboard.

Click the black "Add New..." button and select "Project".

Under "Import Git Repository", you will see a list of your GitHub repositories. Find the one you just created (e.g., my-portfolio) and click the "Import" button next to it.

You will be taken to a "Configure Project" screen. Because this is a simple HTML/CSS/JS site, Vercel automatically knows exactly what to do. You do not need to change any settings.

Click the blue "Deploy" button.

# Phase 4: You're Live! 🎉
Vercel will take about 15-30 seconds to build your site. Once it finishes, you will see a preview of your website and a live URL (e.g., my-portfolio-abc123.vercel.app).

Bonus: Anytime you want to update your website, just upload the new files to your GitHub repository. Vercel will detect the change and automatically update your live website!