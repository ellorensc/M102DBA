/**
 * Homework 1.3
 *
 * What query would you run to get all the products where brand equals the string ?ACME??
 *
 * Solution: db.products.find({brand : "ACME"})
 */

// Run at the shell the following command:
db.products.find({brand : "ACME"})