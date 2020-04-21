import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

// export function Root(props) {
//   return <div>Helllo</div>;
// }

// Finally, we specify the location we want single-spa to mount our application
class Root extends React.Component {
  render() {
    const message = 'This was rendered by app 3 which was written in React';

    return <div style={{ marginTop: '100px' }}>{message}</div>;
  }
}

// const Root = () => {
//   return <div>Hello I am functional comp</div>;
// };

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('app1');
  if (!el) {
    el = document.createElement('div');
    el.id = 'app1';
    document.body.appendChild(el);
  }

  return el;
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter,
});

export function bootstrap(props) {
  return lifecycles.bootstrap(props);
}

export function mount(props) {
  return lifecycles.mount(props);
}

export function unmount(props) {
  return lifecycles.unmount(props);
}
