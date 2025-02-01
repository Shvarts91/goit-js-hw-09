const feedbackForm = document.querySelector('.feedback-form');
const inputEmail = document.querySelector("input[name='email']");
const inputMessage = document.querySelector("textarea[name='message']");

const formData = {
  email: '',
  message: '',
};

function setFormData() {
  let savedData = localStorage.getItem('feedback-form-state');

  if (!savedData) return;
  const { email, message } = JSON.parse(savedData);

  formData.email = email;
  inputEmail.value = email;

  formData.message = message;
  inputMessage.value = message;
}

function handleFormData(evt) {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleSubmit(e) {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.clear();
  feedbackForm.reset();
  formData.email = '';
  formData.message = '';
}

setFormData();

feedbackForm.addEventListener('input', handleFormData);

feedbackForm.addEventListener('submit', handleSubmit);
