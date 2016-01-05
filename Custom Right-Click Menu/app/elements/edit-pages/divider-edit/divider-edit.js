﻿Polymer({
	is: 'divider-edit',

	behaviors: [Polymer.NodeEditBehavior],

	properties: {
		item: {
			type: Object,
			value: {},
			notify: true
		}
	},

	init: function () {
		this._init();
	},

	ready: function () {
		window.dividerEdit = this;
	}

});