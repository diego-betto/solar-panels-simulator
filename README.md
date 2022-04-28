# Solar Panels Simulator

Generates JSON responses like these

`/status/panels`

```JSON
[
  {
    "voltage": 20.24
  },
  {
    "voltage": 23.38
  },
  {
    "voltage": 23.18
  },
  {
    "voltage": 21.54
  },
  {
    "voltage": 24.43
  },
  {
    "voltage": 24.53
  },
  {
    "voltage": 23.73
  },
  {
    "voltage": 22.2
  },
  {
    "voltage": 23.93
  },
  {
    "voltage": 22.28
  }
]
```


`/status/batteries`
```JSON
[
  {
    "voltage": 23.55,
    "temperature": 58.230000000000004
  },
  {
    "voltage": 21.47,
    "temperature": 57.92
  },
  {
    "voltage": 21.89,
    "temperature": 52.31
  }
]
```

`/status/loads`
```JSON
{
  "outputLoad": 45.81
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

