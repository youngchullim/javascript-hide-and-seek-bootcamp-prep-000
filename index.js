function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  var children = firstList.children
  var start = 1
  for(var i=0; i<children.length; i++) {
    parseInt((children[i].innerHTML) = ((start + i + n).toString()))
  }
  children = secondList.children
  start = 12
  for(i=0; i<children.length; i++) {
    parseInt((children[i].innerHTML) = ((start - i + n).toString()))
  }
}


function deepestChild() {
  return document.querySelector('div#grand-node ')
}
