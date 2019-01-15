import React, { Component } from 'react';

//use this to set up the subscription to the store

import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import  *  as actionTypes  from '../../Store/actions/index';

class Counter extends Component {


    render () {
        //note that in the button onClick, we have to pass the props because
        //the split reducers cannot use global state
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter}  />
                <hr />

                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map((strResult) => (
                        //in order to pass data to mapDispatchToProps and then to your store
                        //you must wrap the this.props in an anonymous function and then pass the data
                        //as an argument.
                     <li  key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

//two important methods you need to use to have a container component interact with REDUX:

//1. mapStateToProps stores instructions as to  how you want to map incoming state to props
// state is managed in redux, not a component, this is how you use props from state
// and how you tell redux which state you want to use in this container


const mapStateToProps = (state) => {

    //please note that because we have split the reducers,
    //this creates seperate slices of the state which 
    //correspond with the properties we have the combineReducers method.
    //thus, the state that is accessed within those seperate reducers
    //can ONLY be mapped to props via state.{propertyName}.{property}.
    //see below:
    return {
        ctr: state.ctr.counter, 
        storedResults: state.res.results
    };
}

//2. mapDispatchToProps - which types of actions do I want to dispatch in this container
// it returns a javascript object that will contain propnames that map to anonymous functions we can use
// to dispatch actions.
//the dispatch argument is a helper function provided by react-redux to dispatch actions

// the key of the javascript object (onIncrementCounter) is the prop that we will map to the anonymous
//function that calls dispatch with type and value\
//An action has a type and payload.

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter : () => dispatch(actionTypes.increment()),
        onDecrementCounter : () => dispatch(actionTypes.decrement()),
        onAddCounter : () => dispatch(actionTypes.add(10)),
        onSubtractCounter : () => dispatch(actionTypes.subtract(10)),
        onStoreResult: (result) => dispatch(actionTypes.store(result)),
        //now that we wrapped the prop in an anonymous function on the UI, we
        //can pass data to this mappedProp and dispatch data from the UI to the store.
        onDeleteResult: (id) => dispatch(actionTypes.remove(id)),
    };
}


//use this to set up the subscription to the store

//CONNECT is a function that returns a function that takes a component as input
//pass two things to connect, configuration for this container
//1. which parts of the state you want and 2. The actions you want to dispatch

// SEE 1 and 2 above

export default connect(mapStateToProps, mapDispatchToProps)(Counter);