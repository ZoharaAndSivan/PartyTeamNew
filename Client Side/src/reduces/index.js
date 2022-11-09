const initialState =
{
    itemArr: [],
    currentUser: null,
    currentType: null,
    categories: [],
    currentList: [],
    myEvents: [],
    users: [],
    participateOfEvent: [],
    managerEvent: null,
    about: null,
    massage: ""
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_ALL_ITEM":
            console.log(action.payload);
            return {
                ...state,
                itemArr: action.payload,
            }
        case "ADD_ITEM":
            console.log(action.payload);
            return {
                ...state,
                itemArr: [...state.itemArr, action.payload]
            }
        case "SAVE_EVENTS":
            console.log(action.payload);
            return {
                ...state,
                myEvents: action.payload
            }
        case "SAVE_ABOUT":
            console.log(action.payload);
            return {
                ...state,
                about: action.payload
            }
        case "SAVE_PARTICIPATE":
            console.log(action.payload);
            return {
                ...state,
                participateOfEvent: action.payload
            }
        case "ADD_EVENT":
            console.log(action.payload);
            return {
                ...state,
                myEvents: [...state.myEvents, action.payload]
            }
        // case "DELETE_CART":
        // console.log(action.payload)
        // console.log(state.cart)
        // return{
        //    ...state,
        //    cart:action.payload

        // }
        case "SAVE_USER":
            return {
                ...state,
                currentUser: action.payload,
                currentType: action.payload.Status
            }
        case "SAVE_MANAGER_EVENT":
            return {
                ...state,
                managerEvent: action.payload
            }
        case "SAVE_CATEGORIES_LIST":
            return {
                ...state,
                categories: action.payload
            }
        // case "DELETE_PRODUCT":
        // let arrP =[...state.cart];
        // arrP.splice(action.payload,1)
        // return{
        //      ...state,
        //      cart:[...arrP]
        // }
        // case "UPDATE_QTY":
        // let arr=[...state.cart];
        // arr.find((item)=>item.id==action.payload.id).amount=action.payload.amount;
        //  console.log(arr,action.payload)
        // return{
        //     ...state,
        //     cart:arr
        // }
        // case "DELETE_PRODUCT_FROM_ALL":
        // let arrpp=[...state.productArr].filter((item)=>item.id!=action.payload);

        // return{
        //      ...state,
        //      productArr:arrpp
        // }

    }
    return state;
}
export default reducer;