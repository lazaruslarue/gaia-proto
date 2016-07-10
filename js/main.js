// Main.js in Application
import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import {makeHTTPDriver} from '@cycle/http'
import VideoList from './Components/VideoList'

const main = VideoList;

const drivers = {
  DOM: makeDOMDriver('#root'),
  HTTP: makeHTTPDriver(),
};

run(main, drivers);
