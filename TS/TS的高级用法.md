## 注释

```ts
/** This is a cool guy. */
interface Person {
    /** This is name. */
    name: string
} 

const p: Person = {
    name: 'cool'
}
```

## 接口继承

```ts
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = 'blue'
square.sideLength = 10
```

## interface & type

```ts
interface Point {
    x: number;
    y: number;
}

interface SetPoint {
    (x:number,y:number): void;
}

type Point = {
    x: number;
    y: number;
}

type SetPoint = (x:number,y:number) => void;

interface PartialPointX { x: number; }
interface Point extends PartialPointX { y: number; }

type PartialPointX = {x: number;};
type Point = PartialPointX & {y:number;};


type PartialPointX = { x: number; };
interface Point extends PartialPointX { y: number; }

interface PartialPointX { x: number; }
type Point = PartialPointX & {y:number;};
```

## typeof

```ts
interface Opt {
    timeout: number;
}
const defaultOption: Opt = {
    timeout: 500
}

// refactor
const defaultOption = {
    timeout: 500
}

type Opt = typeof defaultOption
```
## keyof

```ts
const person = {
    age: 3,
    text: 'hello world'
}

type Keys = keyof person 

function get<T extends object,K extends keyof T>(o:T,name: K): T[K] {
    return o[name]
}
```

## 查找类型

```ts
interface Person {
    addr: {
        city: string;
        street: string;
        num: number;
    }
}
type Addr = tyof Person["addr"] 
```

## 接口查找

```ts
interface API {
    '/user': { name: string; };
    '/menu': { foods: string[]; };
}

const get = <URL extend keyof API>(url: URL):Promise<API[URL]> => {
    return fetch(url).then(res => res.json())
}
```

## DeepReadonly 

```ts
type DeepReadonly<T> = {
    readonly [k in keyof T]: DeepReadonly<T[K]>
}

// usage
const a = {foo: {bar: 22}}
// 不可修改属性
const b = a as DeepRaadonly<typeof a>

```