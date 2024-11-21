<template>
    <div
        id="app"
        :class="
            typeof weather.main != 'undefined' && weather.main.temp > 10
                ? 'warm'
                : ''
        "
    >
        <main>
            <div class="search-box">
                <input
                    type="text"
                    class="search-field"
                    placeholder="Type in the city name..."
                    v-model="query"
                    @keypress="fetchWeather"
                />
            </div>
            <h1 class="title">{{ message }}</h1>
            <div>
                <ul>
                    <li v-for="(item, index) in items" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </div>

            <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
                <div class="location-wrapper">
                    <div class="location">
                        {{ weather.name }}, {{ weather.sys.country }}
                    </div>
                </div>

                <div class="weather-field">
                    <div class="temp">
                        {{ Math.round(weather.main.temp) }}°C
                    </div>
                    <div class="weather">{{ weather.weather[0].main }}</div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
    export default {
        name: 'App',
        props: {
            apiKey: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                api_key: '49a0e74c2597974cdbc787bc28c7c4e7',
                url_base: 'https://api.openweathermap.org/data/2.5/',
                query: '',
                weather: {},
                message: 'Check the weather',
                items: [
                    '1-Type in the city name',
                    '2-Press enter',
                    '3-See the weather!'
                ]
            }
        },
        methods: {
            fetchWeather(e) {
                if (e.key == 'Enter') {
                    fetch(
                        `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
                    )
                        .then((res) => {
                            return res.json()
                        })
                        .then(this.setResults)
                }
            },
            setResults(results) {
                this.weather = results
            }
        }
    }
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Gluten:wght@300;400;500&display=swap');
    /* Reset default styles */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Gluten', cursive;
    }

    #app {
        background-image: url('../assets/img/cold.png');
        background-size: cover;
        background-position: bottom;
        transition: background-image 0.4s ease-in-out;
    }
    #app.warm {
        background-image: url('../assets/img/clear.png');
    }
    main {
        min-height: 100vh;
        padding: 25px;
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.2)
        );
    }
    .search-box {
        margin-bottom: 20px;
    }

    .search-box .search-field {
        margin-top: 50px;
        width: 100%;
        display: block;
        padding: 15px;
        color: #313131;
        font-size: 20px;
        appearance: none;
        border: none;
        outline: none;
        background: none;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 0px 0px 0px 0px;
        transition: box-shadow 0.5s ease-in-out,
            background-color 0.5s ease-in-out, border-radius 0.5s ease-in-out;
    }
    .search-box .search-field:focus {
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
        background-color: rgba(255, 255, 255, 0.75);
        border-radius: 16px 16px 16px 16px;
        font-weight: bold;
        width: 100%;
        height: 62px;
    }
    .location-wrapper {
        text-align: center;
        margin-top: 10px;
    }
    .location-wrapper .location {
        font-size: 32px;
        font-weight: 500;
        color: #fff;
        text-align: center;
    }
    .weather-field {
        text-align: center;
    }
    .weather-field .temp {
        display: inline-block;
        padding: 10px 25px;
        font-size: 95px;
        font-weight: 500;
        color: aliceblue;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        margin: 30px 0px;
    }

    .weather-field .weather {
        font-size: 40px;
        font-weight: 500;
        color: #fff;
    }
    .title {
        margin-left: 70vh;
        margin-right: 70vh;
    }
</style>
