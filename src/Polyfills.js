import { isObject } from 'lib/Utils';

!Array.prototype.distinct && Object.defineProperty(
  Array.prototype,
  'distinct',
  {
    enumerable: false,
    value: function(fn = x => x) {
      let arr = [...this];
      let set = new Set();
      return arr.filter(
        (item, i) => {
          // Worth noting that the mapping fn runs over the array once and in serial as if it were a map
          let key = fn(item, i, arr);
          if (set.has(key)) return false;
          set.add(key);
          return true;
        }
      );
    }
  }
);

!Array.prototype.sum && Object.defineProperty(
  Array.prototype,
  'sum',
  {
    enumerable: false,
    value: function(fn = x => x) {
      let arr = [...this];
      return arr.reduce(
        (sum, next, i, arr) => {
          let nextValue = fn(next, i, arr);
          if ({}.toString.call(nextValue) !== '[object Number]') return NaN;
          return sum + nextValue;
        },
        0
      );
    }
  }
);

!Array.prototype.pluck && Object.defineProperty(
  Array.prototype,
  'pluck',
  {
    enumerable: false,
    value: function(...fields) {
      let arr = [...this];
      if (fields.length == 0) return arr;
      return arr.map(
        obj => {
          if (fields.length == 1) return obj[fields[0]];
          return fields.reduce(
            (obj, field) => obj?.[field],
            obj
          );
        }
      );
    }
  }
);

!Array.prototype.object && Object.defineProperty(
  Array.prototype,
  'object',
  {
    enumerable: false,
    value: function(fn = x => x) {
      let arr = [...this];
      return arr.reduce(
        (obj, next, i, arr) => {
          let result = fn(next, i, arr);
          if (!isObject(result)) throw new Error('TypeError: Array.object expected result of object with { key: pair } to be merged');
          return { ...obj, ...result };
        },
        {}
      );
    }
  }
);
