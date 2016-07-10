import xs from 'xstream';
import isolate from '@cycle/isolate';
import {div, h1} from '@cycle/dom'
import intent from './intent';
import model from './model';
import view from './view';
import Video from '../Video/index';

function amendStateWithVideos(DOMSource) {
  console.log(DOMSource)
  return function (videosData) {
    // the list of videos get ammended.
console.log('firststest**********************')

    return {
      ...videosData,
      titles: videosData.titles.map(data => {
        // turn the data into an Observable
        console.log('test',data)
        let props$ = xs.of(data);
        // Create scoped video component
        let videoItem = isolate(Video)({DOM: DOMSource, props$});

        // return the new data
        return {
          ...data,
          // this is the new property containing the DOM for the new Video
          videoItem: {
            DOM: videoItem.DOM,
            action$: videoItem.action$.map(ev => { id: data.id})
          }
        }
      })
    }
  }
}

function VideoList(sources) {
  let GAIA_URL = 'http://www.gaia.com/api/videos/term/119931';
  let request$ = xs.of({
    url: GAIA_URL,
    headers: {
      Accept: 'application/json'
    },
    category: 'video_list'
  });

  //our list of videos!!
  let response$ = sources.HTTP
    .select('video_list')
    .flatten()


  // The initial video data
  let sourceVideos$ = response$.map(res => {
    console.log('body',res.body);
    return res.body})

  // a stream to proxy actions from each video in the list
  let proxyVideoAction$ = xs.create();
  // actions by the user
  let action$ = intent(sources.DOM, proxyVideoAction$);

  // what's visible, what's known, what else?
  let state$ = model(sourceVideos$, action$);

  let amendedState$ = state$
    .map(amendStateWithVideos(sources.DOM))
    .remember()

  // fake ass dom... 'til it's rendered
  let vtree$ = view(amendedState$);

  let sinks = {
    DOM: vtree$,
    HTTP: request$
  }

  return sinks;
}

export default VideoList;
