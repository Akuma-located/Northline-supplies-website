(() => {
  const form = document.getElementById('product-request-form');
  const status = document.getElementById('form-status');
  const details = document.getElementById('details');
  const charCount = document.getElementById('char-count');
  const formNext = document.getElementById('form-next');
  const category = document.getElementById('category');
  const estimatedPrice = document.getElementById('estimated-price');
  const estimatedPriceValue = document.getElementById('estimated-price-value');

  // Broad, indicative USD ranges only; these are not quotes or guarantees.
  const categoryEstimates = {
    'Tops': '$15–$60',
    'Bottoms': '$20–$80',
    'Footwear': '$35–$160',
    'Accessories': '$8–$75',
    'Electronics': '$25–$500',
    'Hoodies': '$25–$100',
    'Colognes': '$20–$180',
    'Puffers': '$40–$220',
    'Legos': '$15–$250',
    'Other': '$10–$200'
  };

  if (category && estimatedPrice && estimatedPriceValue) {
    category.addEventListener('change', () => {
      const selectedCategory = category.value;
      const estimate = categoryEstimates[selectedCategory];
      if (estimate) {
        estimatedPrice.textContent = estimate;
        estimatedPriceValue.value = estimate + ' USD for ' + selectedCategory + ' (estimate only; not final)';
      } else {
        estimatedPrice.textContent = 'Choose a category to see an estimate';
        estimatedPriceValue.value = 'Not calculated — no category selected';
      }
    });
  }

  // Replace this with your published GitHub Pages URL after deployment if you
  // want FormSubmit to redirect to a dedicated thank-you page.
  // This version displays a local confirmation message before sending.
  if (formNext) formNext.value = window.location.href.split('#')[0] + '?submitted=1';

  if (details && charCount) {
    const updateCount = () => { charCount.textContent = String(details.value.length); };
    details.addEventListener('input', updateCount);
    updateCount();
  }

  if (new URLSearchParams(window.location.search).get('submitted') === '1') {
    showStatus('Thanks — your request was submitted. We’ll follow up after checking the details.', 'info');
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  form.addEventListener('submit', (event) => {
    const email = document.getElementById('customer-email');
    const quantity = document.getElementById('quantity');
    const budget = document.getElementById('budget');
    const acknowledgment = document.getElementById('request-ack');

    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      return;
    }
    if (!email.validity.valid || Number(quantity.value) < 1 || Number(quantity.value) > 999) {
      event.preventDefault();
      showStatus('Please check your email and quantity, then try again.', 'error');
      return;
    }
    if (budget.value !== '' && Number(budget.value) < 0) {
      event.preventDefault();
      showStatus('Budget must be zero or greater, or left blank.', 'error');
      return;
    }
    if (!acknowledgment.checked) {
      event.preventDefault();
      showStatus('Please confirm that you understand this is a request, not a confirmed order.', 'error');
      return;
    }

    // Native POST to FormSubmit proceeds. This message does not mean delivery
    // has been confirmed; FormSubmit may require the inbox to be activated first.
    showStatus('Sending your request… If this is your first submission, FormSubmit may ask the inbox owner to activate email delivery.', 'info');
  });

  function showStatus(message, type) {
    status.textContent = message;
    status.className = 'form-status show ' + type;
    status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
})();
