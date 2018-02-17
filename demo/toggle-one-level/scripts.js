import OrgChart from '../js/orgchart.min.js';

document.addEventListener('DOMContentLoaded', function () {
  let datascource = {
    'name': 'Lao Lao',
    'title': 'general manager',
    'disableDownward': true,
    'children': [
      {'name': 'Su Miao', 'title': 'department manager', 'disableDownward': true, className: 'childrenPlaceholder',
        'children': [
          { 'name': 'Parent goal 1', 'title': 'senior engineer', 'disableDownward': true, className: 'hideParentSibling'},
          { 'name': 'Parent goal 2', 'title': 'senior engineer', 'disableDownward': true, className: 'hideParentSibling'},
          { 'name': 'Parent goal 3', 'title': 'senior engineer', 'disableDownward': true, className: 'hideParentSibling',
            'children': [
              { 'name': 'Hei Hei', 'title': 'senior engineer', 'bidirectional': true, 'hideParentSiblings': true, 'showLines': true,
                'children': [
                  { 'name': 'Pang Pang', 'title': 'engineer',  },
                  { 'name': 'Xiang Xiang', 'title': 'UE engineer',
                    'children': [
                      { 'name': 'Pang Pong', 'title': 'engineer',  }
                    ] 
                  }
                ]
              }
            ]  
          }
        ]
      },
      {'name': 'Su Miao', 'title': 'department manager', 'disableDownward': true, className: 'childrenPlaceholder',
        'children': [
          { 'name': 'Parent goal 1', 'title': 'senior engineer', 'disableDownward': true, className: 'hideParentSibling'},
          { 'name': 'Parent goal 2', 'title': 'senior engineer', 'disableDownward': true, className: 'hideParentSibling'},
          { 'name': 'Parent goal 3', 'title': 'senior engineer', 'disableDownward': true, className: 'hideParentSibling',
            'children': [
              { 'name': 'Hei Hei', 'title': 'senior engineer', 'bidirectional': true, 'hideParentSiblings': true, 'showLines': true,
                'children': [
                  { 'name': 'Pang Pang', 'title': 'engineer',  },
                  { 'name': 'Xiang Xiang', 'title': 'UE engineer',
                    'children': [
                      { 'name': 'Pang Pong', 'title': 'engineer',  }
                    ] 
                  }
                ]
              }
            ]  
          }
        ]
      },
      { 'name': 'Su Miao', 'title': 'department manager', 'disableDownward': true , className: 'childrenPlaceholder',
        'children': [
          { 'name': 'Parent goal 1', 'title': 'senior engineer', 'disableDownward': true, className: 'hideParentSibling'},
          { 'name': 'Parent goal 2', 'title': 'senior engineer', 'disableDownward': true, className: 'hideParentSibling'},
          { 'name': 'Parent goal 3', 'title': 'senior engineer', 'disableDownward': true, className: 'hideParentSibling',
            'children': [
              { 'name': 'Hei Hei', 'title': 'senior engineer', 'bidirectional': true, 'hideParentSiblings': true, 'showLines': true,
                'children': [
                  { 'name': 'Pang Pang', 'title': 'engineer',  },
                  { 'name': 'Xiang Xiang', 'title': 'UE engineer',
                    'children': [
                      { 'name': 'Pang Pong', 'title': 'engineer',  }
                    ] 
                  }
                ]
              }
            ]  
          }
        ]
      }
    ]
  },
  datascource2 = {
    'name': 'Lao Lao',
    'title': 'general manager',
    'disableDownward': true,
    'children': [

      { 'name': 'Su Miao', 'title': 'department manager', 'disableDownward': true , className: 'childrenPlaceholder',
        'children': [
          { 'name': 'Parent goal 1', 'title': 'senior engineer', 'disableDownward': true, className: 'hideParentSibling'},
          { 'name': 'Parent goal 2', 'title': 'senior engineer', 'disableDownward': true, className: 'hideParentSibling'},
          { 'name': 'Parent goal 3', 'title': 'senior engineer', 'disableDownward': true, className: 'hideParentSibling',
            'children': [
              { 'name': 'Hei Hei', 'title': 'senior engineer', 'bidirectional': true, 'hideParentSiblings': true, 'showLines': true,
                'children': [
                  { 'name': 'Pang Pang', 'title': 'engineer',  },
                  { 'name': 'Xiang Xiang', 'title': 'UE engineer',
                    'children': [
                      { 'name': 'Pang Pong', 'title': 'engineer',  }
                    ] 
                  }
                ]
              }
            ]  
          }
        ]
      },
      { 'name': 'Su Miao', 'title': 'department manager', 'disableDownward': true , className: 'childrenPlaceholder',
        'children': [
          { 'name': 'Parent goal 1', 'title': 'senior engineer', 'disableDownward': true, className: 'hideParentSibling'},
          { 'name': 'Parent goal 2', 'title': 'senior engineer', 'disableDownward': true, className: 'hideParentSibling'},
          { 'name': 'Parent goal 3', 'title': 'senior engineer', 'disableDownward': true, className: 'hideParentSibling',
            'children': [
              { 'name': 'Hei Hei', 'title': 'senior engineer', 'bidirectional': true, 'hideParentSiblings': true, 'showLines': true,
                'children': [
                  { 'name': 'Pang Pang', 'title': 'engineer',  },
                  { 'name': 'Xiang Xiang', 'title': 'UE engineer',
                    'children': [
                      { 'name': 'Pang Pong', 'title': 'engineer',  }
                    ] 
                  }
                ]
              }
            ]  
          }
        ]
      }
    ]
  },
  orgchart = new OrgChart({ 
    'chartContainer': '#chart-container',
    'data' : datascource,
    'depth': 6,
    'chartClass': 'chart1',
    'verticalDepth':3,
    'verticalDepthEnd': 4,
    'nodeContent': 'title',
    'toggleSiblingsResp': false, // disable vertical arrows
    'hideOnlyParent': true, // hide only immediate parent not grandparent
    'hideSiblings': false, // hide parent siblings
    'topEdgeArrow': {
      'class': {
        'open': 'arrow-double-up',
        'close': 'arrow-double-down'
      }
    },
    'animateLines': false,
    'hiddenRow': 2 
  }),
  orgchart2 = new OrgChart({ 
    'chartContainer': '#chart-container',
    'data' : datascource2,
    'depth': 4,
    'chartClass': 'chart2',
    'verticalDepth':3,
    'verticalDepthEnd': 4,
    'nodeContent': 'title',
    'toggleSiblingsResp': false,
    'hideOnlyParent': true,
    'hideSiblings': false,
    'topEdgeArrow': {
      'class': {
        'open': 'arrow-double-up',
        'close': 'arrow-double-down'
      }
    },
    'bottomEdgeArrow': {
      'class': {
        'open': 'arrow-double-up',
        'close': 'arrow-double-down'
      }
    },
    'arrowClasses': 'arrow-'
  });

  function closest(el, fn) {
    return el && ((fn(el)) ? el : closest(el.parentNode, fn));
  }
  function isVisible(el) {
    return !!(el.hidden || el.offsetWidth || el.offsetHeight || el.getClientRects().length)
  }
  function siblings(el, expr) {
    return Array.from(el.parentNode.children).filter((child) => {
      if (child !== el) {
        if (expr) {
          return el.matches(expr);
        }
        return true;
      }
      return false;
    });
  }

  function getNodeState(node, relation) {
    let criteria,
      state = { 'exist': false, 'visible': false };

    if (relation === 'parent') {
      criteria = closest(node, (el) => el.classList && el.classList.contains('nodes'));
      if (criteria) {
        state.exist = true;
      }
      if (state.exist && isVisible(criteria.parentNode.children[0])) {
        state.visible = true;
      }
    } else if (relation === 'children') {
      criteria = closest(node, (el) => el.nodeName === 'TR').nextElementSibling;
      if (criteria) {
        state.exist = true;
      }
      if (state.exist && isVisible(criteria)) {
        state.visible = true;
      }
    } else if (relation === 'siblings') {
      criteria = siblings(closest(node, (el) => el.nodeName === 'TABLE').parentNode);
      if (criteria.length) {
        state.exist = true;
      }
      if (state.exist && criteria.some((el) => isVisible(el))) {
        state.visible = true;
      }
    }

    return state;
  }

  function prevAll(el, expr) {
    let sibs = [],
      prevSib = el.previousElementSibling;

    while (prevSib) {
      if (!expr || prevSib.matches(expr)) {
        sibs.push(prevSib);
      }
      prevSib = prevSib.previousElementSibling;
    }
    return sibs;
  }

  function findChild(element, className) {
    var foundElement = null, found;
    function recurse(element, className, found) {
      for (var i = 0; i < element.childNodes.length && !found; i++) {
        var el = element.childNodes[i];
        var classes = el.className != undefined? el.className.split(" ") : [];
        for (var j = 0, jl = classes.length; j < jl; j++) {
          if (classes[j] == className) {
            found = true;
            foundElement = element.childNodes[i];
            break;
          }
        }
        if(found)
          break;
        recurse(element.childNodes[i], className, found);
      }
    }
    recurse(element, className, false);
    return foundElement;
  }

  function findParents(element, id, className, tagName){
    let el = element,
      criteria = id ? 'id' : className ? 'className' : 'tagName',
      parents = [];
    
    while (el) {
      el = el.parentNode;

      switch(criteria){
        case 'id':
          // search for id
          break;
        case 'className':
          // search for classNames
          if(el && el.className && el.className.indexOf(className) > -1){
            parents.push(el);        
          }
          break;
        default:
          if(el && el.nodeName === tagName.toUpperCase()){
            parents.push(el);        
          }
          // search for tags
      }
    }

    return parents;
  }

  function findSiblings(element){
    const sibs = [];
    let nextSib = element.nextSibling;
    let prevSib = element.previousSibling;

    while (prevSib) {
      sibs.unshift(prevSib);
      prevSib = prevSib.previousSibling;
    }
    while (nextSib) {
      sibs.push(nextSib);
      nextSib = nextSib.nextSibling;
    }

    return sibs;
  }
});