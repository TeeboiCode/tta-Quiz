<template>
  <div class="container-fluid">
    <div class="overlay position-absolute w-100"></div>
    <router-link to="/" class="back-btn">
      <i class="fa-solid fa-arrow-left"></i>
      Back
    </router-link>
    <div class="content-container text-center">
      <div class="container">
        <h1 class="title">Enter Pin</h1>
        <input
          type="text"
          class="pin-input"
          placeholder="Game Pin"
          maxlength="10"
        />
        <router-link to="#" style="text-decoration: none">
          <button class="start-btn btn">
            <i class="fas fa-play"></i>
            Start Quiz
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
  padding: 3rem;
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
  color: #171754;
  font-weight: 700;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.pin-input {
  width: 100%;
  max-width: 300px;
  padding: 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  margin-bottom: 2rem;
  background: #dce5ff;
  transition: all 0.3s ease;
}

.pin-input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(10, 105, 237, 0.5);
}

.start-btn {
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background: #171754;
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

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
