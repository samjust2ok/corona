import { Reducer } from 'redux'
import { ReportState, ReportActionTypes } from './types'

const initialState: ReportState = {
  data: null,
  error: '',
  loading: false
}

export const reportReducer: Reducer<ReportState> = (state = initialState, action) => {
  switch (action.type) {
    case ReportActionTypes.GET_REPORT_REQUEST: {
      return { ...state, loading: true }
    }
    case ReportActionTypes.GET_REPORT_REQUEST_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case ReportActionTypes.GET_REPORTS_BY_CITY_REQUEST_FAILURE: {
      return { ...state, loading: false, error: action.payload }
    }
    default: {
      return state
    }
  }
}