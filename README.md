# Weather App 🌦️

Welcome to the Weather App! This is a React Native project created with [Expo](https://expo.dev) that provides current weather, upcoming weather forecasts, and city information.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Weather App is designed to provide users with up-to-date weather information, including current weather conditions, upcoming weather forecasts, and detailed city information. The app uses the OpenWeatherMap API to fetch weather data.

## Features

- View current weather conditions
- View upcoming weather forecasts
- Detailed city information including population, sunrise, and sunset times
- Responsive design for different screen sizes

## Installation

To get started with the Weather App, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

   ```bash
   APIKEY=your_api_key_here
   ```

4. Start the app:

   ```bash
   npx expo start
   ```

## Usage

In the output, you'll find options to open the app in a:

- Development build
- Android emulator
- iOS simulator
- Web browser

## Technologies Used

- React Native
- Expo
- TypeScript
- OpenWeatherMap API
- React Navigation
- Moment.js

## Project Structure

```
.
├── assets
│   ├── images
│   │   ├── icon.png
│   │   ├── splash.png
│   │   ├── adaptive-icon.png
│   │   └── clouds.jpg
├── components
│   ├── IconText.tsx
│   ├── ListItem.tsx
│   ├── RowText.tsx
│   └── Tabs.tsx
├── hooks
│   └── useGetWeather.ts
├── screens
│   ├── City.tsx
│   ├── CurrentWeather.tsx
│   └── UpcomingWeather.tsx
├── utilities
│   └── weatherType.ts
├── App.tsx
├── app.json
├── babel.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing

Contributions are welcome! Please read the contributing guidelines first.

## License

This project is licensed under the MIT License.