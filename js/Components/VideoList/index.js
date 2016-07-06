import xs from 'xstream';
import isolate from '@cycle/isolate';
import intent from './intent';
import model from './model';
import view from './view';
import Video from '../Video/index';

function amendStateWithVideos(DOMSource) {
  return function (videosData) {
    ...videosData,
    // the list of videos get ammended.
    list: videosData.list.map(data => {
      // turn the data into an Observable
      let props$ = xs.of(data);
      // Create scoped video component
      let videoItem = isolate (Video)({DOM: DOMSource, props$});

      // return the new data
      return {
        ...data,
        // this is the new property containing the DOM for the new Video
        videoItem: {
          DOM: videoItem.DOM,
          action$: videoItem.action$.map(ev => (...ev, id: data.id))
        }
      }

    })
  }
}

// our list of videos!!
function VideoList(sources) {
  let GAIA_URL = 'http://www.gaia.com/api/videos/term/119931';
  let request$ = xs.of(GAIA_URL);
  // The Localstorage stream that only reads the first value on localstorage
  // gives us an initial state.
  let localStorage$ = sources.storage.local..getItem('gaia').take(1);
  // The initial video data
  let vtree$ = sources.HTTP
    .byUrl(GAIA_URL)
    .mergeAll()
    .flatMap(res => res.text())
    .startWith('Loading')
    .map(text =>
      div('.container', [
        h1('.text', text)
      ])
    )
  return {
    DOM: vtree$,
    HTTP: request$
  }
}
