<template>
  <form>
    <label>Title:</label>
    <input type="text" v-model="title" required />
    <label>Details:</label>
    <textarea v-model="details"></textarea>
    <button>Edit Project</button>
  </form>
</template>

<script lang="ts">
import getProject from "@/composables/getProject";
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { title, details, load } = getProject(props.id);

    load();

    return {
      title,
      details,
    };
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
