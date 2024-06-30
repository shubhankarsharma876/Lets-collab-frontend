import api, { API_BASE_URL } from "@/config/api"
import { type } from "os";
import { ACCEPT_INVITATION_REQUEST, ACCEPT_INVITATION_SUCCESS, ASSIGNED_ISSUE_TO_USER_FAILURE, ASSIGNED_ISSUE_TO_USER_REQUEST, ASSIGNED_ISSUE_TO_USER_SUCCESS, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, FETCH_ISSUES_BY_ID_FAILURE, FETCH_ISSUES_BY_ID_REQUEST, FETCH_ISSUES_BY_ID_SUCCESS, FETCH_ISSUES_FAILURE, FETCH_ISSUES_REQUEST, FETCH_ISSUES_SUCCESS, FETCH_PROJECT_BY_ID_SUCCESS, FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS, INVITE_TO_PROJECT_REQUEST, INVITE_TO_PROJECT_SUCCESS, SEARCH_PROJECT_REQUEST, SEARCH_PROJECT_SUCCESS, UPDATE_ISSUE_REQUEST, UPDATE_ISSUE_STATUS_FAILURE, UPDATE_ISSUE_STATUS_REQUEST, UPDATE_ISSUE_STATUS_SUCCESS } from "./ActionType";

export const fetchIssues=(id) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ISSUES_REQUEST })
        try {
            const response = await api.get(`/api/issues/project/${Id}`)
            console.log("fetch issues", response.data);
            dispatch({ type: FETCH_ISSUES_SUCCESS, issues: response.data })
        } catch (error) {
            dispatch(
                {
                    type: FETCH_ISSUES_FAILURE,
                    issues: error.message
                }
            )
            console.log(error);

        }
    }
}




export const fetchIssuesById=(id) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ISSUES_BY_ID_REQUEST })
        try {
            const response = await api.get(`/api/issues/${Id}`)
            console.log("fetch issues by id", response.data);
            dispatch({ type: FETCH_ISSUES_BY_ID_SUCCESS, issues: response.data })
        } catch (error) {
            dispatch(
                {
                    type: FETCH_ISSUES_BY_ID_FAILURE,
                    issues: error.message
                }
            )
            console.log(error);

        }
    }
}



export const updateIssueStatus=({id,status}) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_ISSUE_STATUS_REQUEST })
        try {
            const response = await api.put(`/api/issues/${id}/status/${status}`)
            console.log("update issues status", response.data);
            dispatch({ type: UPDATE_ISSUE_STATUS_SUCCESS, issues: response.data })
        } catch (error) {
            dispatch(
                {
                    type: UPDATE_ISSUE_STATUS_FAILURE,
                    issues: error.message
                }
            )
            console.log(error);

        }
    }
}



export const assignedUserToIssue=({issueId,userId}) => {
    return async (dispatch) => {
        dispatch({ type: ASSIGNED_ISSUE_TO_USER_REQUEST })
        try {
            const response = await api.put(`/api/issues/${issueId}/status/${userId}`)
            console.log("assigned issue ---", response.data);
            dispatch({ type: ASSIGNED_ISSUE_TO_USER_SUCCESS, issues: response.data })
        } catch (error) {
            dispatch(
                {
                    type: ASSIGNED_ISSUE_TO_USER_FAILURE,
                    issues: error.message
                }
            )
            console.log(error);

        }
    }
}