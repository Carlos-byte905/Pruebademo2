document.getElementById('tech-form').addEventListener('submit', function (event) {
    // Obtener los valores de los inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const problemDescriptionInput = document.getElementById('problem_description');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const descriptionError = document.getElementById('description-error');

    let valid = true;

    // Validación de Nombre y Apellido
    const nameValue = nameInput.value.trim();
    const nameParts = nameValue.split(' ').filter(part => part.trim() !== '');
    if (nameParts.length < 2) { // Al menos dos palabras
      nameInput.classList.add('error');
      nameError.style.display = 'block';
      valid = false;
    } else {
      nameInput.classList.remove('error');
      nameError.style.display = 'none';
    }

    // Validación de Correo Electrónico
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailValue)) {
      emailInput.classList.add('error');
      emailError.style.display = 'block';
      valid = false;
    } else {
      emailInput.classList.remove('error');
      emailError.style.display = 'none';
    }

    // Validación de Descripción del Problema (solo "Imagen 1" a "Imagen 6")
    const descriptionValue = problemDescriptionInput.value.trim();
    const validDescriptions = ["Imagen 1", "imagen 1", "Imagen 2", "imagen 2", "Imagen 3","imagen 3", "Imagen 4","imagen 4", "Imagen 5","imagen  5", "Imagen 6", "imagen 6", "Imagen 7", "imagen 7", "Imagen 8", "imagen 8", "Imagen 9", "imagen 9", "Imagen 10", "imagen 10", "Imagen 11","imagen 11", "Imagen 12","imagen 12", "Imagen 13","imagen 13", "Imagen 14","imagen 14", "Imagen 16","imagen 16","Imagen 17","imagen 17","Imagen 18","imagen 18","Imagen 19","imagen 19","Imagen 20","imagen 20",];

    if (!validDescriptions.includes(descriptionValue)) {
      problemDescriptionInput.classList.add('error');
      descriptionError.style.display = 'block';
      valid = false;
    } else {
      problemDescriptionInput.classList.remove('error');
      descriptionError.style.display = 'none';
    }

    // Prevenir envío si hay errores
    if (!valid) {
      event.preventDefault();
    }
  });