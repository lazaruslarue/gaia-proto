// Video intent
import xs from 'xstream';

function intent(DOMSource) {

 return xs.merge(
    // GET MORE VIDEOS
   DOMSource.events('click')
      .mapTo({type: 'more'}),
   DOMSource.select('.info').events('click')
      .mapTo({type: 'info'})
  )
}

export default intent;
