import 'dotenv/config'
import { randFloat } from '@ngneat/falso'
import express from 'express'

const serverPort = parseInt(process.env.SIM_SERVER_PORT || 3000, 10)

const panels = parseInt(process.env.SIM_PANELS_N || 5, 10)
const batteries = parseInt(process.env.SIM_BATTERIES_N || 5, 10)
const delay = parseInt(process.env.SIM_DELAY || 0, 10)

const panelsProblemsEveryN  = parseInt(process.env.SIM_PANELS_PROBLEMS_N || 0, 10)
const batteriesProblemsEveryN  = parseInt(process.env.SIM_BATTERIES_PROBLEMS_N || 0, 10)
const delayProblemEveryN  = parseInt(process.env.SIM_DELAY_PROBLEM_N || 0, 10)

const app = new express()

app.use(express.json())

let counter = 0;

app.get('/status', (req, res) => {
    counter++;

    const output = {
        panels: [ ...Array(panels).keys() ].map( i => ({
            voltage: randFloat(
                    panelsProblemsEveryN > 0 && (counter % panelsProblemsEveryN === 0) ? 
                    {min: 0, max: 25}:
                    {min: 20, max: 25}
                ),
        })),
        batteris: [ ...Array(batteries).keys() ].map( i => ({
            voltage: randFloat(
                batteriesProblemsEveryN > 0 && (counter % batteriesProblemsEveryN === 0) ? 
                {min: 0, max: 25}:
                {min: 20, max: 25}
            ),
        })),
        outputLoad: 40 + randFloat({min: 0, max: 10})
    }

    if (delayProblemEveryN > 0 && delay > 0 && (counter % delayProblemEveryN === 0)) {
        setTimeout(() => {
            res.json(output)
        }, delay)
    } else {
        res.json(output)
    }
})

app.listen(serverPort, () => console.log(`Simulator started: http://localhost:${serverPort}`))