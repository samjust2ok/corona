import { Reducer } from 'redux'
import { ReportsState, ReportActionTypes } from '../constants/types'

const initialState: ReportsState = {
  data: [],
  error: '',
  loading: false
}

export const reportsReducer: Reducer<ReportsState> = (state = initialState, action) => {
  switch (action.type) {
    case ReportActionTypes.GET_REPORTS_BY_CITY_REQUEST: {
      return { ...state, loading: true }
    }
    case ReportActionTypes.GET_REPORTS_BY_CITY_REQUEST_SUCCESS: {
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