// VideoList Model
import xs from 'xstream';
import Video from '../Video/index';

function insertVideoReducer(action$) {
  return action$
    .map(action  => {
      const titles = action.payload;
      console.log('**titles');
      return titles

    })
}

function model(action$, vidFn) {


  let term$ = action$
    .filter(a => a.type === 'TERM_RESPONSE')
    .map(t => t.payload)

  let details$ = term$
    .map(detail => {
      console.log( 'our detail in model', detail);
      return {
        currentPage: detail.currentPage,
        totalCount: detail.totalCount,
        term: detail.term,
        titles: detail.titles,
      }
    })

  let titles$ = term$
    .map(data => data.titles)
    .fromArray()
    // .map(titles => {
    //   return xs.fromArray(titles)
    // })

  titles$.addListener({
    next: i => console.log(i, 'log'),
    error: i => console.error(i),
    complete: i => console.log('complete'),
  })

  let state$ = xs.combine(details$, titles$)
    .map(([details, titles])=>({
      details$: details,
      titles$: titles
    }))



  return state$
}

export default model;
