# Chat App

** Chat App** is a mobile chat application built with **React Native** and **Expo**. It provides users with a seamless chat experience where they can send messages, share images, and their location. The app uses **Google Firebase** for real-time data storage and authentication.

---

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup and Installation](#setup-and-installation)
4. [Running the App](#running-the-app)
5. [Firebase Configuration](#firebase-configuration)
6. [Project Screens](#project-screens)

---

## Features

- **Chat Functionality**: Send real-time text messages.
- **Image Sharing**: Share images from your device's gallery or capture new ones.
- **Location Sharing**: Send your current location displayed in a map view.
- **Offline Support**: Messages are available locally even without an internet connection.
- **Anonymous Authentication**: Users are authenticated via Firebase anonymously.
- **Accessibility**: Compatible with screen readers for enhanced usability.

---

## Technologies Used

- **React Native**
- **Expo**
- **Gifted Chat** (Chat UI library)
- **Google Firebase** (Firestore Database, Cloud Storage, Authentication)
- **AsyncStorage** (Local storage)

---

## Setup and Installation

Follow the steps below to set up the development environment and run the app locally:

### 1. Prerequisites

- Node.js (v14 or later)
- Expo CLI: `npm install -g expo-cli`
- Android Studio (for Android Emulator) or Xcode (for iOS Simulator)
- Firebase account with project created

### 2. Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-repository>.git
```

### 3. Install Dependencies

Run the following command to install necessary libraries: `npm install`

   Install Expo Go (on your mobile device)

   - [iOS: Expo Go on the App Store](https://apps.apple.com/us/app/expo-go/id982107779)
   - [Android: Expo Go on Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

## Firebase Configuration

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Enable Firestore Database and Firebase Cloud Storage.
3. Set up Anonymous Authentication in the Authentication tab.
4. Copy your Firebase configuration object:
   ```
   {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   }
   ```

5. Replace the placeholder credentials in `App.js`
   ```
   const App = () = {
      const firebaseConfig = {
   
            // Your web app's Firebase configuration
   
         apiKey: "YOUR_API_KEY",
         authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
         projectId: "YOUR_PROJECT_ID",
         storageBucket: "YOUR_PROJECT_ID.appspot.com",
         messagingSenderId: "YOUR_SENDER_ID",
         appId: "YOUR_APP_ID"
         };
   }
            // Initialize Firebase
   
         firebase.initializeApp(firebaseConfig);
   ```

## Running the App

Start the Expo development server: `npm start`

Use one of the following options to test the app:
 - Android: Scan the QR code using the Expo Go app.
 - iOS: Scan the QR code with the Camera app (Expo Go must be installed).
 - Simulator: Use an emulator (Android Studio or Xcode).

 ##### #############################################################################



# About Chat App with React Native:
To build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location. It works on both iOS and Android devices and utilizes Google Firestore/Firebase for storing messages and images. Guest authentication is handled via Google Firebase authentication.

# Features and Requirements:
## Key Features:
- A page where users can enter their name and choose a background color for the chat screen
before joining the chat.
- A page displaying the conversation, as well as an input field and submit button.
- The chat must provide users with two additional communication features: sending images
and location data.
- Data gets stored online and offline.

## Technologies Used:
- React Native
- Expo
- Expo ImagePicker
- Expo Location
- Google Firestore/Firebase
- Gifted Chat Library
- Android Studio

## Dependencies:
- @react-navigation/native: ^6.1.17
- @react-navigation/native-stack: ^6.9.26
- expo: ~50.0.13
- expo-status-bar: ~1.11.1
- firebase: ^10.3.1
- react: "18.2.0
- react-native: 0.73.5
- react-native-gifted-chat: ^2.4.0
- react-native-safe-area-context: 4.8.2
- react-native-screens: ~3.29.0
- @react-native-async-storage/async-storage: 1.21.0
- @react-native-community/netinfo: 11.1.0
- expo-image-picker: ~14.7.1
- expo-location: ~16.5.5
- react-native-maps: 1.10.0

### Prerequisites
- Node.js

### Google Firestore/Firebase
- create an account and a new project
- obtain the configuration code, and add it to App.js:
- set up the database under build --> Firestore Database
- activate storage
- change rules to: `allow read, write: if true`

## Start the expo project
- `npx expo start`  OR 'npm run start'
To launch in Android emulator, hit option 'a' after. It will automatically load the Chat app from Expo app on the Android Emulator.

## Testing Options
- download and connect the expo app on your mobile device
- Android Studio (android)
- Xcode (iOS)

## Author
-Jerrin