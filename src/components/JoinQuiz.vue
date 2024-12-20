<template>
  <div class="container-fluid p-5">
    <router-link to="/" class="back-btn">
      <button class="button-82-pushable" role="button">
        <span class="button-82-shadow"></span>
        <span class="button-82-edge create"></span>
        <span class="button-82-front create text">
          <i class="fa-solid fa-arrow-left"></i>
          <span> Back </span>
        </span>
      </button>
    </router-link>
    <div class="content-container text-center">
      <div class="container p-0 d-flex flex-column">
        <h1 class="title">Enter Pin</h1>

        <input
          type="text"
          class="pin-input"
          placeholder="Game Pin"
          maxlength="10"
        />

        <router-link to="/joinQuiz/" style="text-decoration: none">
          <button class="button-82-pushable" role="button">
            <span class="button-82-shadow"></span>
            <span class="button-82-edge join"></span>
            <span class="button-82-front join text">
              <i class="fas fa-play"></i>
              <span> Start Quiz</span>
            </span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JoinQuizVue",
};
</script>

<style scoped>
.container-fluid {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #f0f4ff5b; */
  background-image: url("../assets/bg-3.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.content-container {
  padding: 1.5rem;
  background: #ffffff8a;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  animation: fadeIn 0.5s ease-out;
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

.title {
  font-size: 2.5rem;
  color: hsl(120, 100%, 25%);
  font-weight: 900;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.pin-input {
  width: 100%;
  max-width: 300px;
  padding: 0.75rem;
  font-size: 2rem;
  font-weight: 800;
  border: 3px solid hsl(340deg 100% 33%) !important;
  border-radius: 10px;
  outline: none;
  text-align: center;
  margin-bottom: 2rem;
  background: hsla(340, 100%, 33%, 0.103);
  transition: all 0.3s ease;
}

.pin-input:focus {
  outline: none;
  box-shadow: 0 0 0 3px hsla(340, 100%, 33%, 0.353);
}

.start-btn {
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  /* background: #171754; */
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.start-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
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

@media (min-width: 875px) {
  .content-container {
    padding: 3rem;
  }
}

@media (min-width: 1010px) {
  .back-btn {
    top: 60px;
    left: 150px;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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

.button-82-edge.join {
  background: linear-gradient(
    to left,
    hsl(120deg 100% 16%) 0%,
    hsl(120deg 100% 32%) 8%,
    hsl(120deg 100% 32%) 92%,
    hsl(120deg 100% 16%) 100%
  );
}

.button-82-edge.create {
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

.button-82-front.create {
  background: hsl(340, 100%, 21%);
}

.button-82-front.join {
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
</style>
