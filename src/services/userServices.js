import app from "../base";
import { firestore} from "../base";

// export function writeUserData(userId, data, callback) {
//     app.database().ref('users/' + userId).set({
//       ...data
//     },function(error){
//        callback && callback(error)
//     });
// }


export const writeUserData = (userId,data,onSuccess,onError) => {
  firestore.collection('users').doc(userId).set({
      ...data,
      userId
  })
  .then(res=>{
    onSuccess(res)
  }).catch(error=>{
    onError(error)
  });
}


export const getUserById = (userId,onSuccess,onError) => {
    firestore.collection('users').doc(userId).get().then(function(doc) {
        if (doc.exists) {
            onSuccess(doc.data())
        } else {
            onSuccess(doc.data())
        }
    }).catch(function(error) {
        onError(error)
    });
  }

  export const checkUserExists = (email,onSuccess,onError)=> {
    firestore.collection('users').where('email','==',email).get().then(function(doc) {
        onSuccess(doc.size > 0)
    }).catch(function(error) {
        onError(error)
    });
  }


  export async function getUserId(email){
    try{
      const res = await firestore.collection('users').where('email','==',email).get();
      let userId; 
      res.forEach(d=>{
          userId = d.data()
      })
      console.log('FROM FUNC',userId)
      return userId
    }catch(error) {
        return null
    };
  }
    