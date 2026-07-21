# 🎬 NicheForge

NicheForge is a web-based YouTube branding and content generator that helps you kickstart your channel. Built with Node.js, Express, EJS, and the Google Gemini API, it generates complete branding packages based on any niche you provide.

## ✨ Features

Enter a niche (e.g., "cooking", "tech", "fitness") and NicheForge instantly generates:
- **Channel Names**: 5 short and brandable name ideas
- **Channel Bio**: A compelling description for your channel's "About" page
- **Logo & Banner Prompts**: Clean AI image prompts you can use in tools like Midjourney or DALL-E
- **Video Captions**: 5 catchy captions for your videos or shorts
- **Video Description**: A ready-to-use description for your uploads
- **Tags**: 10 optimized, unique tags for better discoverability
- **One-Click Copy**: Easily copy any generated text with a single click

## 🛠️ Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed **Node.js** (v18 or newer recommended).
* You have a **Google Gemini API Key**. You can get one from Google AI Studio.

## 🚀 Setup & Installation

1. **Clone the repository** (or download and extract the files).

2. **Navigate to the project directory** in your terminal:
   ```bash
   cd "content generator" # or whatever the folder name is
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Set up Environment Variables**:
   Create a new file named `.env` in the root of the project directory. Add the following lines, replacing the placeholder with your actual API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=3000
   ```

5. **Start the application**:
   ```bash
   node index.js
   ```

6. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## 📋 Required Data & Missing Information

The app is fully functional based on the current codebase! However, could you provide any additional data if you’d like me to customize it further? For example:
- Are there specific styles or CSS frameworks (like Tailwind or Bootstrap) you want documented? (I see Bootstrap classes currently in use).
- Any deployment platform instructions (e.g., Heroku, Vercel, Render) you want added to the setup guide?
- Do you want to add screenshots to the README?

Let me know if you need any adjustments or additions to this guide!
