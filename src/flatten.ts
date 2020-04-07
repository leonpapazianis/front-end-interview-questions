type Node<T> = T | NodeList<T>;
interface NodeList<T> extends Array<Node<T>> { }

// Write a function that takes an string or a list of strings (infinitelly nested list of string) and flattens them to a list of strings 
export function flatten(list: Node<string>): string[] {
}