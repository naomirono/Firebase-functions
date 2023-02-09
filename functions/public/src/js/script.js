const form = document.querySelector('#book-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  
      const nameInput = form.elements.name.value;
      const email= form.elements.email.value;
      const phone= form.elements.phone.value;
      const address= form.elements.address.value;
      const location = form.elements.location.value;
      const guest = form.elements.guest.value;
      const arrival = form.elements.arrival.value;
      const leaving = form.elements.leaving.value;

  const response = await fetch('<Firebase Function URL>/Booking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nameInput, email, phone, address, location, guest,arrival,  leaving})
  });

  const result = await response.json();
  console.log(result);
});