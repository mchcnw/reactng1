import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from './reactroot.component.js';

const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Root,
	domElementGetter,
});

export function bootstrap() {
	return reactLifecycles.bootstrap();
}

export function mount() {
	return reactLifecycles.mount();
}

export function unmount() {
	return reactLifecycles.unmount();
}

function domElementGetter() {
	// Make sure there is a div for us to render into
	let el = document.getElementById('react');
	if (!el) {
		el = document.createElement('div');
		el.id = 'react';
		document.body.appendChild(el);
	}

	return el;
}
