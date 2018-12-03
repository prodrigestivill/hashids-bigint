
[![hashids](http://hashids.org/public/img/hashids.gif "Hashids")](http://hashids.org/)

**Hashids** is small JavaScript library to generate YouTube-like ids from numbers. Use it when you don't want to expose your database ids to the user.

This is only a wrapper to add BigInt support to the original library:  [http://hashids.org/javascript](http://hashids.org/javascript).

A [pull request](https://github.com/ivanakimov/hashids.js/pull/58) is also open on the original project in order to allow avoid this wrapper.

Getting started
-------

Install Hashids via [node.js](https://nodejs.org): `npm install --save hashids-bigint`

Use in Node.js:

```javascript
var Hashids = require('hashids-bigint');
var hashids = new Hashids();

console.log(hashids.encodeBI('1'));
```

Quick example
-------

```javascript
var hashids = new Hashids();

var id = hashids.encodeBI('123'); // o2fXhV
var numbers = hashids.decodeBI(id); // '123'
```

More options
-------

All API from [original library](https://github.com/ivanakimov/hashids.js/blob/master/README.md) is still available.


Curses! #$%@
-------

This code was written with the intent of placing created ids in visible places, like the URL. Therefore, the algorithm tries to avoid generating most common English curse words by generating ids that never have the following letters next to each other:

	c, f, h, i, s, t, u

License
-------

MIT License. See the [LICENSE](LICENSE) file. You can use Hashids in open source projects and commercial products. Don't break the Internet.
