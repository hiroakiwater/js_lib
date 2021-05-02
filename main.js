function JsonQuery(json, query) {
  let queries = query.split('.');
  let current = null;

  let re = RegExp("[\[](.*?)]", 'g');

  for (let i = 0; i < queries.length; i++) {
    let q = queries[i];

    let key = q.split('[')[0];

    if (key == '$') {
      current = JSON.parse(json);
    } else {
      current = current[key];
    }

    let matches = q.matchAll(re);

    for (const m of matches) {
      current = current[parseInt(m[1])];
    }
  }

  return current;
}

let x1 = JsonQuery('{"name": "hello"}', '$.name');
console.log(x1);

let x2 = JsonQuery('{"data": [{"n1": "hello"}, {"n1": "world", "n2": "orange"}]}', '$.data[1].n2');
console.log(x2);

let x3 = JsonQuery('[{"name": "hello world."}, [2]]', '$[0].name');
console.log(x3);
