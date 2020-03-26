export interface Report{
  city?: string;
  age: string;
  gender?: 'male' | 'female';
  isFeverish?: boolean;
  feverLevel?: 'high' | 'low' | 'intermittent';
  isCoughing?: boolean;
  coughType?: 'sputum' | 'dry';
  runnyNose?: boolean;
  soreThroat?: boolean;
  hasHeartDisease?: boolean;
  specialConditions?: 'diabetic' | 'hypertensive' | 'asthmatic' [];
  cancerous?: boolean;
  recentTravel?: boolean;
  arrivalDate?: string | Date;
  foreignContacts?: boolean;
}

export interface CityReport{
  city: string;
  reports: Report[]
}

export interface ReportsState{
  data: Report[];
  error: string;
  loading: boolean;
}

export interface ReportState{
  data: Report | null;
  error: string;
  loading: boolean;
}

export interface GetReportActionType{
  type: ReportActionTypes.GET_REPORT_REQUEST,
  payload: {
    id: string;
  }
}

export interface CreateReportActionType{
  type: ReportActionTypes.GET_REPORTS_BY_CITY_REQUEST,
  payload: {
    report: Report;
  }
}

export enum ReportActionTypes{
  GET_REPORT_REQUEST = 'GET_REPORT_REQUEST',
  GET_REPORT_REQUEST_SUCCESS = 'GET_REPORT_REQUEST_SUCCESS',
  GET_REPORT_REQUEST_FAILURE = 'GET_REPORT_REQUEST_FAILURE',

  GET_REPORTS_BY_CITY_REQUEST = 'GET_REPORTS_BY_CITY_REQUEST',
  GET_REPORTS_BY_CITY_REQUEST_SUCCESS = 'GET_REPORTS_BY_CITY_REQUEST_SUCCESS',
  GET_REPORTS_BY_CITY_REQUEST_FAILURE = 'GET_REPORTS_BY_CITY_REQUEST_FAILURE',

  CREATE_REPORT_BY_CITY_REQUEST = 'CREATE_REPORT_BY_CITY_REQUEST',
  CREATE_REPORT_BY_CITY_REQUEST_SUCCESS = 'CREATE_REPORT_BY_CITY_REQUEST_SUCCESS',
  CREATE_REPORT_BY_CITY_REQUEST_FAILURE = 'CREATE_REPORT_BY_CITY_REQUEST_FAILURE',
}