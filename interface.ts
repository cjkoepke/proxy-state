export interface Store {
    state: ProxyConstructor,
    subscribers: Function[],
    listen: Function
}

export interface MethodsType {
    fetch: (key: string) => SubscriberType | undefined,
    listen: (key: string, subscriber: Function) => SubscriberType[],
    detach: (key: string) => SubscriberType[]
}

export interface ProxyType {
    get: (target: Object, p: string | number | symbol, receiver: any) => any,
    set: (target: Object, p: string | number | symbol, value: any, receiver: any) => boolean
}

export interface SubscriberType {
    key: string,
    callbacks: Function[]
}