export interface Store {
    state: ProxyConstructor,
    subscribers: Function[],
    addSubscriber: Function
}

export interface ProxyMethods {
    addSubscriber: Function,
}

export interface ProxySchema {
    get: (target: Object, p: string | number | symbol, receiver: any) => any,
    set: (target: Object, p: string | number | symbol, value: any, receiver: any) => boolean
}