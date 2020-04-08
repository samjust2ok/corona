export interface Report{
  personalInformation: {
    firstName: string;
    lastName:string;
    age: string;
    gender: 'male' | 'female';
    phoneNumber: string;
    email: string;
    state: string;
  };
  symptoms:{
    hasFever: boolean;
    feverSeverity: string;
    hasCough: boolean;
    coughType: string;
    hasRunnyNose: boolean,
    hasSoreThroat: boolean;
    hasDifficultyBreathing:boolean;
    symptomsDescription: string;
  };
  medicalHistory: {
    hasHeartDisease: boolean;
    diseaseType: string;
    hasCancer: boolean;
  };
  travelHistory:{
      hasTravelled: null,
      countryVisited: string;
      dateArrived:Date;   
  };
  generalQuestions:{
      ncdcContacted: boolean;
      contactTested: string | boolean;
      symptomsSeverity: string;
  };
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