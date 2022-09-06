const { hasUncaughtExceptionCaptureCallback } = require("process");
const { division } = require("../division");

test("Division de dos numeros", ()=>{
  const a = Math.ceil(1 + Math.random() * 20)
  const b = Math.ceil(1 + Math.random() * 20)
  
  if (a >= b){
    expect(division(a,b)).toBeGreaterThanOrEqual(1);
  } else {
    expect(division(a,b)).toBeLessThan(1);
  }
});

test("Division por cero", ()=> {
  const a = 5;
  const b = 0;
  if (b===0) {
    expect(division(a,b)).toBeNull();
  }
})