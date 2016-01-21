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
  it("relpace all vowels with a -", function() {
    expect(wordPuzzle("the cat is furry, meow")).to.equal("th- c-t -s f-rry, m--w");
  });
  it("relpace all vowels with a -", function() {
    expect(wordPuzzle("the cAt is furry, meow")).to.equal("th- c-t -s f-rry, m--w");
  });
});
