import * as singleSpa from 'single-spa';

// singleSpa.registerApplication(
//   'app-1',
//   () => import('../app1/app1.js'),
//   pathPrefix('/app1')
// );

singleSpa.registerApplication(
  'app-2',
  () => import('../app2/app2.js'),
  pathPrefix('/app2')
);

singleSpa.registerApplication(
  'react-mf-navbar',
  () =>
    scriptTagApp(
      'http://localhost:8081/build/react-mf-navbar.js',
      'react-mf-navbar'
    ),
  pathPrefix('/app3')
);

function scriptTagApp(url, globalVarName) {
  return new Promise((resolve, reject) => {
    const scriptEl = document.createElement('script');
    scriptEl.src = url;
    scriptEl.async = true;
    scriptEl.onload = () => resolve(window[globalVarName]);
    scriptEl.onerror = (err) => reject(err);
    document.head.appendChild(scriptEl);
  });
}

singleSpa.start();

function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(`${prefix}`);
  };
}
