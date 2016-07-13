import xs from 'xstream';
import dropRepeats from 'xstream/extra/dropRepeats';



// intent for the video list
export default function intent(sources, actions$) {

  let DOMSource = sources.DOM
  let HTTPSource = sources.HTTP

  // responses from server
  let response$ = HTTPSource
    .select('request')
    .flatten()
    .map(res => res.body)
    .map(msg => ({ type: 'TERM_RESPONSE', payload: msg }))

  // videos added to the list
  let addVideo$ = actions$.filter( a => a.type === 'ADD_VIDEO')
    .map(action  => ({...action, type: 'addVideo'}))

  return xs.merge(
    response$,
    addVideo$
    // TODO: more intent plz
  )

}
