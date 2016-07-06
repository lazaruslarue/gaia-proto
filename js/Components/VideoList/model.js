
import xs from 'xstream';

function model({props$, action$}) {


  let videosVisible$ = props$.startWith([])
  return videosVisible$
}
