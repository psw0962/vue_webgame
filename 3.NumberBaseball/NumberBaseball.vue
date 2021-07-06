<template>
  <div>
    <h1>{{ result }}</h1>

    <!-- e.preventDefault() ¿Í °°À½ -->
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
export default {
  data() {
    return {
      tries: [],
      value: "",
      result: "",
    };
  },
  methods: {
    onSubmitForm() {
      this.tries.push({
        try: this.value,
        result: "homerun",
      });
      this.value = "";
      this.$refs.answer.focus();
    },
  },
};
</script>

<style></style>
