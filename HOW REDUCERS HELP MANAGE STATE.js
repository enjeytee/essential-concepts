/// REDUCERS - HELPS US MANAGE APP STATE ///
/// (state, action) => newState;

const inititalUser = {
    name: "Neil",
    email: "deck4cc@gmail.com"
};
const userReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            return { ...state, name: action.payload.name };
        case "CHANGE_EMAIL":
            return { ...state, email: action.payload.email };
        default:
            return state;
    };
};
const result01 = userReducer(inititalUser, { type: "CHANGE_NAME", payload: { name: "John" }});
console.log(result01);
const result02 = userReducer(inititalUser, { type: "CHANGE_EMAIL", payload: { email: "enjeytee@gmail.com" }});
console.log(result02);