import { bowling } from "./bowling";

const bowlingGameTestData=[
  {in:"00 00 00 00 00 00 00 00 00 00", out:0, desc:"a game with 0 pins knocked down"},
  {in:"10 10 10 10 10 10 10 10 10 10", out:10, desc:"a game with 1 pin knocked down per set"},
  {in:"1/ 10 10 10 10 10 10 10 10 10", out:11, desc:"a game with 1 pin knocked down per set and the first set is a spear"}
]

describe("get the correct score from a game of bowling", () => {
  bowlingGameTestData.forEach((data)=>{
    it(data.desc, () => {
    expect(bowling(data.in)).toBe(data.out);
  });
  })
  
});
