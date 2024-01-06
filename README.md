# WeatherApp

Here is a weather app created with React and Vite! Inspired by [this](https://github.com/Techtonica/curriculum/blob/main/projects/weather-app.md) assignment. This app will provide the current temperature and other basic weather information for any city in the world.

### How to run this project locally:

1. Clone the project.

2. Install dependencies by running `npm install`.

3. Create a `.env` file in the server folder and provide a Open Weather Map API key, found [here](https://openweathermap.org/api).

4. In `.env`, add your Open Weather Map API key in this format: `API_KEY=xxx`.

5. In the client folder, create a `.env.local`file. In `.env.local`, add your local URL in this format: `VITE_BASE_API_URL=http://localhost:8080`.

6. `cd` to both client and server folders (I recommend using a split screen in your terminal or opening two shell windows) and run `npm run dev` to start the server and launch the front end in your browser.
