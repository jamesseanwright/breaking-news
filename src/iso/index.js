export default {
	_objects: {},
	_serialisedObjects: null,
	_clientProperty: 'window.appState',
	add: function add(object) {
		const name = object.constructor.name;
		this._objects[name] = {
			serialisation: object.serialise()
		};
	},

	update: function update(object) {
		this._objects[object.constructor.name].serialisation = object.serialise();
	},

	serialise: function serialise() {
		return `(function () { 
			${this._clientProperty} = ${JSON.stringify(this._objects)}
		}())`;
	},

	hydrate: function hydrate(constructor) {
		const isNode = global.document === undefined;
		const state = isNode ? this._objects[constructor.name] : new Function(`return ${this._clientProperty}['${constructor.name}']`)();
		const instance = new constructor(state ? state.serialisation : null);

		if (!isNode) {
			this.add(instance);
		}

		return instance;
	}
};