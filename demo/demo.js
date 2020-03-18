import Store from '../index'

const MyStore = Store({
    total: 0,
    active: false
});

const { state, addSubscriber } = MyStore

// Expose for demo.
window.increase = () => state.total++
window.decrease = () => state.total--
window.red = () => state.active = true
window.grey = () => state.active = false

const count = document.querySelector('#count')
const boxes = document.querySelectorAll('.box')

addSubscriber((newState, oldState) => {
    count.textContent = newState.total
    console.log( state.all )
})

addSubscriber((newState, oldState) => {
    boxes.forEach( box => newState.active
        ? box.classList.add('active')
        : box.classList.remove('active')
    )
})