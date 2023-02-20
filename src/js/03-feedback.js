import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
// let formData = {};
// const savedValues = localStorage.getItem(STORAGE_KEY);
// const savedDataObject = JSON.parse(savedValues);

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   input: document.querySelector('.feedback-form  input'),
//   textarea: document.querySelector('.feedback-form  textarea'),
// };

// refs.form.addEventListener('input', throttle(storageFormData, 500));
// refs.form.addEventListener('submit', onFormSubmit);

// reloadPage();

// function storageFormData(e) {
//   formData[e.target.name] = e.target.value.trim();
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   //      if (refs.input.value === "" || refs.textarea.value === "") {
//   //          return alert(`Please fill in all the fields!`);
//   //      }

//   const savedDatas = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   console.log(savedDatas);

//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   formData = {};
// }

// function reloadPage() {
//   if (savedValues) {
//     // 1st variant

//     // for (let key in savedDataObject) {
//     //   refs.form.elements[key].value = savedDataObject[key];
//     // }

//     // best light variant
//     refs.input.value = savedDataObject.email || '';
//     refs.textarea.value = savedDataObject.message || '';
//   }
// }

//-------- NEXT VARIANT WITHOUT OBJECT formData = {}; -----------------------------------------
const LOCAL_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
populateFeedbackForm();
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData, 500));

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
}

function onInputData(e) {
  let data = localStorage.getItem(LOCAL_KEY);
  data = data ? JSON.parse(data) : {};
  data[e.target.name] = e.target.value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}

function populateFeedbackForm() {
  let data = localStorage.getItem(LOCAL_KEY);
  if (data) {
    data = JSON.parse(data);
    console.log(data);
    Object.entries(data).forEach(([name, value]) => {
      form.elements[name].value = value || '';
    });
  }
}
