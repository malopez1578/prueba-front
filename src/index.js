const form = document.getElementById('formQuote');
const btnSubmit = document.getElementById('btn_submit');

const validateForm = () => {
  if (form.cardBrand.value === '') {
    form.cardBrand.classList.add('is-invalid');
  }
  if (form.cardModel.value === '') {
    form.cardModel.classList.add('is-invalid');
  }
  if (form.cardAge.value === '') {
    form.cardAge.classList.add('is-invalid');
  }
  if (form.userEmail.value === '') {
    form.userEmail.classList.add('is-invalid');
  }
};

btnSubmit.addEventListener('click', (e) => validateForm());
