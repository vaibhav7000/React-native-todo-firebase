import {  } from "react";

const todoInitialState = [{
    title: "Meeting with Liam",
    description: "Design new homepage for landing site",
    todoStatus: {
        type: "Work",
        priority: "Low",
    },
    completed: true,
    deadline: new Date("2026-03-25"),
}, {
    title: "Write script for youtube",
    description: "Outline key points for 60 seconds segment!",
    todoStatus: {
        type: "Work",
        priority: "Low",
    },
    completed: false,
    deadline: new Date("2026-01-25"),
}, {
    title: "Plan weekend date ideas",
    description: "Looking for someone for the date on weekends!",
    todoStatus: {
        type: "Personal",
        priority: "High",
    },
    completed: false,
    deadline: new Date("2025-11-29"),
}, {
    title: "Plan weekend date ideas",
    description: "Looking for someone for the date on weekends!",
    todoStatus: {
        type: "Personal",
        priority: "High",
    },
    completed: false,
    deadline: new Date("2025-11-8"),
}, {
    title: "Plan weekend date ideas",
    description: "Looking for someone for the date on weekends!",
    todoStatus: {
        type: "Personal",
        priority: "High",
    },
    completed: false,
    deadline: new Date("2026-11-29"),
}];

function TodoReducer(state, action) {
    const {type, payload} = action;
    const { deadline } = payload;

    const removeTodoTimestamp = Date.parse(deadline);

    switch(type) {
        case "Add":
            break;
        case "Remove":
            return state.filter(todo => {
                const currentTodoTimestamp = Date.parse(todo.deadline);
                if(removeTodoTimestamp === currentTodoTimestamp) {
                    return false;
                }

                return true;
            })
        case "Update":
            return state.map(todo => {
                const currentTodoTimestamp = Date.parse(todo.deadline);
                if(removeTodoTimestamp === currentTodoTimestamp) {
                    return {
                        ...payload
                    }
                } 

                return todo;
            })
            break;
    }
};

const add = (payload) => ({type: "Add", payload: {...payload}});
const remove = (payload) => ({type: "Remove", payload: {...payload}});
const update = (payload) => ({type: "Update", payload: {...payload}});

export {
    todoInitialState, TodoReducer, add, remove, update
}