import { firestore} from "../base"
import { Report } from "../constants/types"

export const getReportRequest = async (id: string) => {
  try {
    const res = await firestore.collection('reports').doc(id).get()
    return {
      error: false,
      data: res.data()
    };
  } catch (error) {
    return {
      error: true,
      message: error.message
    };
  }
}


export const getReportsRequest = async () => {
  let reports: Report[] = [];
  try {
    const res = await firestore.collection('reports').get();
    res.forEach(report => {
      reports.push(report.data() as Report);
    });
    return {
      error: false,
      data: reports
    };
  } catch (error) {
    return{
      error: true,
      message: error.message
    };
  }
} 

export const createReportRequest = async (userId: string, report: Report) => {
  try {
    const res = await firestore.collection('reports').doc(userId).set(report);
    return{
      error: false,
      reponse: res
    }
  } catch (error) {
    return {
      error: true,
      message: error.message
    };
  }
}

