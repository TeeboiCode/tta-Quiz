<template>
  <div class="container">
    <router-link to="/" class="back-btn">
      <i class="fa-solid fa-arrow-left"></i>
      Back
    </router-link>
    <h1 class="title">Create an account</h1>
    <p class="subtitle">Sign up</p>

    <form @submit="handleSubmit">
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Email" required />
      </div>

      <div class="form-group">
        <input
          :type="showPassword ? 'text' : 'password'"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Password"
          required
        />
        <i
          :class="[
            'fas',
            showPassword ? 'fa-eye-slash' : 'fa-eye',
            'password-toggle',
          ]"
          @click="togglePassword"
        ></i>
      </div>

      <div class="checkbox-group">
        <div
          class="g-recaptcha"
          data-sitekey="6LchYJoqAAAAAFBG6jwzG3n0oOJgHXcknyBvUCY7"
          data-callback="onRecaptchaVerified"
        ></div>
      </div>

      <div class="checkbox-group">
        <input type="checkbox" id="updates" />
        <label for="updates"
          >I want to receive information, offers, recommendations and updates
          from TTA</label
        >
      </div>

      <button type="submit" class="btn btn-primary">
        <i class="fas fa-user-plus me-1"></i>
        Sign Up
      </button>

      <div class="divider">or</div>

      <button type="button" class="btn btn-google" @click="signInWithGoogle">
        <i class="fab fa-google"></i>
        Continue with Google
      </button>

      <button type="button" class="btn btn-apple" @click="signInWithApple">
        <i class="fab fa-apple"></i>
        Continue with Apple
      </button>

      <button
        type="button"
        class="btn btn-microsoft"
        @click="signInWithMicrosoft"
      >
        <i class="fab fa-microsoft"></i>
        Continue with Microsoft
      </button>

      <div class="login-link">
        Already have an account? <a href="login.html">Login</a>
      </div>

      <div class="terms">
        By signing up, you accept our <a href="#">Terms and Conditions</a>.
        Please read our <a href="#">Privacy Policy</a> and
        <a href="#">Children's Privacy Policy</a>.
      </div>
    </form>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export default {
  name: "CreateQuizVue",
  data() {
    return {
      password: "",
      showPassword: false,
      recaptchaToken: null,
      isVerified: false,
    };
  },
  mounted() {
    // Load reCAPTCHA script
    const recaptchaScript = document.createElement("script");
    recaptchaScript.src = "https://www.google.com/recaptcha/api.js";
    document.head.appendChild(recaptchaScript);

    // Add callback function to window object
    window.onRecaptchaVerified = (token) => {
      this.recaptchaToken = token;
      this.isVerified = true;
      console.log("reCAPTCHA verified:", token);
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();

      if (!this.isVerified) {
        alert("Please complete the reCAPTCHA verification");
        return;
      }

      try {
        // Here you would send the form data along with the recaptchaToken to your backend
        // Your backend would then verify the token using the server-side key:
        // 6LchYJoqAAAAAFCIr4Wxk7VLEgfcmhlgV50RZYVn
        console.log("Form submitted with token:", this.recaptchaToken);
      } catch (error) {
        console.error("Submission error:", error);
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
.container {
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  width: 100%;
  max-width: 500px;
  /* animation: fadeIn 0.5s ease-out; */
  margin-top: 40px;
  margin-bottom: 40px;
}

.back-btn {
  position: absolute;
  top: 20px;
  left: 20px;
  color: #fff;
  background: #171754;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  padding: 10px 20px;
  border-radius: 8px;
}

.back-btn:hover {
  transform: translateX(-5px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.back-btn i {
  margin-right: 5px;
}

.title {
  color: #171754;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
}

.subtitle {
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
  position: relative;
}

.form-control {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: #0a69ed;
  box-shadow: 0 0 0 3px rgba(10, 105, 237, 0.1);
}

.password-toggle {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #666;
  transition: color 0.3s ease;
}

.password-toggle:hover {
  color: #171754;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.btn {
  width: 100%;
  padding: 12px 20px;
  margin-bottom: 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #171754 !important;
  color: #fff;
}

.btn-social {
  background: #fff;
  border: 1px solid #ddd;
  color: #333;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
}

.divider {
  text-align: center;
  margin: 1.5rem 0;
  position: relative;
}

.divider::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 45%;
  height: 1px;
  background: #ddd;
}

.divider::after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  width: 45%;
  height: 1px;
  background: #ddd;
}

.login-link {
  text-align: center;
  margin: 1rem 0;
}

.login-link a {
  color: #0a69ed;
  text-decoration: none;
}

.terms {
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
}

.terms a {
  color: #0a69ed;
  text-decoration: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.g-recaptcha {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}

.checkbox-group {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

/* Google Button */
.btn-google {
  background-color: #ffffff;
  color: #3c4043;
  border: 1px solid #dadce0;
  transition: all 0.3s ease;
}

.btn-google:hover {
  background-color: #f8f9fa;
  border-color: #dadce0;
  box-shadow: 0 1px 3px rgba(60, 64, 67, 0.3);
}

.btn-google i {
  background: conic-gradient(
      from -45deg,
      #ea4335 110deg,
      #4285f4 90deg 180deg,
      #34a853 180deg 270deg,
      #fbbc05 270deg
    )
    73% 55%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 10px;
  font-size: 18px;
}

/* Apple Button */
.btn-apple {
  background-color: black;
  color: white;
  border: none;
  transition: all 0.3s ease;
}

.btn-apple:hover {
  background-color: #1a1a1a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.btn-apple i {
  color: #ffffff;
  margin-right: 10px;
  font-size: 20px;
}

/* Microsoft Button */
.btn-microsoft {
  background-color: #2f2f2f;
  color: white;
  border: none;
  transition: all 0.3s ease;
}

.btn-microsoft:hover {
  background-color: #404040;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.btn-microsoft i {
  color: #00a4ef;
  margin-right: 10px;
  font-size: 18px;
}

/* Common button styles */
.btn {
  width: 100%;
  padding: 12px 20px;
  margin-bottom: 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn i {
  min-width: 24px;
  text-align: center;
}

/* Hover effect */
.btn:hover {
  transform: translateY(-1px);
}

/* Focus state */
.btn:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
}
</style>
