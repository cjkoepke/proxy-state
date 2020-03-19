import Store from "../index";

/**
 * Initiate your global store with default state.
 */
const { state, listen, detach } = Store({
  count: 5
}, true );

/**
 * Set up initial content.
 */
const countEl = document.querySelector("#count");
countEl.innerHTML = JSON.stringify({count: 0});
const stateEl = document.querySelector("#state");
stateEl.innerHTML = JSON.stringify(state);

/**
 * Global listener.
 */
listen(newState => stateEl.innerHTML = JSON.stringify(newState))

/**
 * Methods to adjust the state.
 */
window.add = () => state.count++;
window.sub = () => state.count--;

/**
 * Allow resetting of the DOM and state.
 */
window.reset = () => {
  state.count = 5;
  countEl.innerHTML = JSON.stringify({count: 0})
  detach('count')
}

/**
 * Opt-in listeners.
 */
window.listen = () => {
    countEl.innerHTML = JSON.stringify( state )
    listen(newState => 
      countEl.innerHTML = JSON.stringify(newState),
      'count'
    )
}
window.detach = () => {
    detach('count');
}
