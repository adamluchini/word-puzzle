describe("wordPuzzle", function() {
    it("replaces vowels with a dash", function() {
      expect(wordPuzzle("cat")).to.equal("c-t");
    });
    it("replaces a single vowel with a dash", function() {
      expect(wordPuzzle("a")).to.equal("-");  
    });
    it("does not replace consonant with a dash", function() {
      expect(wordPuzzle("c")).to.equal("c");
    });
});
