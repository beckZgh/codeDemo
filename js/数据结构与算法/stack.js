
function Stack() {
    this.dataStore = [];
    this.top       = 0;
    this.push      = push;
    this.pop       = pop;
    this.peek      = peek;
    this.clear     = clear;
    this.length    = length;
}

function push(el) {
    this.dataStore[this.top++] = el;
}

function pop() {
    this.dataStore[--this.top] = el;
}

function peek() {
    this.dataStore[this.top - 1] = el;
}

function clear() {
    this.top = 0;
}

function length(el) {
    return this.top;
}

