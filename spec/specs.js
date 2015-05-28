describe('romanNumerals', function() {
  it('will return roman numerals for input', function(){
    expect(romanNumerals("3")).to.equal("III")
  });

  it('will return roman numerals for input', function(){
    expect(romanNumerals("5")).to.equal("V")
  });

  it('will return roman numerals for input geater than 5', function(){
    expect(romanNumerals("7")).to.equal("VII")
  });

  it('will return roman numerals for input geater than 5', function(){
    expect(romanNumerals("9")).to.equal("IX")
  });

  it('will return roman numerals for input geater than 10', function(){
    expect(romanNumerals("19")).to.equal("XIX")
  });

  it('will return roman numerals for input geater than 50', function(){
    expect(romanNumerals("50")).to.equal("L")
  });

  it('will return roman numerals for input geater than 50', function(){
    expect(romanNumerals("99")).to.equal("XCIX")
  });

  it('will return roman numerals for input geater than 100', function(){
    expect(romanNumerals("100")).to.equal("C")
  });

  it('will return roman numerals for input geater than 150', function(){
    expect(romanNumerals("150")).to.equal("CL")
  });

  it('will return roman numerals for input geater than 150', function(){
    expect(romanNumerals("199")).to.equal("CXCIX")
  });

  it('will return roman numerals for input geater than 1000', function(){
    expect(romanNumerals("1000")).to.equal("M")
  });

  it('will return roman numerals for input geater than 2000', function(){
    expect(romanNumerals("2500")).to.equal("MMD")
  });

  it('will return roman numerals for input 3999', function(){
    expect(romanNumerals("3999")).to.equal("MMMCMXCIX")
  });
});
