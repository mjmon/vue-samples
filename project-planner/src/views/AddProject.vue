<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="form.title" required />
    <label>Details:</label>
    <textarea v-model="form.details"></textarea>
    <button>Add Project</button>
  </form>
</template>

<script lang="ts">
import { Project } from "@/entity/Project";
import router from "@/router";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const form = ref({
      title: "",
      details: "",
    });

    console.log(`title: ${form.value.title}, details: ${form.value.details}`);

    const handleSubmit = () => {
      let project = {
        title: form.value.title,
        details: form.value.details,
        complete: false,
      };
      console.dir(`project: ${JSON.stringify(project)}`);

      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      })
        .then(() => {
          router.push("/");
        })
        .catch((err) => console.log(err));
    };

    return { form, handleSubmit };
  },
});
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 20px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}

form button {
  display: block;
  margin: 20px auto;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
