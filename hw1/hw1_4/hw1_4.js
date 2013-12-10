/**
 * Homework 1.4
 *
 * Print out, in the shell, the name of all the products without extraneous characters or braces,
 * sorted alphabetically, ascending
 */

// Solution:
var productsCol = db.products.find({}, {name:1, _id:0}).sort({name:1});

while(productsCol.hasNext()) {
    print( c.next().name);
}

// Another solution:
var antotherProductsCol = db.products.find({}).sort({name:1});

antotherProductsCol.forEach(function(doc) {
    print(doc.name);
});
