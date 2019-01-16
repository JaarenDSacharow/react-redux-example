//this function exists to generically return an object for the reducer
//to use to update the state.  A possible leaner way of doing this.

export const updateObject = (oldObject, updatedValues) => {

    return {
        ...oldObject,
        ...updatedValues
    }

}