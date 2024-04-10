<template>
    <div class="container">
      <h2 class="title">Compose Email</h2>
      <div class="form-group">
        <label for="email">To:</label>
        <input type="email" id="email" class="input" v-model="email" placeholder="Enter recipient's email">
      </div>
      <div class="form-group">
        <label for="subject">Subject:</label>
        <input type="text" id="subject" class="input" v-model="subject" placeholder="Enter email subject">
      </div>
      <div class="form-group">
        <label for="message">Message (HTML):</label>
        <textarea id="message" class="textarea" v-model="message" rows="6" placeholder="Enter HTML content for the email body"></textarea>
      </div>
      <button class="button" @click="sendMail">Send Email</button>
    </div>
  </template>
  
  <style scoped>
  .container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .input, .textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 16px;
  }
  
  .textarea {
    resize: vertical;
  }
  
  .button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .button:hover {
    background-color: #0056b3;
  }
  </style>
  
  <script setup>
  import { ref } from "vue";
  import axios from "axios";
  
  const email = ref("");
  const subject = ref("");
  const message = ref("");
  
  const sendMail = async () => {
    try {
      const formData = new FormData();
      formData.append("email", email.value);
      formData.append("subject", subject.value);
      formData.append("message", message.value);
  
      await axios.post("http://localhost:8080/sendMail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      // Clear fields after sending
      email.value = "";
      subject.value = "";
      message.value = "";
  
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email. Please try again.");
    }
  };
  </script>
  