# Solar Panels Simulator

## Start
- run `npm i`
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
- `SIM_DELAY_PROBLEM_N`: how often a delay problem should be simulated, default `0`

## Test
In [server.http](http/server.http) you can find a testable request.

