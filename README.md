# Instagram Feed UI Design

A modern Instagram-inspired UI built with React Native, Expo, and various UI libraries.

## Features

- Instagram-like feed with posts, carousels, and interactions
- Like animation with haptic feedback
- Navigation between tabs (Home, Search, Create, Activity, Profile)
- Responsive design for iOS, Android, and Web

## Tech Stack

- **React Native**: Core framework for mobile development
- **Expo**: Development platform for React Native
- **NativeWind**: Tailwind CSS for React Native
- **React Navigation**: Navigation between screens
- **Expo Router**: File-based routing
- **Zustand**: State management
- **Expo Image**: Advanced image handling
- **Lucide React Native**: Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/muditsengar/Rork_InstaApp.git
cd Rork_InstaApp
```

2. Install dependencies:
```bash
npm install
```

### Running the App

- **Web Browser**:
```bash
npm run start-web
```

- **iOS/Android** (using Expo Go):
```bash
npm start
```

## Setting up EAS (Expo Application Services)

Follow these steps to set up EAS for building and deploying your app:

1. Install the EAS CLI globally:
```bash
npm install -g eas-cli
```

2. Log in to your Expo account:
```bash
eas login
```

3. Initialize EAS in your project:
```bash
eas init
```

4. Configure build profiles:
```bash
eas build:configure
```

5. Create a build for your desired platform(s):
```bash
# For all platforms
eas build --platform all

# For specific platforms
eas build --platform ios
eas build --platform android
```

6. Submit to app stores (optional):
```bash
eas submit --platform ios
eas submit --platform android
```

## Project Architecture

### Directory Structure

- `/app`: Main application code using Expo Router file-based routing
  - `/(tabs)`: Tab-based navigation screens
- `/assets`: Images and static assets
- `/components`: Reusable UI components
- `/constants`: App-wide constants and theme settings
- `/mocks`: Mock data for development

### Component Architecture

The app follows a component-based architecture where each UI element is built as a reusable component:

- `Post.tsx`: Main post component
- `PostHeader.tsx`: Post author information
- `PostCarousel.tsx`: Image carousel for multiple images
- `PostFooter.tsx`: Like, comment, and share actions
- `LikeAnimation.tsx`: Double-tap heart animation

## License

MIT

## Acknowledgments

- Design inspiration from Instagram
- Built with Expo and React Native 