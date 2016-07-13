import xs from 'xstream';
import isolate from '@cycle/isolate';
import {div, h1} from '@cycle/dom'
import intent from './intent';
import model from './model';
import view from './view';
import Video from '../Video/index';

function amendStateWithVideos(DOMSource) {
  return function (state) {
    // the list of videos get ammended.

    return {
      // all our original data
      ...state,
      // ammended with a list of isolated Videos
      videoList: state.titles$.map(data => {
        // turn the data into an Observable
        let props$ = xs.of(data);
        console.log('data',data);
        // Create scoped video component
        let videoItem = isolate(Video)({DOM: DOMSource, props$});
        // return the new data
        return {
          ...data,
          // this is the new property containing a DOM & action stream
          // for each Video
          videoItem: {
            DOM: videoItem.DOM,
            // action$: videoItem.action$
          }
        }
      })
    }
  }
}

function makeVideoWrapper (DOM) {
  return function videoWrapper(props) {
    const video = isolate(Video)({DOM, props$: xs.of(props)})
    return {
      DOM: item.DOM,
    }
  }
}

function VideoList(sources) {


  //get initial request data
  let GAIA_URL = 'http://www.gaia.com/api/videos/term/119931';
  let request$ = xs.of({
    url: GAIA_URL,
    headers: {
      Accept: 'application/json'
    },
    category: 'request'
  });


  let actions$ = intent(sources);
  let state$ = model(actions$, makeVideoWrapper(sources.DOM))

  // dom...
  let vtree$ = view(state$);

  let sinks = {
    DOM: vtree$,
    HTTP: request$
  }

  return sinks;
}

export default VideoList;
