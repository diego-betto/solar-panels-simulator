import 'dotenv/config'
import { randFloat } from '@ngneat/falso'
import express from 'express'

const serverPort = parseInt(process.env.SIM_SERVER_PORT || 3000, 10)

const panels = parseInt(process.env.SIM_PANELS_N || 10, 10)
const batteries = parseInt(process.env.SIM_BATTERIES_N || 3, 10)
const delay = parseInt(process.env.SIM_DELAY || 0, 10)

const panelsProblemsEveryN  = parseInt(process.env.SIM_PANELS_PROBLEMS_N || 0, 10)
const batteriesProblemsEveryN  = parseInt(process.env.SIM_BATTERIES_PROBLEMS_N || 0, 10)
const batteriesTempProblemsEveryN  = parseInt(process.env.SIM_BATTERIES_TEMP_PROBLEMS_N || 0, 10)
const delayProblemEveryN  = parseInt(process.env.SIM_DELAY_PROBLEM_N || 0, 10)

const app = new express()

app.use(express.json())

let counterPanels = 0;
let counterBatteries = 0;
let counterOutput = 0;

app.get('/status/panels', (req, res) => {
    counterPanels++;
    console.log(`Request PANELS, counter ${counterPanels} - sim. problems every ${panelsProblemsEveryN}-${(counterPanels % panelsProblemsEveryN === 0)}`)

    const output = [ ...Array(panels).keys() ].map( i => ({
        voltage: randFloat(
            panelsProblemsEveryN > 0 && (counterPanels % panelsProblemsEveryN === 0) ? 
            {min: 0, max: 21}:
            {min: 20, max: 25}
        ),
    }))

    if (delayProblemEveryN > 0 && delay > 0 && (counterPanels % delayProblemEveryN === 0)) {
        setTimeout(() => {
            res.json(output)
        }, delay)
    } else {
        res.json(output)
    }
})

app.get('/status/batteries', (req, res) => {
    counterBatteries++;
    console.log(`Request BATTERIES, counter ${counterBatteries} - sim. problems every ${batteriesProblemsEveryN}-${(counterBatteries % batteriesProblemsEveryN === 0)}`)

    const output = [ ...Array(batteries).keys() ].map( i => ({
        voltage: randFloat(
            batteriesProblemsEveryN > 0 && (counterBatteries % batteriesProblemsEveryN === 0) ? 
            {min: 0, max: 25}:
            {min: 20, max: 25}
        ),
        temperature: 50 + randFloat({
            min: 0, 
            max: (
                batteriesTempProblemsEveryN > 0 &&
                counterBatteries % batteriesTempProblemsEveryN  === 0 
            ) ?  100: 10
        })
    }))

    if (delayProblemEveryN > 0 && delay > 0 && (counterBatteries % delayProblemEveryN === 0)) {
        setTimeout(() => {
            res.json(output)
        }, delay)
    } else {
        res.json(output)
    }
})

app.get('/status/loads', (req, res) => {
    counterOutput++;
    console.log(`Request LOADS, counter ${counterOutput} - sim. problems every  ${delayProblemEveryN}-${ (counterOutput % delayProblemEveryN === 0)}`)

    const output = {
        outputLoad: 40 + randFloat({min: 0, max: 10})
    }

    if (delayProblemEveryN > 0 && delay > 0 && (counterOutput % delayProblemEveryN === 0)) {
        setTimeout(() => {
            res.json(output)
        }, delay)
    } else {
        res.json(output)
    }
})

app.listen(serverPort, () => console.log(`Simulator started: http://localhost:${serverPort}`))