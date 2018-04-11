describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(true).toBe(true);
    });
  });
function Add(x,y){
    return x+y;
}
describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(Add(20,30)).toBe(50);
    });
  });

  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(Add("Hello","testing")).toBe("Hellotesting");
    });
  });

  //open node cmd write karma init which will ask some questions and generate karma.config
  //and then write karma start