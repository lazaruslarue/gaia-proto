import xs from 'xstream';

function model(props$, actions$) {

  // THESE ARE THE VIDEO PROPERTIES
  let sanitizedProps$ = props$
    .startWith({title: '', bannerTag: '', tileUrl: ''});

  return sanitizedProps$;

  // return xs.combine(sanitizedProps$)
  //   .map([{title, rating, tile}]) = ({
  //     title,
  //     rating,
  //     tile
  //   })
}

export default model;
