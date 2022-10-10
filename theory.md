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

### Three principles:

##### 1. The state of whole app is stored in an object tree within a single store

- Maintain our application state in a single object which would be managed by the Redux store.

Let's assume we are tracking the number of cakes on the shelf: 
``` 
 {
   numberOfCakes: 10
 }
```

##### 2. The only way to change the state is to emit an action, an object describing what happened

- Not allowed to directly update the state object.

Let the shopkeeper know about our action BUY_CAKE:

```
{
   type: BUY_CAKE
}
```

##### 3. Use pure reducers to specify how the state tree is transformed by actions

- Reducer - (prevState, action) => newState

#### Sync vs Async:

**Synchronous Actions:**: as soon as an action was dispatched, the state was immediately updated.

**Asynchronous Actions:**: Async API calls to fetch data from an end point and use that data in your application.

### References:

- [1] [Redux Tutorials](https://www.youtube.com/watch?v=3rlUADfuKhQ&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=3)