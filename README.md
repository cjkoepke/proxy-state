# Proxy-State
 A lightweight utility for managing global state and performing side-effects when it changes.

The underpinning of the Proxy-State is the Proxy Object (hence the name). However, setting this up can be laborsome and time-consuming, so *Proxy-State* acts as an abstraction layer on top of native APIs to make things easier.

Currently, Proxy-State has no support for Internet Explorer.

## Usage

Install the package via `npm` or `yarn`:

```bash
npm i proxy-state
```

In your main entry file, create a store with the following:

```js
import Store from 'proxy-state'

const { state, listen, detach, fetch } = Store({
  count: 0
}, true )

/**
 * Update state directly. Subscribers to changes will get
 * old and new state as parameters.
 */
state.count = 2;

/**
 * Listen to all state changes.
 */
listen((newState, oldState) => {
    // Do something.
})

/**
 * Listen to state change for a specific property.
 */
listen((newState, oldState) => {
    // Do something.
}, 'count' )

/**
 * You can unsubscribe from listening to a properties changes
 * by detaching a registered listener.
 */
detach('count')
```

The default import of the package gives you a constructor function, which takes a single argument: an object representing your default state.

## Options
### `defaultState: {}`
This is the default object to use as your state.

### `debug: false`
Turn this on to allow helpful console logging.

## Methods
### `listen: (fn( newState, oldState), ?key)`
Applies a callback for when state changes. Optionally can pass a unique `key` as a secondary argument to only run the callback when a property that matches the `key` changes.

### `detach: (key)`
Removes a registered callback by its the key that was used to register it.

### `fetch: (key, ...rest)`
Fetches an array of registered subscribers by their keys.

## Roadmap
1. Polyfill IE support.
2. Allow listening to deeper object-tree value updates.
