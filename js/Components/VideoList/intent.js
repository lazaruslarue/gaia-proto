import xs from 'xstream';
import dropRepeats from 'xstream/extra/dropRepeats';
import {ENTER_KEY, ESC_KEY} from '../../utils';

// intent for the video list
export default function intent(DOMSource, itemAction$) {
  return xs.merge(
    // the list of clicks
    DOMSource.select('a').events('click')
      .map(event=> event.target.hash.replace('#', ''))
      .map(payload => ({type: 'url', payload})),
    // actions on videos in the list
    itemAction$.filter(action => action.type === 'toggle')
      .map(action => {type: 'toggle', action})
  )
}
