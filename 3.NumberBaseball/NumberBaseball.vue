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
      answer: getNumbers(), // 정답이 들어있는 배열 ex) [1, 5, 4, 9]
      tries: [], // 시도횟수
      value: "", // 입력값(시도한 숫자)
      result: "", // 결과
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
        this.answer = getNumbers();
        this.tries = [];
        this.$refs.answer.focus();
      } else {
        // 틀렸을때
        if (this.tries.length >= 9) {
          // 10번째 시도
          this.result = `시도횟수가 10번 입니다. 실패! 답은 ${this.answer.join(",")} 이었습니다.`;
          alert("게임을 다시 시작합니다.");
          this.value = "";
          this.answer = getNumbers();
          this.tries = [];
          this.$refs.answer.focus();
        }
        let strike = 0;
        let ball = 0;
        const answerArray = this.value.split("").map((v) => parseInt(v));
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === this.answer[i]) {
            // 숫자 자릿수 모두 정답
            strike++;
          } else if (this.answer.includes(answerArray[i])) {
            // 숫자만 정답
            ball++;
          }
        }
        this.tries.push({
          try: this.value,
          result: `${strike} 스트라이크, ${ball} 볼입니다.`,
        });
        this.value = "";
        this.$refs.answer.focus();
      }
    },
  },
};
</script>

<style></style>
