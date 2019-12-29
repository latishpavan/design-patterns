function * gen(num: number) {
    let i: number;

    for(i = 1; i <= num; ++i) {
        yield 2 * i;
    }
}

for(const num of gen(10)) {
    console.log(num);
}
