// Homework 2.4 solution

// Execute in the shell:
db.products.find({},{for:1})

// Create an index on the field "for":
db.products.ensureIndex({for:1})

// After creating the index, query products that work with an "ac3" phone. How many are there?
Answer: 4

// Run an explain plan for the same query. How many records were scanned?
db.products.find({},{for:1}).explain()

Answer: 4

// Was an index used?
Answer: yes
