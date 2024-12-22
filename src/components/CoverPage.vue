<template>
  <div class="container-fluid d-flex justify-content-center align-items-center">
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="sparkle"></div>
    <div class="sparkle"></div>
    <div class="sparkle"></div>
    <div class="content-container text-center">
      <h1 class="title">tta Quiz</h1>
      <p class="subtitle">
        <span><img src="../assets/icons/star-icon.png" width="30" /></span>
        Test Your Knowledge Effortlessly
        <span><img src="../assets/icons/star-icon.png" width="30" /></span>
      </p>
      <div class="btn-container d-flex justify-content-center">
        <router-link to="/login/" style="text-decoration: none">
          <button class="button-82-pushable" role="button">
            <span class="button-82-shadow"></span>
            <span class="button-82-edge create"></span>
            <span class="button-82-front create text">
              <img
                width="30 "
                height="30"
                src="https://img.icons8.com/emoji/48/pencil-emoji.png"
                alt="pencil-emoji"
              />
              <span> Create Quiz </span>
            </span>
          </button>
        </router-link>

        <router-link to="/joinQuiz/" style="text-decoration: none">
          <button class="button-82-pushable" role="button">
            <span class="button-82-shadow"></span>
            <span class="button-82-edge join"></span>
            <span class="button-82-front join text">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency/48/add-user-group-woman-woman.png"
                alt="add-user-group-woman-woman"
              />
              <span>Join Quiz</span>
            </span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoverPageVue",
};
</script>

<style scoped>
.container-fluid {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background-image: url("../assets/bg-1.jpg");
  color: white;
}

.container-fluid::before {
  content: "";
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg at 50% 50%,
    #ff9aa2 0deg,
    #ffb7b2 72deg,
    #ffdac1 144deg,
    #e2f0cb 216deg,
    #b5ead7 288deg,
    #c7ceea 360deg
  );
  opacity: 0.127;
  animation: rotateSunburst 40s linear infinite;
  z-index: 0;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  animation: float 8s ease-in-out infinite;
  z-index: 1;
}

.bubble:nth-child(1) {
  top: 20%;
  left: 10%;
  width: 120px;
  height: 120px;
  animation-delay: 0s;
}
.bubble:nth-child(2) {
  top: 60%;
  left: 20%;
  width: 100px;
  height: 100px;
  animation-delay: 1s;
}
.bubble:nth-child(3) {
  top: 40%;
  left: 80%;
  width: 150px;
  height: 150px;
  animation-delay: 2s;
}
.bubble:nth-child(4) {
  top: 80%;
  left: 60%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.sparkle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 10px 2px white; /* Added glow effect */
  animation: sparkle 1.5s ease-in-out infinite;
  z-index: 1;
}

.sparkle:nth-child(5) {
  top: 30%;
  left: 40%;
  animation-delay: 0.5s;
}
.sparkle:nth-child(6) {
  top: 70%;
  left: 70%;
  animation-delay: 1s;
}
.sparkle:nth-child(7) {
  top: 20%;
  left: 80%;
  animation-delay: 1.5s;
}

.content-container {
  position: relative;
  z-index: 2;
}

@keyframes rotateSunburst {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.1);
  }
}

.content-container {
  padding: 2rem;
  background: #fff;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 #1f26875e;
  border: 1px solid rgba(255, 255, 255, 0.18);
  animation: fadeIn 1s ease-out;
}

.title {
  font-size: 4rem;
  color: #171754;
  margin-bottom: 1rem;
  font-weight: 900;
  animation: float 3s ease-in-out infinite;
}

.subtitle {
  font-size: 1.5rem;
  color: #171754;
  margin-bottom: 3rem;
  font-weight: 700;
  animation: fadeIn 1s ease-out 0.5s both;
}

.btn-container {
  gap: 2rem;
  animation: fadeIn 1s ease-out 1s both;
}

.join-btn {
  background: #0a69ed;
  color: white;
}

.button-82-pushable span {
  font-weight: 700;
}

.button-82-pushable img {
  margin-right: 5px;
}

.button-82-pushable:hover img {
  animation: spin 1s ease-in-out;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.btn:active {
  transform: translateY(-1px);
}

.btn:hover::after {
  width: 200px;
  height: 200px;
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

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
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

@media (max-width: 768px) {
  .container {
    width: 90%;
    padding: 1.5rem;
  }

  .title {
    font-size: 3rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .btn-container {
    flex-direction: column;
    gap: 1rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
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

.button-82-edge.create {
  background: linear-gradient(
    to left,
    hsl(240deg 57% 16%) 0%,
    hsl(240deg 57% 32%) 8%,
    hsl(240deg 57% 32%) 92%,
    hsl(240deg 57% 16%) 100%
  );
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
  background: hsl(240, 57%, 21%);
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
