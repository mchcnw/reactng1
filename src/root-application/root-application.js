import * as singleSpa from 'single-spa';

singleSpa.declareChildApplication('app-1', () => import('../react/react.app.js'), hashPrefix('/app1'));
singleSpa.declareChildApplication('app-2', () => import('../angularjs/angularjs.app.js'), hashPrefix('/app1'));

singleSpa.start();

function hashPrefix(prefix) {
	return function(location) {
		return location.hash.startsWith(`#${prefix}`);
	}
}
