import throttle from 'lodash.throttle';

// 1st variant --------------------------------------------------

// const LOCAL_KEY = 'feedback-form-state';
// let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

// form = document.querySelector('.feedback-form');

// form.addEventListener('input', throttle(storageFormData, 500));
// form.addEventListener('submit', onFormSubmit);

// reloadPage();

// function storageFormData(e) {
//   formData[e.target.name] = e.target.value.trim();
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   //      if (refs.input.value === "" || refs.textarea.value === "") {
//   //          return alert(`Please fill in all the fields!`);
//   //      }
//   // or
//   // const { email, message } = e.currentTarget.elements;
//   // console.log({ email: email.value, message: message.value });
//   // or
//   console.log(formData);
//   e.currentTarget.reset();
//   localStorage.removeItem(LOCAL_KEY);
//   formData = {};
// }

// function reloadPage() {
//   if (formData) {
//     let { email, message } = form.elements;
//     email.value = formData.email || '';
//     message.value = formData.message || '';
//   }
// }

// 2nd variant -------- NEXT VARIANT WITHOUT OBJECT formData = {}; --------------------------------------

// const LOCAL_KEY = 'feedback-form-state';
// const form = document.querySelector('.feedback-form');

// populateFeedbackForm();
// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onInputData, 500));

// function onFormSubmit(e) {
//   e.preventDefault();
//   const { email, message } = e.currentTarget.elements;
//   console.log({ email: email.value, message: message.value });
//   localStorage.removeItem(LOCAL_KEY);
//   e.currentTarget.reset();
// }

// function onInputData(e) {
//   let data = localStorage.getItem(LOCAL_KEY);
//   data = data ? JSON.parse(data) : {};
//   let { email, message } = form.elements;
//   data = {
//     email: email.value.trim(),
//     message: message.value.trim(),
//   };

//   // data[e.target.name] = e.target.value.trim(); // виводить в localStorage лише один ключ з значенням, якщо інший не заповнений
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
// }

// function populateFeedbackForm() {
//   let data = localStorage.getItem(LOCAL_KEY);
//   if (data) {
//     data = JSON.parse(data);
//     Object.entries(data).forEach(([name, value]) => {
//       form.elements[name].value = value ?? '';
//     });
//   }
// }

// 3rd variant-------- NEXT VARIANT WITH OBJECT formData = {}; ----------------------------------------
// виводить в localStorage лише один ключ з значенням, якщо інший не заповнений ------------

// const LOCAL_KEY = 'feedback-form-state';
// const form = document.querySelector('.feedback-form');
// populateFeedbackForm();
// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onInputData, 500));

// function onFormSubmit(e) {
//   e.preventDefault();
//   const { email, message } = e.currentTarget.elements;
//   console.log({ email: email.value, message: message.value });
//   if (localStorage.getItem(LOCAL_KEY)) {
//     localStorage.removeItem(LOCAL_KEY);
//   }
//   e.currentTarget.reset();
// }

// function onInputData(e) {
//   let data = localStorage.getItem(LOCAL_KEY);
//   data = data ? JSON.parse(data) : {};
//   data[e.target.name] = e.target.value.trim();
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
// }

// function populateFeedbackForm() {
//   let data = localStorage.getItem(LOCAL_KEY);
//   if (!data) return;
//   data = JSON.parse(data);
//   // Object.entries(data).forEach(([name, value]) => {
//   //   form.elements[name].value = value || '';
//   // });
//   for (const key in data) {
//     form.elements[key].value = data[key] || '';
//   }
// }

// 4th variant ------------ NEXT VARIANT WITH OBJECT formData = {}; -------------------------

// const LOCAL_KEY = 'feedback-form-state';
// let formData = {};

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   input: document.querySelector('.feedback-form  input'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };

// refs.form.addEventListener('input', throttle(onInputData, 500));
// refs.form.addEventListener('submit', onFormSubmit);

// populateFeedbackForm();

// function onInputData(e) {
//   formData = {
//     email: refs.input.value.trim(),
//     message: refs.textarea.value.trim(),
//   };
//   //formData[e.target.name] = e.target.value.trim(); // виводить в localStorage лише один ключ з значенням, якщо інший не заповнений
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
// }

// function onFormSubmit(e) {
//   e.preventDefault();

//   const { email, message } = e.currentTarget.elements;
//   console.log({ email: email.value.trim(), message: message.value.trim() });

//   if (localStorage.getItem(LOCAL_KEY)) {
//     // let data = JSON.parse(localStorage.getItem(LOCAL_KEY));
//     // console.log(data);
//     localStorage.removeItem(LOCAL_KEY);
//   }
//   e.currentTarget.reset();
//   formData = {};
// }

// function populateFeedbackForm() {
//   let data = localStorage.getItem(LOCAL_KEY);
//   if (!data) return;
//   formData = JSON.parse(data);
//   refs.input.value = formData.email ?? '';
//   refs.textarea.value = formData.message ?? '';
// }
// -----------

//  ------------------------- NEXT VARIANT --------------
const LOCAL_KEY = 'feedback-form-state';

form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
  dataForm = {};
}
