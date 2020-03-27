import { firestore} from "../base"
import { Report } from "../stores/reports/types"

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

export const createReportRequest = async (report: Report) => {
  try {
    const res = await firestore.collection('reports').add(report);
    return{
      error: false,
      data: res.id
    }
  } catch (error) {
    return {
      error: true,
      message: error.message
    };
  }
}


export {
  
}