/**
 * Homework 1.2
 *
 * How many documents within the collection are categorized under "case" tipology?
 *
 * Solution: 3
 */

// Run at the shell the following command:
db.products.find({type:"case"}).count()