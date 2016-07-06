import {button, div, input, label, li} from '@cycle/dom';

function view(state$) {
  return state$.map( ({title, bannerTag, url}) => {
    console.log('vie2w')
    let videoRootClasses = {
      bannerTag: bannerTag,
      url: url,
    };
    console.log('view')
    return li('.videoRoot', {class: videoRootClasses}, [
      div('.view', [
        button('.get-more'),
        label(title)
      ]),
      h3('.vid-url', url)
    ])
  })
}

export default view;
