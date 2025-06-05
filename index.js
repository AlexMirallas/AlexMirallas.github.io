const sendMessageButton = document.getElementById('sendMessage');
const formInputs = document.querySelectorAll('.form-control');

formInputs.forEach(input => {
  input.addEventListener('input', () => {
    let allFilled = false;
    formInputs.forEach(i => {
      if (i.value.trim() !== '') {
        allFilled = true;
      }
    });

    sendMessageButton.classList.toggle('disabled', !allFilled);
  });
})
