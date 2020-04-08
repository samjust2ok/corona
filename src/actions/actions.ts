import { action } from 'typesafe-actions';
import { ReportActionTypes, Report } from '../constants/types';

export const fetchSingleReportRequest = (id: string) => action(ReportActionTypes.GET_REPORT_REQUEST, id);
export const fetchSingleReportSuccess = (data: Report) => action(ReportActionTypes.GET_REPORT_REQUEST_SUCCESS, data);
export const fetchSingleReportFailure = (error: string) => action(ReportActionTypes.GET_REPORT_REQUEST_FAILURE, error);

export const createNewReportByCity = (data: Report) => action(ReportActionTypes.CREATE_REPORT_BY_CITY_REQUEST, data);
export const createNewReportByCitySuccess = () => action(ReportActionTypes.CREATE_REPORT_BY_CITY_REQUEST_SUCCESS);
export const createNewReportByCityFailure = (error: string) => action(ReportActionTypes.CREATE_REPORT_BY_CITY_REQUEST_FAILURE, error);

export const fetchReportsRequest = (city: string) => action(ReportActionTypes.GET_REPORTS_BY_CITY_REQUEST, city);
export const fetchReportsSuccess = (data: Report[]) => action(ReportActionTypes.GET_REPORT_REQUEST_SUCCESS, data);
export const fetchReportsFailure = (error: string) => action(ReportActionTypes.GET_REPORT_REQUEST_FAILURE, error);