
import {  CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS,  DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS,  FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from "./ActionType";

const initialState = {
    comments: [],
    loading: false,
    error: null,

}

export const CommentReducer = (state = initialState, action) => {

    switch (action.type) {

        case CREATE_COMMENT_REQUEST:
        case DELETE_COMMENT_REQUEST:
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }


        case CREATE_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: [...state.comments, action.comments]
            }


        case DELETE_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: state.comments.filter(
                    (comment) => comment.id !== action.commentId
                )
            }

        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state;

    }

}


