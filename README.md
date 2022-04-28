# Solar Panels Simulator

Generates a JSON response at `/status` endpoint like this 
```JSON
{
  "panels": [
    {
      "voltage": 21.28
    },
    {
      "voltage": 23.31
    },
    {
      "voltage": 21.49
    },
    {
      "voltage": 22.24
    },
    {
      "voltage": 21.77
    }
  ],
  "batteries": [
    {
      "voltage": 21.32,
      "temperature": 55.67
    },
    {
      "voltage": 23.87,
      "temperature": 55.91
    },
    {
      "voltage": 23.76,
      "temperature": 54.89
    },
    {
      "voltage": 22.78,
      "temperature": 57.08
    },
    {
      "voltage": 23.63,
      "temperature": 55.43
    }
  ],
  "outputLoad": 44.05
}
```

## Start
- run `npm i`
- run `npm run dev` to start the server in dev mode
- run `npm run start` to start the server

You can also run `start:problems:panels` or `start:problems:batteries` to simulate preconfigured problems (every 10).

Use `.env` file to configure your simulation environment (or change/add scripts in [`package.json`](package.json#10))

## Optional env variables
- `SIM_SERVER_PORT`: server port, default `3000`
- `SIM_DELAY`: response delay (ms, only when `SIM_DELAY_PROBLEM_N` is greater then 0)
- `SIM_PANELS_N`: number of panels, default `5`
- `SIM_BATTERIES_N`: number of batteries, default `5`
- `SIM_PANELS_PROBLEMS_N`: how often a panels problem should be simulated, default `0`
- `SIM_BATTERIES_PROBLEMS_N`: how often a batteries problem should be simulated, default `0`
- `SIM_BATTERIES_TEMP_PROBLEMS_N`: how often a batteries temperature problem should be simulated, default `0`
- `SIM_DELAY_PROBLEM_N`: how often a delay problem should be simulated, default `0`

## Test
In [server.http](http/server.http) you can find a testable request.

