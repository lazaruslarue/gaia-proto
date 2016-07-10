// VideoList View
import {button, div, input, label, li, h3} from '@cycle/dom';

function view(state$) {
  console.log('view in video working')
  return state$.map( (title, bannerTag, url) => {
console.log('another test in video list')
    let videoRootClasses = {
      bannerTag: bannerTag,
      url: url,
    };
console.log(videoRootClasses)
    return li('.videoRoot', {class: videoRootClasses}, [
      div('.view', [
        button('.get-more', 'get more button'),
        label(title)
      ]),
      h3('.vid-url', url)
    ])
  })
}

export default view;
