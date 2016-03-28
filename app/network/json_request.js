import fetch from './fetch_api.js';


module.exports = (path) => {
  return new Promise((resolve, reject) => {
    fetch(path).then((response) => {
      response.json().then((data) => {
        resolve({json: data, success: true});
      }).catch((error) => {
        reject({json: {}, success: false, message: 'Error in response json.'});
      });
    }).catch((error) => {
      reject({json: {}, success: false, message: 'Error in fetch.'});
    });
  });
};