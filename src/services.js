export const getFormData = (success, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(success) {
        resolve(mokedFormData);
      } else {
        reject({message: 'Error'});
      }
    }, timeout);
  });
}


const mokedFormData = {
  normalTextField: 'Came from backend',
  normalTextFieldController: 'Came from backend',
  maskTextField: '12/15/6595',
  maskTextFieldWithController: '12/15/6595',
  multipleMask: '(49) 5698-5952',
  multipleMaskWithController: '(49) 5698-5952',
  typeFile: 'https://preview.redd.it/5s5fjqdbrgm51.jpg?width=640&crop=smart&auto=webp&s=f39704cdef71038c61ea894a907453772d21a4db'
}