import {
    ProxyHandler,
    Subscriber,
    Store
} from './interface'

const handler: ProxyHandler = {
    get(state: object, key: string) {
        if ( 'all' === key ) {
            return state
        }

        return state[key]
    },

    set(state: object, key: string, value: any) {
        if ( value == state[key] ) {
            return true
        }
        
        const oldState = {...state}
        state[key] = value
        this.subscribers.forEach(cb => cb(state, oldState))
        return true
    },
}

const getSubscriberObject = (): Subscriber => {
    const subscribers: Function[] = []
    const addSubscriber: Function = (subscriber: Function) => subscribers.push(subscriber)
    
    return {
        subscribers,
        addSubscriber,
    }
}

const Store: Function = function(defaultState = {}) {
    const Subscriber: Subscriber = getSubscriberObject()

    const schema = {
        ...handler,
        ...Subscriber
    }

    const ProxyStore = {
        state: new Proxy( defaultState, schema ),
        ...Subscriber
    }

    return ProxyStore
}

export default Store
