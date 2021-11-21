> This Project has Snippets for react with redux steup, process and how to implemenntation details

`src->components->HomeButtons` has old approach
`src->components->Jokes` has latest approach
`src->components->HomeTable` old approach with passing props i.e., Pros drilling [not recommended]

> `redux-thunk` -> helps in async flow i.e., no need to use async await when making api calls (Not 100% Sure)

> `redux-devtools-extension` -> helps in integrated or view dispatch with state details in redux dev tools

> redux store setup -> src/redux/store

> redux root reducer setup -> src/redux//rootreducer

indivisual reducers i.e., randowuser, jokes...
Have 3 files , name-reducer.js, name-action.js, name-types.js
`reducer.js` -> responsible for redux state change (this is where you will perform state update)
`action.js` -> responsible for state change actions (this is where you will write api calls, dispatch data to reducer)
`types.js` -> responsible for adding types like FETCH/UPDATE/CREATE/DELETE constants

> 1st approach in redux:

#########################

**mapStateToProps** -> is a reference callback which take `state` as argument
this state is coming from store

_eg:_
```
const mapStateToProps = (state) => {
  return {
    userList: state,
    ipAddr: state,
    userloading: state.users.loading
  };
};

```
Here, 
- `state` and `ipAddr` is global state, it will have all reducers initial state
- `userloading` will have state.users.loading value which is from randowuser reducer state

**In Functional components**
_use this value in your components as props.userList,props.ipAddr,props.userloading_

**In Class Based components**
_use this value in your components as this.props.userList,this.props.ipAddr,this.props.userloading_

########################

**mapDispatchToProps** -> is a reference callback which takes dispatch as argument this dispatch is coming from store
_eg:_
```
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersDetails: () => dispatch(fetchUsers()),
    fetchIpAddrDetails: () => dispatch(fetchIpAddr()),
  };
};
```
Here,
fetchUsersDetails is a reference callaback assigned dispatch(fetchUsers()) and fetchUsers is a action.
fetchIpAddrDetails is a reference callaback assigned dispatch(fetchIpAddr()) and fetchIpAddr is a action.

**In Functional components**
_use this methods in your components as props.fetchUsersDetails,props.fetchIpAddrDetails like onClick or useEffect hook for API calls_

**In Class Based components**
_use this value in your components as this.props.fetchUsersDetails,this.props.fetchIpAddrDetails_

> IMPORTANT!!!

**always connect the component where you want to use state or dispatch action**

_eg:_
```
- export default connect(mapStateToProps, mapDispatchToProps)(HomeButtons);
- export default connect(null, mapDispatchToProps)(HomeButtons);
```
if u dont have `mapStateToProps` then pass `null`

**This 1st approach works for class and functional components**

#####################

> 2nd approach in redux: (only for functional components)

#####################

**state:**
access redux global state using  `useSelector` hook from `react-redux` library
_eg:_
```
 const ipAddr = useSelector((state) => state.ipAddr.data)
```
_use ipAddr directly no need for props.ipAddr.

**dispatch**
dispatch action using `useDispatch` hook from `react-redux` library
_eg:_
```
const dispatch = useDispatch();

const fetchJokeData = () => {
    dispatch(fetchIpAddr());
  };

```
Here,
dispatch will call actions passed to it.
fetchIpAddr is action passed to it.

