// Video intent
import xs from 'xstream';
// import {ENTER_KEY, ESC_KEY} from '../../utils';

function intent(DOMSource) {
console.log(DOMSource)
 return xs.merge(
    // GET MORE VIDEOS
   DOMSource.select('3more').events('click')
      .mapTo({type: 'more'}),
    DOMSource.select('.info').events('click')
      .mapTo({type: 'info'})
    // DOMSource.select('.toggle').events('change')
    //   .mapTo({type: 'toggle'}),


  )
}

export default intent;
