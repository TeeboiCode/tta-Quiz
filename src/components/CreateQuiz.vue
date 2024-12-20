<template>
  <div class="container-fluid">
    <div class="container">
      <router-link to="/" class="back-btn">
        <button class="button-82-pushable" role="button">
          <span class="button-82-shadow"></span>
          <span class="button-82-edge back"></span>
          <span class="button-82-front back text">
            <i class="fa-solid fa-arrow-left"></i>
            <span> Back </span>
          </span>
        </button>
      </router-link>
      <h1 class="title">Create an account</h1>
      <p class="subtitle">Sign up</p>

      <form @submit.prevent.enter="handleSubmit">
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            v-model="userInfo.email"
            required
          />
        </div>

        <div class="form-group">
          <input
            :type="showPassword ? 'text' : 'password'"
            class="form-control"
            id="password"
            maxlength="6"
            v-model="userInfo.password"
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
        <p class="passwordinfo">
          Your password needs to be at least 6 characters.
        </p>

        <div class="form-group">
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            class="form-control"
            id="password"
            v-model="userInfo.confirmPassword"
            placeholder="Confirm Password"
            required
          />
          <i
            :class="[
              'fas',
              showConfirmPassword ? 'fa-eye-slash' : 'fa-eye',
              'password-toggle',
            ]"
            @click="toggleConfirmPassword"
          ></i>
        </div>

        <div class="checkbox-group">
          <input
            type="checkbox"
            id="updates"
            v-model="userInfo.ttaInfo"
            true-value="yes"
            false-value="no"
          />
          <label for="updates"
            >I want to receive information, offers, recommendations and updates
            from TTA</label
          >
        </div>

        <!-- <button type="submit" class="btn btn-primary">
          <i class="fas fa-user-plus me-1"></i>
          Sign Up
        </button> -->

        <button type="submit" class="button-82-pushable w-100" role="button">
          <span class="button-82-shadow"></span>
          <span class="button-82-edge signUp"></span>
          <span class="button-82-front signUp text">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/fluency/48/add-user-male.png"
              alt="add-user-male"
            />
            <span> Sign Up </span>
          </span>
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
  </div>
</template>

<script>
export default {
  name: "CreateQuizVue",
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      userInfo: {
        email: "",
        password: "",
        confirmPassword: "",
        ttaInfo: "no",
      },
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },

    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
  },
};
</script>

<style scoped>
.container-fluid {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/bg-3.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

@media (min-width: 500px) and (max-height: 499px) {
  .container-fluid {
    background-image: url("../assets/bg-2.png") !important;
  }
}

@media (min-width: 900px) and (max-height: 1000px) {
  .container-fluid {
    background-image: url("../assets/bg-2.png");
  }
}

.container {
  background: rgba(255, 255, 255, 0.5);
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
  left: 40px;
  color: #fff;
  /* background: #171754; */
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  padding: 8px 10px;
  /* border-radius: 8px; */
  z-index: 10;
}

@media (min-width: 1010px) {
  .back-btn {
    top: 60px;
    left: 150px;
  }
}

.title {
  color: hsl(120, 100%, 25%);
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.form-group {
  margin-bottom: 1.5rem;
  position: relative;
}

.passwordinfo {
  color: hsl(340deg 100% 33%);
}

.form-control {
  width: 100%;
  padding: 1.5rem !important;
  border: 3px solid hsl(340deg 100% 33%) !important;
  background: hsla(340, 100%, 33%, 0.103);
  border-radius: 8px;
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.3s ease;
}

.form-control::placeholder {
  color: #898989;
}

.form-control:focus {
  outline: none;
  border-color: #0a69ed;
  box-shadow: 0 0 0 3px hsla(340, 100%, 33%, 0.353);
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

.button-82-pushable span {
  font-weight: 700;
}

.button-82-pushable i {
  margin-right: 5px;
}

.button-82-pushable:hover i {
  animation: spin 1s ease-in-out;
}

.button-82-pushable {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-82-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

.button-82-edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.button-82-edge.signUp {
  background: linear-gradient(
    to left,
    hsl(120deg 100% 16%) 0%,
    hsl(120deg 100% 32%) 8%,
    hsl(120deg 100% 32%) 92%,
    hsl(120deg 100% 16%) 100%
  );
}

.button-82-edge.back {
  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
}

.back-btn .button-82-front {
  display: block;
  position: relative;
  padding: 6px 15px;
  border-radius: 12px;
  font-size: 1rem;
  color: white;
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

.button-82-front {
  display: block;
  position: relative;
  padding: 12px 27px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

.button-82-front.back {
  background: hsl(340, 100%, 21%);
}

.button-82-front.signUp {
  background: hsl(120, 100%, 25%);
}

@media (min-width: 768px) {
  .button-82-front {
    font-size: 1.25rem;
    padding: 12px 42px;
  }
}

.button-82-pushable:hover {
  filter: brightness(110%);
  -webkit-filter: brightness(110%);
}

.button-82-pushable:hover .button-82-front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.button-82-pushable:active .button-82-front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.button-82-pushable:hover .button-82-shadow {
  transform: translateY(4px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.button-82-pushable:active .button-82-shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

.button-82-pushable:focus:not(:focus-visible) {
  outline: none;
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
