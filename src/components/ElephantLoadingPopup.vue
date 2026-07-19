<template>
  <transition name="fade">
    <div v-if="visible" class="loading-overlay">
      <div class="loading-popup">
        <div class="speech-bubble">뿌우!</div>

        <img
          src="/images/elephant-loading.png"
          alt="귀여운 코끼리 로딩 이미지"
          class="elephant-image"
        />

        <div class="loading-text">로딩중...</div>

        <div class="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ElephantLoadingPopup',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
}

.loading-popup {
  position: relative;
  width: 320px;
  padding: 24px;
  border-radius: 24px;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.speech-bubble {
  position: absolute;
  top: -12px;
  right: 20px;
  padding: 8px 14px;
  background: #ffd54f;
  color: #333;
  font-weight: bold;
  border-radius: 16px;
  font-size: 18px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
  animation: bubble-pop 1.2s infinite ease-in-out;
}

.elephant-image {
  width: 200px;
  margin: 0 auto;
  display: block;
  animation: elephant-bounce 1s infinite ease-in-out;
}

.loading-text {
  margin-top: 14px;
  font-size: 20px;
  font-weight: 700;
  color: #333;
}

.loading-dots {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.loading-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #42b883;
  animation: dot-bounce 0.8s infinite ease-in-out;
}

.loading-dots span:nth-child(2) {
  animation-delay: 0.15s;
}

.loading-dots span:nth-child(3) {
  animation-delay: 0.3s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes elephant-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes dot-bounce {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-6px);
    opacity: 1;
  }
}

@keyframes bubble-pop {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
}
</style>