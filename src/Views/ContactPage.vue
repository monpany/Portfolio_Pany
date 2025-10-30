<template>
  <div>
    <h1>Contact Us 📧</h1>
    <p>We'd love to hear from you. Please fill out the form below!</p>
    
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" rows="5" required></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>

    <p v-if="submittedMessage" class="success-message">{{ submittedMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      // Data properties to store the user's input
      form: {
        name: '',
        email: '',
        message: ''
      },
      submittedMessage: '' // Message to show after successful submission
    };
  },
  methods: {
    // Method to handle the form submission
    handleSubmit() {
      // 1. Log data to console (in a real app, you would send this to an API)
      console.log('--- Form Submitted! ---');
      console.log('Name:', this.form.name);
      console.log('Email:', this.form.email);
      console.log('Message:', this.form.message);
      
      // 2. Display success message
      this.submittedMessage = 'Thank you for your message! We will get back to you soon.';

      // 3. Clear the form fields
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
/* Basic styling */

/* Form container with white background */
form {
  background-color: white; /* <-- Your requested background color */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); 
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input[type="text"], 
input[type="email"], 
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; 
}

textarea {
  resize: vertical;
}

button {
  background-color: #42b983; /* Vue Green */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #38a16c;
}

.success-message {
  margin-top: 1.5rem;
  padding: 1rem;
  border: 1px solid #42b983;
  background-color: #e6fff2;
  color: #2c3e50;
  border-radius: 4px;
  font-weight: bold;
}
</style>