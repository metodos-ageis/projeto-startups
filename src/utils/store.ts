export type Setter<T> = (value: T) => void;
export type State<T> = { value: T; setter: Setter<T> };
