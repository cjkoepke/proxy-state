export interface Subscriber {
    subscribers: Function[],
    addSubscriber: Function
}

export interface Store {
    state: ProxyConstructor,
    subscribers: Function[],
    addSubscriber: Function
}

export interface ProxyHandler {
    get: Function,
    set: Function,
}