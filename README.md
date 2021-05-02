# JS Lib

## JsonQuery

```
JsonQuery(json_string, json_path)
```

Example:
```
let x = JsonQuery('{"data": [{"n1": "hello"}, {"n1": "world", "n2": "orange"}]}', '$.data[1].n2');
console.log(x);
```