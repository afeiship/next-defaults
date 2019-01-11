# next-defaults
> Set defaults value

## install:
```bash
npm install -S afeiship/next-defaults --registry=https://registry.npm.taobao.org
```

## usage:
```js
import 'next-defaults';

// old:
function abc(vaule){
  return typeof vaule !== 'undefined' ? vaule : -1
}

// now:
function abc(vaule){
  return nx.defaults(value,-1);
}
```
