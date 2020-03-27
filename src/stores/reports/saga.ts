import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ReportActionTypes, Report, GetReportActionType, CreateReportActionType } from './types'
import { getReportRequest, getReportsRequest, createReportRequest } from '../../services/reportsServices';
import { fetchReportsSuccess, fetchReportsFailure, createNewReportByCitySuccess, createNewReportByCityFailure, fetchSingleReportFailure, fetchSingleReportSuccess } from './actions'

function* getReport(action: GetReportActionType){
  const id: string = action.payload.id;
  const res: { error: boolean, data?: Report, message?: string } = yield call(getReportRequest, id);
  if (res.error) {
    yield put(fetchSingleReportFailure(res.message as string))
  } else {
    yield put(fetchSingleReportSuccess(res.data as Report))
  }
}

function* fetchReports(){
  const res: {error: boolean, data?:Report[], message?: string} = yield call(getReportsRequest);
  if (res.error) {
    yield put(fetchReportsFailure(res.message as string))
  }else{
    yield put(fetchReportsSuccess(res.data as Report[]))
  }
}

function* createReport(action: CreateReportActionType){
  const report: Report = action.payload.report;
  const res: { error: boolean, data?: string, message?: string } = yield call(createReportRequest, report);
  if (res.error) {
    yield put(createNewReportByCityFailure(res.message as string))
  } else {
    yield put(createNewReportByCitySuccess())
  }
}

function* watchGetReport(){
  yield takeLatest(ReportActionTypes.GET_REPORTS_BY_CITY_REQUEST, getReport)
}
 
function* watchFetchReports(){
  yield takeLatest(ReportActionTypes.GET_REPORTS_BY_CITY_REQUEST, fetchReports);
}

function* watchCreateReport(){
  yield takeEvery(ReportActionTypes.CREATE_REPORT_BY_CITY_REQUEST, createReport)
}

export default function* reportSaga(){
  yield all([
    fork(watchGetReport),
    fork(watchFetchReports),
    fork(watchCreateReport)
  ]);
}