### Three core concepts:

Get started with Cake Shop:

1. Entities:
   - Shop: stores cakes on a shelf
   - Shopkeeper: at the front of the store
   - Customer: at the store entrance
  
2. Activities:
   - Customer: buy a cake
   - Shopkeeper: remove a cake from the shelf
   - Shopkeeper: get receipt to keep track

Cake Shop Scenario - Redux - Purpose:

Shop - Store - Holds the state of your application
Intention to Buy cake - Action - Describe what happened
Shopkeeper - Reducer - Ties the store and actions together

- A `store` that holds the state of your application.
- An `action` that describes the changes in the state of your application.
- A `reducer` which actually carries our the state transition depending on the action.


### References:

- [1] [Redux Tutorials](https://www.youtube.com/watch?v=3rlUADfuKhQ&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=3)