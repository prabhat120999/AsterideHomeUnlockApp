# Asteride Home Unlock App

This is a basic mobile application built using React Native and Expo that allows real estate companies to remotely unlock homes for potential buyers to view.

## Features

- **Login Screen**: Simple login functionality.
- **Home List**: Displays a list of homes with basic information.
- **Home Details**: Shows detailed information about the selected home and provides an unlock feature.
- **Unlock Feature**: Unlock button is enabled only if the user is within 30m of the home.
- **Push Notifications**: Notifications are sent to the user when the home is unlocked and to the admin when the user is near the home (Bonus).

## Setup and Running the App

1. **Clone the repository**:
    ```
    git clone https://github.com/your-username/AsterideHomeUnlockApp.git
    cd AsterideHomeUnlockApp
    ```

2. **Install dependencies**:
    ```
    npm install
    ```

3. **Start the Expo server**:
    ```
    expo start
    ```

4. **Run on your device**:
    - Use the Expo Go app on your mobile device to scan the QR code generated by the Expo server.
  
## Mock API

The app uses a mock API to fetch home data. The data is stored in the `data/homes.json` file.

## Code Structure

- **App.js**: Main entry point, sets up navigation and push notifications.
- **screens/**: Contains screen components (Login, HomeList, HomeDetail).
- **components/**: Reusable UI components.
- **data/**: Mock data in JSON format.
- **assets/**: Contains images and other static assets.

## License

This project is licensed under the MIT License.