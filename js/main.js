import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import {makeFetchDriver} from '@cycle/fetch'
import VideoList from './Components/VideoList'
import Video from './Components/Video'

const drivers = {
  DOM: makeDOMDriver('#root'),
  HTTP: makeFetchDriver(),
};

run(Video, drivers);
