# React, Redux w/TS Sandbox

Project to understand using TS w/React, Redux at a glance.

Big takeaways

- Redux (store of state)
  - Use actionCreators to define actions
  - ActionTypes (constants) used across project
  - Reducer works with ActionTypes to return typed output (e.g. shape of desired output (string, obj, etc))
- Higher level - redux is a way to conform app to state changes
- Always have an initialState
- When designing state, think of the pieces that represent your 'machine', e.g. 'loading', 'success', 'error'
- How does each action translate to machine state?
