/**
 * The main constructor.
 * 
 * @param {object} defaultState The default state to start with.
 * @return {object} The store state. 
 */
export default (defaultState = {}, debug = false) => {

    /**
     * Internal subscriber array.
     * @var {array}
     */
    const Subscribers = []

    /**
    * Helper methods to interact with state and subscribers.
    * @var {object}
    */
    const Methods = {
        fetch: function(key, ...rest) {
            return Subscribers.filter(sub => [sub.key, ...rest].includes(sub.key))
        },

        listen: function (subscriber, key = 'all') {
            const match = Subscribers.find(sub => key === sub.key)
            if (!match) {
                Subscribers.push({
                    key,
                    subscriber
                })
            }
            
            if ( match && debug ) {
                console.warn(`There is already a listener active for the \`${key}\` prop!`)
                console.log(match)
            }
        },

        detach: function (key) {
            const index = Subscribers.findIndex(sub => key === sub.key)
            if (-1 < index) {
                Subscribers.splice(index, 1)
            }

            return Subscribers
        }
    }

    /**
     * Initialize the proxy object with traps and default state
     * @var {Proxy} 
     */
    const State = new Proxy( defaultState, {
        set(state, key, value) {
            if (value === state[key]) {
                return true
            }

            const oldState = { ...state }
            state[key] = value

            const subscribers = [...Methods.fetch(key), ...Methods.fetch('all')]
            subscribers && subscribers.forEach(({subscriber}) => subscriber(state, oldState))

            return true
        }
    })

    return {
        state: State,
        ...Methods
    }
}
