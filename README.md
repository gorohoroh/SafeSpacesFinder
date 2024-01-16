## About Safe Spaces Finder

Safe Spaces Finder is a sample React Native application that demonstrates using the [Safe Place API](https://developers.amadeus.com/self-service/category/covid-19-and-travel-safety/api-doc/safe-place) by [Amadeus](https://developers.amadeus.com/).

## How to launch Safe Spaces Finder

### 1. On your phone
On your phone, install an app called [Expo Go](https://expo.dev/client) from [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) or the [App Store](https://itunes.apple.com/app/apple-store/id982107779).

### 2. On your computer
1. Make sure you have Node installed on your system. If you don't already have a Node installation, please [download and install the latest Node LTS release](https://nodejs.org/en).
2. Clone this repository and open your local copy in a code editor.
3. At the root of your project, create a new file called `credentials.json` and paste in the following code:
   ```json
   {
     "amadeus": {
       "key": "YOUR_API_KEY",
       "secret": "YOUR_API_SECRET"
     }
   }
   ``
4. Register with [Amadeus for Developers](https://developers.amadeus.com/) to get access to Amadeus for Developers Self-Service APIs.
5. In your [Amadeus for Developers self-service workspace](https://developers.amadeus.com/my-apps), create a new app.
6. Get your Amadeus app's actual API key and API secret and paste them into `credentials.json` instead of `YOUR_API KEY` and `YOUR_API_SECRET`.
7. At the root of the project, install dependencies by running `npm install`.
8. Start the development server for the application: `npx expo start`.
9. When the development server starts, you'll see a QR code in the terminal. Take your phone and scan the QR code with Expo Go (if you're using Android) or the Camera app (if you're on iOS). Safe Spaces Finder will launch on your phone.
