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


  return xs.merge(
    response$
    // TODO: more intent plz
  )

}
