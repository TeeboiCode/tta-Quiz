<template>
  <div class="form-container">
    <h1>Create an Account</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          v-model="form.name"
          type="text"
          id="name"
          placeholder="Enter your name"
        />
        <p v-if="errors.name" class="error">{{ errors.name }}</p>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          placeholder="Enter your email"
        />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input
          v-model="form.password"
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <p v-if="errors.password" class="error">{{ errors.password }}</p>
      </div>

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      errors: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    // Form Validation
    validateForm() {
      let isValid = true;

      // Name validation
      if (!this.form.name) {
        this.errors.name = "Name is required.";
        isValid = false;
      } else {
        this.errors.name = "";
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email) {
        this.errors.email = "Email is required.";
        isValid = false;
      } else if (!emailRegex.test(this.form.email)) {
        this.errors.email = "Invalid email address.";
        isValid = false;
      } else {
        this.errors.email = "";
      }

      // Password validation
      if (!this.form.password) {
        this.errors.password = "Password is required.";
        isValid = false;
      } else if (this.form.password.length < 6) {
        this.errors.password = "Password must be at least 6 characters.";
        isValid = false;
      } else {
        this.errors.password = "";
      }

      return isValid;
    },

    // Form Submission
    async handleSubmit() {
      if (this.validateForm()) {
        try {
          // Send data to json-server
          const response = await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.form),
          });

          if (response.ok) {
            Swal.fire({
              title: "Success!",
              text: "Account created successfully.",
              icon: "success",
              confirmButtonText: "OK",
            });

            // Reset form
            this.form.name = "";
            this.form.email = "";
            this.form.password = "";
          } else {
            throw new Error("Failed to create account.");
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again later.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } else {
        Swal.fire({
          title: "Validation Error",
          text: "Please fix the errors in the form.",
          icon: "warning",
          confirmButtonText: "OK",
        });
      }
    },
  },
};
</script>

<style>
.form-container {
  width: 300px;
  margin: 50px auto;
  font-family: Arial, sans-serif;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  width: 100%;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 12px;
}
</style>
