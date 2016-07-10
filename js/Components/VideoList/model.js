// VideoList Model
import xs from 'xstream';

function model(props$, action$) {

  let videosVisible$ = props$
    .map((obj) => {
      return {
        currentPage: obj.currentPage,
        totalCount: obj.totalCount,
        term: obj.term,
        titles: obj.titles,
      }
    })
  return videosVisible$
}

export default model;
