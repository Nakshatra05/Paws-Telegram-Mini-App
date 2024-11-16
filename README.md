# Paws Telegram Mini App Clone

## Overview

This project is a clone of the popular Telegram mini app, Paws. The repository providest the completed application featuring:
   - Tab-based navigation
   - Home screen with wallet connection and balance display
   - Leaderboard with rankings
   - Friends invitation system
   - Tasks management system
   - Animated UI elements

## Getting Started

Follow these instructions to get started with either version of the project:

### Cloning the Repository

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Nakshatra05/Paws-Telegram-Mini-App
    cd Paws-Telegram-Mini-App-Clone
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Development Server**:
    ```bash
    npm run dev
    ```

4. **Open Your Browser**:
    Navigate to http://localhost:3000 to see the final version of the application.

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CheckFootprint.tsx
│   ├── NavigationBar.tsx
│   ├── TabContainer.tsx
│   ├── HomeTab.tsx
│   ├── LeaderboardTab.tsx
│   ├── FriendsTab.tsx
│   └── TasksTab.tsx
├── contexts/
│   └── TabContext.tsx
├── icons/
│   └── [icon files]
├── images/
│   └── [image files]
└── utils/
    └── types.ts
```