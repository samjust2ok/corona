//test for Empty String
export const isES = (string)=>string.length <=0;
export const isNull = (value) => value === null;

const validPhoneNumber = (phoneNumber)=>{
    const reg = /^[0]\d{10}$/;
    return reg.test(phoneNumber)
}

const normalTextField = (string)=>{
    const reg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return reg.test(string.trim())
}

const emailValidator = (string)=>{
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return reg.test(string)
}


export const validators = {
    emailValidator,
    textValidator: normalTextField,
    phoneNumberValidator: validPhoneNumber
}