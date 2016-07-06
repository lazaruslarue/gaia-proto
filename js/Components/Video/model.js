import xs from 'xstream';

function model({props$, actions$}) {

  // THESE ARE THE VIDEO PROPERTIES
  let sanitizedProps$ = props$.startWith({title: '', bannerTag: '', tileUrl: ''});


  // TODO: i think this is where we make the HTTP call



  return sanitizedProps$;

  // return xs.combine(sanitizedProps$)
  //   .map([{title, rating, tile}]) = ({
  //     title,
  //     rating,
  //     tile
  //   })
}

export default model;
