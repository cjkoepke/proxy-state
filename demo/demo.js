import Store from "../index";

/**
 * Initiate your global store with default state.
 */
const { state, listen, detach } = Store({
  count: 0
});

/**
 * Set up initial content.
 */
const countEl = document.querySelector("#count");
countEl.innerHTML = state.count;

/**
 * Methods to adjust the state.
 */
window.add = () => state.count++;
window.sub = () => state.count--;
window.listen = () => {
    countEl.innerHTML = state.count
    const result = listen('count', newState => (countEl.innerHTML = newState.count))
}
window.detach = () => {
    const result = detach('count');
}
