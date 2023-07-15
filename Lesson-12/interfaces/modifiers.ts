interface Modifiers {
    set (key: string, value: any): Modifiers,
    get (key: string): Modifiers,
    delete (key: string): Modifiers,
    getObject(): Modifiers
}

export { Modifiers }