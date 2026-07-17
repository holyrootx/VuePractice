<template>
  <div>
    <h2>자식 컴포넌트입니다.</h2>
    <p>{{ message }}</p>
  </div>
</template>


<script>
export default {
    data() {
        return ({
            message : "해당 컴포넌트에서 사용하는 message 변수를 담았습니다. ",
        });
    }
}
</script>