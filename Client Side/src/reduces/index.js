const initialState = {
  itemArr: [],
  currentUser: null,
  currentType: null,
  categories: [],
  currentList: null,
  currentCategory: null,
  myEvents: [],
  orderEvents: [],
  EventsToConfirm: [],
  users: [],
  participateOfEvent: [],
  about: "",
  massage: "",
  types: [],
  itemsToEvents: [],
  noteEvent: [],
  numNewEvents: 0,
  numNewUsers: 0,
  numConfirm: 0,

  currentEvent: null,
  lists: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_ALL_ITEM":
      console.log(action.payload);
      return {
        ...state,
        itemArr: action.payload.data,
        currentList: action.payload.Kind,
      };
    case "ADD_ITEM":
      console.log(action.payload);
      return {
        ...state,
        itemArr: [...state.itemArr, action.payload],
        currentEvent: action.payload.Id,
      };
    case "SAVE_EVENTS_FOR_APPROVAL":
      console.log(action.payload);
      return {
        ...state,
        EventsToConfirm: action.payload,
      };
    case "SAVE_ABOUT":
      console.log(action.payload);
      return {
        ...state,
        about: action.payload,
      };
    case "SAVE_PARTICIPATE":
      console.log(action.payload);
      return {
        ...state,
        participateOfEvent: action.payload,
      };
    case "ADD_EVENT":
      console.log(action.payload);
      return {
        ...state,
        myEvents: [...state.myEvents, action.payload],
        numNewEvents: state.numNewEvents + 1,
        currentEvent: action.payload
      };
    case "ADD_CATEGORY":
      console.log(action.payload);
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case "ADD_LIST":
      console.log(action.payload);
      return {
        ...state,
        types: [...state.types, action.payload],
      };
    case "NEW_USER":
      console.log(action.payload);
      return {
        ...state,
        currentUser: action.payload,
        currentType: action.payload.Status,
        numNewUsers: state.numNewUsers + 1,
      };
    case "SAVE_USER":
      return {
        ...state,
        currentUser: action.payload,
        currentType: action.payload.Status,
      };
    case "SAVE_CATEGORIES_LIST":
      return {
        ...state,
        categories: action.payload,
      };
    case "SAVE_TYPES":
      const otherIndex = action.payload.findIndex((item) => item.Name == "אחר");
      const types = [...action.payload];
      const other = types.splice(otherIndex, 1)[0];
      types.push(other);
      return {
        ...state,
        types: types,
      };
    case "SAVE_ITEM":
      return {
        ...state,
        itemsToEvents: action.payload,
      };
    case "SAVE_TYPES_BY_CATEGORY_ID":
      console.log(action.payload.id);
      return {
        ...state,
        lists: action.payload.list,
        currentCategory: action.payload.id,
      };
    case "SAVE_NOTE":
      return {
        ...state,
        noteEvent: action.payload,
      };
    // {type:"UPDATE_EVENT_ANSWER", payload:{id:???, answer:???}}
    case "UPDATE_EVENT_ANSWER":
      // const id = action.payload.id;
      // const answer = action.payload.answer;
      // const modifiedEvents = [...state.EventsToConfirm];
      // const index = modifiedEvents.findIndex(e=>e.Id == id);
      // modifiedEvents[index].EncodedCelebration = answer;
      // return{
      //   ...state,
      //   EventsToConfirm:modifiedEvents
      // }
      const id = action.payload.id;
      const modifiedEvents = [...state.EventsToConfirm];
      const index = modifiedEvents.findIndex((e) => e.Id == id);
      modifiedEvents.splice(index, 1);
      return {
        ...state,
        EventsToConfirm: modifiedEvents,
      };
    case "SAVE_MY_EVENTS":
      return {
        ...state,
        myEvents: action.payload,
      };
    case "SAVE_MY_ORDER_EVENTS":
      return {
        ...state,
        orderEvents: action.payload,
      };
    case "PARTCIPATE_ANSWER":
      return {
        ...state,
        massage: action.payload,
      };
    case "PUT_EVENT":
      return {
        ...state,
        orderEvents: action.payload,
      };
    case "PUT_CATEGORY":
      return {
        ...state,
        categories: action.payload,
      };
    case "PUT_LIST":
      return {
        ...state,
        types: action.payload,
      };
  }
  return state;
};
export default reducer;
