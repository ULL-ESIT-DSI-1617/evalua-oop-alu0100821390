var dt = require("../lyingoutatable.js");
var drawIt = dt.drawIt;
var drawTable = dt.drawTable;
var TextCell = dt.TextCell;
var UnderlinedCell = dt.UnderlinedCell;
var RTextCell = dt.RTextCell;

// Testing drawIt
var MOUNTAINS = [
  {name: "Kilimanjaro\nMontaña mágica", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal\nPaís lejano"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

var expected = 
`name           height country      
-------------- ------ -------------
Kilimanjaro      5895 Tanzania     
Montaña mágica                     
Everest          8848 Nepal        
                      País lejano  
Mount Fuji       3776 Japan        
Mont Blanc       4808 Italy/France 
Vaalserberg       323 Netherlands  
Denali           6168 United States
Popocatepetl     5465 Mexico       `;

describe("drawIt", function() {
  it("Must draw the mountains table correctly", function() {
    drawIt(MOUNTAINS).should.equal(expected);
  })
});

// Testing drawTable
function checkerboard() {
  var rows = [];
  for (var i = 0; i < 5; i++) {
     var row = [];
     for (var j = 0; j < 5; j++) {
       row.push(new TextCell(((j+i)%2)? " " : "##"));
     }
     rows.push(row);
  }
  return rows;
}

var expectedCheckerboard = 
`##    ##    ##
   ##    ##   
##    ##    ##
   ##    ##   
##    ##    ##`;

describe("drawTable", function() {
  it("Must draw the checkerboard correctly", function() {
    drawTable(checkerboard()).should.equal(expectedCheckerboard);
  })
});

// Testing TextCell
var TCell = new TextCell(`Kilimanjaro\nMontaña mágica`);

var expectedTextCell = [ `Kilimanjaro   `, `Montaña mágica` ];

describe("TextCell", function() {
  it("Must draw the TextCell correctly", function() {
    (TCell.draw(14, 2)[0]).should.equal(expectedTextCell[0]);
    (TCell.draw(14, 2)[1]).should.equal(expectedTextCell[1]);
  })
});

// Testing UnderlinedCell
var UCell = new UnderlinedCell(new TextCell(`Everest`));

var expectedUnderlinedCell = [`Everest       `, `--------------`];

describe("UnderlinedCell", function() {
  it("Must draw the UnderlinedCell correctly", function() {
    (UCell.draw(14, 2)[0]).should.equal(expectedUnderlinedCell[0]);
    (UCell.draw(14, 2)[1]).should.equal(expectedUnderlinedCell[1]);
  })
});

// Testing RTextCell
var RTCell = new RTextCell(`5895`);

var expectedRTextCell = [`          5895`];

describe("RTextCell", function() {
  it("Must draw the RTextCell correctly", function() {
    (RTCell.draw(14, 1)[0]).should.equal(expectedRTextCell[0]);
  })
});
