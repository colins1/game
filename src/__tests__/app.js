import demo from "../js/app";

test('demo is demo', ()=>{
    let result = demo(2);
    expect(result).toBe(2);
})