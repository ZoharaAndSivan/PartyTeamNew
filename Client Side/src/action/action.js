import axios from "axios";

//---------------------------פעולה בשרת-----------------------
export const getListByTypeAction = (listType) => {
    return (dispatch) => {
        axios.get("http://localhost:56570/api/ItemOfList/GetItemById/" + listType).
            then(response => {
                console.log(response);
                dispatch(saveAllList(response.data))
            },
                err => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                })
    }
}

export const addUserAction = (user) => {
    return (dispatch) => {
        axios.post("http://localhost:56570/api/Customer/post/" + user).
            then(response => {
                console.log(response);
                dispatch(saveUser({ ...user, id: response.data }))
            }, err => {
                console.log(err);
                console.log("קרתה שגיאה");
            })
    }
}

export const addEventLevelOneAction = (details) => {
    return (dispatch) => {
        axios.post("http://localhost:56570/api/Celebartion/post/" + details).//ניווט לא נכון
            then(response => {
                console.log(response);
                dispatch(saveAlldetails(response.data))
            },
                err => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                })
    }
}

export const getCategoriesAction = () => {
    return (dispatch) => {
        axios.get("http://localhost:56570/api/Category/Get").
            then(response => {
                console.log(response);
                dispatch(saveCategoriesList(response.data))
            },
                err => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                })
    }
}

export const logInAction = (email, password) => {
    return (dispatch) => {
        axios.post("http://localhost:56570/api/Customer/PostLogin", { email, password }).
            then(response => {
                console.log(response);
                dispatch(saveUser(response.data))
            },
                err => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                })
    }
}



export const getCustomerOfEventByEventId = (evetId) => {
    return (dispatch) => {
        axios.get("http://localhost:56570/api/CostomerOfEvent/GetCustomerOfEventByEventId/" + evetId).
            then(response => {
                console.log(response);
                dispatch(saveCustomersOfEvent(response.data))
            },
                err => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                })
    }
}

//ניתוב חדשששש מצד שרתתתתתתת-----זוהרה
//עדגון פרטי לקוח
export const updateUserAction = (user) => {
    return (dispatch) => {
   axios.put("http://localhost:56570/api/Celebration/Get",user). ///קישור לא נכון 
            then(response => {
                console.log(response);
                dispatch(saveUser(response.data))
            },
                err => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                })
    }
}

//ניתוב חדשששש מצד שרתתתתתתת-----זוהרה
//הבאת האודות מהשרת
export const getAboutAction = () => {
    return (dispatch) => {
   axios.get("http://localhost:56570/api/Celebration/Get"). ///קישור לא נכון 
            then(response => {
                console.log(response);
                dispatch(saveAbout(response.data))
            },
                err => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                })
    }
}

//ניתוב חדשששש מצד שרתתתתתתת-----זוהרה
//עדכון האודות
export const putAboutAction = (record) => {
    return (dispatch) => {
        axios.put("http://localhost:56570/api/itemoflist/Put/" + record). //שגויי הניתוב 
            then(response => {
                console.log(response);
                dispatch(saveAbout(record))
            }, err => {
                console.log(err);
                console.log("קרתה שגיאה");
            })
    }
}
//מנהל
//אישורי אירועים
export const getEvents = () => {
    return (dispatch) => {
        axios.get("http://localhost:56570/api/Celebration/Get").
            then(response => {
                console.log(response);
                dispatch(saveEvents(response.data))
            },
                err => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                })
    }
}

// export const getCustomers = () => {
//     return (dispatch) => {
//         axios.get("http://localhost:56570/api/Customer/Get").
//             then(response => {
//                 console.log(response);
//                 dispatch(saveUser(response.data))
//             },
//                 err => {
//                     console.log(err);
//                     console.log("קרתה שגיאה");
//                 })
//     }
// }

export const addRecord = (record) => {
    return (dispatch) => {
        axios.post("http://localhost:56570/api/itemoflist/post/" + record).
            then(response => {
                console.log(response);
                dispatch(addNewRecord(record))
            }, err => {
                console.log(err);
                console.log("קרתה שגיאה");
            })
    }
}

export const putRecord = (record) => {
    return (dispatch) => {
        axios.put("http://localhost:56570/api/itemoflist/Put/" + record).
            then(response => {
                console.log(response);
                dispatch(addNewRecord(record))
            }, err => {
                console.log(err);
                console.log("קרתה שגיאה");
            })
    }
}
export const getManagerOfEvent = (id) => {
    return (dispatch) => {
        axios.get("http://localhost:56570/api/CustomerOfEvent/GetManagerOfEvent/" + id).
            then(response => {
                console.log(response);
                dispatch(saveManagerEvent(response.data))
            },
                err => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                })
    }
}

export const deleteRowAction = (id) => {
    return (dispatch) => {
        axios.delete("http://localhost:56570/api/ItemOfList/Delete/" + id).
            then(response => {
                console.log(response);
                dispatch(saveAllList(response.data))
            },
                err => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                })
    }
}

//-------------------------------------בנית אקשן לרידקס------------
export const saveAllList = (list) => {
    return {
        type: "SAVE_ALL_ITEM",
        payload: list
    }
}

export const saveAbout = (text) => {
    return {
        type: "SAVE_ABOUT",
        payload: text
    }
}

export const saveCategoriesList = (list) => {
    return {
        type: "SAVE_CATEGORIES_LIST",
        payload: list
    }
}

export const saveCustomersOfEvent = (participatesList) => {
    return {
        type: "SAVE_PARTICIPATE",
        payload: participatesList
    }
}
export const saveUser = (user) => {
    return {
        type: "SAVE_USER",
        payload: user
    }
}
export const saveManagerEvent = (manager) => {
    return {
        type: "SAVE_MANAGER_EVENT",
        payload: manager
    }
}

export const saveAlldetails = (event) => {
    return {
        type: "ADD_EVENT",
        payload: event
    }
}

//manager
export const saveEvents = (list) => {
    return {
        type: "SAVE_EVENTS",
        payload: list
    }
}

export const addNewRecord = (record) => {
    return {
        type: "ADD_ITEM",
        payload: record
    }
}