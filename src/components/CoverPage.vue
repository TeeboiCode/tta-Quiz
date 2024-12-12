<template>
  <div class="container-fluid d-flex justify-content-center align-items-center">
    <div class="overlay position-absolute w-100"></div>
    <div class="content-container text-center">
      <h1 class="title">tta Quiz</h1>
      <p class="subtitle">Test Your Knowledge Effortlessly</p>
      <div class="btn-container d-flex justify-content-center">
        <router-link to="#" style="text-decoration: none">
          <button class="btn create-btn">
            <i class="fa-solid fa-pencil"></i>
            Create Quiz
          </button>
        </router-link>

        <router-link to="/joinQuiz/" style="text-decoration: none">
          <button class="btn join-btn">
            <i class="fas fa-sign-in-alt"></i>
            Join Quiz
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
  min-height: 100vh;
  background: #f0f4ff5b;
}

.container-fluid .overlay {
  height: 170vh;
  transform: translateY(-100px);
  background: url(https://web.tta.ng/assets/autotype_bg-RxJuyHws.svg);
  background-color: #f1f4fc;
  background-size: 100%;
  background-repeat: repeat-y;
  z-index: -3;
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
  font-weight: 700;
  animation: float 3s ease-in-out infinite;
}

.subtitle {
  font-size: 1.5rem;
  color: #171754;
  margin-bottom: 3rem;
  font-weight: 300;
  animation: fadeIn 1s ease-out 0.5s both;
}

.btn-container {
  gap: 2rem;
  animation: fadeIn 1s ease-out 1s both;
}

.btn {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
}

.create-btn {
  background: #171754;
  color: white;
}

.join-btn {
  background: #0a69ed;
  color: white;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: pulse 1s infinite;
}

.btn:hover i {
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
</style>
