import {
    MethodsType,
    ProxyType,
    SubscriberType,
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
    const Subscribers: SubscriberType[] = []

    /**
    * Helper methods to interact with state and subscribers.
    */
    const Methods: MethodsType = {
        fetch: function(key) {
            return Subscribers.find(sub => key === sub.key)
        },

        listen: function (key, subscriber) {
            const match: SubscriberType | undefined = Subscribers.find(sub => key === sub.key)
            if (!match) {
                Subscribers.push({
                    key,
                    callbacks: [subscriber]
                })
            }

            return Subscribers
        },

        detach: function (key) {
            const index: number = Subscribers.findIndex(sub => key === sub.key);
            if (-1 < index) {
                Subscribers.splice(index, 1)
            }

            return Subscribers
        }
    }

    /**
     * Proxy handler object.
     */
    const Handler: ProxyType = {
        get(state: object, key: string) {
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

            const Subscriber: SubscriberType = Methods.fetch(key)
            Subscriber && Subscriber.callbacks.forEach(subscriber => subscriber(state, oldState))

            return true
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
