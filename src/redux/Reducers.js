import { ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_UNCOMPLETED, REMOVE_TODO, TOGGLE_TODO, UPDATA_SERACH_TERM } from "../redux/ActionType.js";


const initialState = {
    todos: [],
    filter: "ALL",
    searchTerm: ""
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, { text: action.payload.text, completed: false }],
                filter: state.filter,
                serachTerm: state.searchTerm
            }
        case TOGGLE_TODO:
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ?
                        { ...todo, completed: !todo.completed } : todo),
                filter: state.filter,
                serachTerm: state.searchTerm
            }
        case REMOVE_TODO:
            return {
                todos: state.todos.filter((todo, index) =>
                    index === action.payload.id),
                filter: state.filter,
                serachTerm: state.searchTerm
            }
        case MARK_COMPLETED:
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ?
                        { ...todo, completed: true } : todo),
                filter: state.filter,
                serachTerm: state.searchTerm
            }

        case MARK_UNCOMPLETED:
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ?
                        { ...todo, completed: false } : todo),
                filter: state.filter,
                serachTerm: state.searchTerm
            }

            case FILTER_TODO :
                return {
                    todos: state.todos,
                    filter: action.payload.filter,
                    serachTerm: state.searchTerm
                }

                case UPDATA_SERACH_TERM :
                    return {
                        todos: state.todos,
                        filter: state.filter,
                         serachTerm: action.payload.serachTerm
                    }

                    case MARK_ALL_COMPLETED : 
                    return{
                        todos: state.todos.map((todo) =>(
                                { ...todo, completed: true })),
                        filter: state.filter,
                        serachTerm: state.searchTerm
                    }

        default:
            return state ;
    }
}

export default todoReducer;