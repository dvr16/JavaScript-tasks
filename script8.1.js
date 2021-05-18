function showArgs() {
    var args = Array.prototype.slice.call(arguments);
    return args.join(', ');
}

console.log(showArgs('foo', 'bar', 'hello'));