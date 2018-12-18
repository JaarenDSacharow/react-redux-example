import React, { Component } from 'react';

//use this to set up the subscription to the store

import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {


    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
            </div>
        );
    }
}



//1. mapStateToProps stores instructions as to  how you want to map incoming state to props
// state is managed in redux, not a component, this is how you use props from state
// and how you tell redux which state you want to use in this container


const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    };
}

//2. mapDispatchToProps - which types of actions do I want to dispatch in this container
// it returns a javascript object that will contain propnames that are references to functions we can use
// to dispatch actions
//the dispatch argument is a helper function provided by react-redux to dispatch actions

// the key of the javascript object (onIncrementCounter) is the prop that we will map to the anonymous
//function that calls dispatch with type and value

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter : () => dispatch({type:'INC_COUNTER'}),
        onDecrementCounter : () => dispatch({type:'DEC_COUNTER'}),
        onAddCounter : () => dispatch({type:'ADD_COUNTER', value: 5}),
        onSubtractCounter : () => dispatch({type:'SUBTRACT_COUNTER', value: 5})
    };
}


//use this to set up the subscription to the store

//CONNECT is a function that returns a function that takes a component as input
//pass two things to connect, configuration for this container
//1. which parts of the state you want and 2. The actions you want to dispatch

// SEE 1 and 2 above

export default connect(mapStateToProps, mapDispatchToProps)(Counter);