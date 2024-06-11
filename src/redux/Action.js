import { ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_UNCOMPLETED, REMOVE_TODO, TOGGLE_TODO, UPDATA_SERACH_TERM } from '../redux/ActionType.js';
export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text }
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const remove = (id) => ({
    type: REMOVE_TODO,
    payload: { id }
});

export const markCompleted = (id) => ({
    type: MARK_COMPLETED,
    payload: { id }
});

export const markUncompleted = (id) => ({
    type: MARK_UNCOMPLETED,
    payload: { id }
});

export const filterTudo = (filter) => ({
    type: FILTER_TODO,
    payload: { filter }
})

export const markAllcompleted = () => ({
    type: MARK_ALL_COMPLETED,
})

export const updateSerachtrem = (serachTerm) => ({
    type: UPDATA_SERACH_TERM,
    payload: { serachTerm }
})