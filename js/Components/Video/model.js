// Video model
import xs from 'xstream';

function model(props$, action$) {

  // THESE ARE THE VIDEO PROPERTIES
  let sanitizedProps$ = props$


  // TODO: update image when we load after click
  // let loading$ = xs.merge(
  //   action$.filter(a => a.type === 'loading').mapTo(true)
  // )
  // .startWith(false);

  // return xs.combine(sanitizedProps$, loading$)
  //   .map(([props, loading]) => ({
  //     ...props,
  //     isLoading: loading
  //   }))
  return props$
}

export default model;
