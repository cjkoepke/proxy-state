import {
    ProxyMethods,
    ProxySchema,
    Store
} from './interface'

/**
 * The main constructor.
 * @param {Object} defaultState The default state to start with.
 */
const Store: Function = function(defaultState: Object = {}) {

    /**
     * Internal subscriber array.
     */
    const Subscribers: Function[] = []

    /**
     * Proxy handler object.
     */
    const Handler: ProxySchema = {
        get(state: object, key: string, receiver) {
            if ( 'all' === key ) {
                return state;
            }

            return state[key]
        },

        set(state: object, key: string, value: any) {
            if ( value === state[key] ) {
                return true
            }
            
            const oldState = {...state}
            state[key] = value
            Subscribers.forEach(cb => cb(state, oldState))
            return true
        }
    }

    /**
     * Helper methods to interact with state and subscribers.
     */
    const Methods: ProxyMethods = {
        addSubscriber: function(subscriber: Function) {
            Subscribers.push(subscriber)
        }
    }

    /**
     * The main Proxy to manage state with.
     */
    const State = new Proxy( defaultState, Handler );

    return {
        state: State,
        ...Methods
    }
}

export default Store
