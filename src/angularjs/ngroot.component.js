import angular from 'angular';
import template from './ngroot.template.html';
import {actionSubject} from '../common/actionObservable.js';

angular
.module('single-spa-app')
.component('ngroot', {
	template,
	controllerAs: 'vm',
	controller($scope) {

		const vm = this;

		vm.styles = {};
		vm.onButtonClick = onButtonClick;
		vm.txt = 'hello from angularjs';
		vm.message ='';

		vm.actionSubscription$ = null;

		vm.$onInit = () => {
			vm.actionSubscription$ = actionSubject.subscribe(newValue => vm.message = newValue);
		};		

		vm.$onDestroy = () => {
			vm.actionSubscription$.dispose();
		}

		vm.onButtonClick = () => {
			actionSubject.next(vm.message);

		}
	}
})
