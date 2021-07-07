<template>
  <div>
    <h1>{{ result }}</h1>

    <!-- e.preventDefault() 와 같음 -->
    <form @submit.prevent="onSubmitForm">
      <input ref="answer" minlength="4" maxlength="4" v-model="value" />
      <button tpye="submit">submit</button>
    </form>
    <div>try: {{ tries.length }}</div>
    <ul>
      <li v-for="t in tries" :key="t.try">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];

  for (let i = 0; i < 4; i++) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

export default {
  data() {
    return {
      answer: getNumbers(),
      tries: [],
      value: "",
      result: "",
    };
  },
  methods: {
    onSubmitForm() {
      if (this.value === this.answer.join("")) {
        this.tries.push({
          try: this.value,
          result: "homerun",
        });
        this.result = "homerun";
        alert("게임을 다시 실행 합니다.");
        this.value = "";
        this.tries = [];
        this.$refs.answer.focus();
      } else {
        let strike = 0;
        let ball = 0;
        const answerArray = this.value.split("").map((v) => parseInt(v));
      }

      this.value = "";
      this.$refs.answer.focus();
    },
  },
};
</script>

<style></style>
