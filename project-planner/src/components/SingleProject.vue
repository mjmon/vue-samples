<template>
  <div class="project">
    <div class="actions">
      <h3 @click="toggleDetails">
        {{ project.title }}
      </h3>

      <div class="icons">
        <span class="material-icons"> edit </span>
        <span @click="handleDeleteProject" class="material-icons">
          delete
        </span>
        <span class="material-icons"> done </span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Project } from "@/entity/Project";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const url = "http://localhost:3000/projects/" + props.project.id;

    const showDetails = ref(false);
    const toggleDetails = () => {
      showDetails.value = !showDetails.value;
    };

    const handleEditProject = () => {
      //
    };
    const handleDeleteProject = () => {
      fetch(url, {
        method: "DELETE",
      })
        .then(() => {
          emit("delete", props.project.id);
        })
        .catch((err) => console.log(err));
    };
    const handleDone = () => {
      //
    };

    return {
      showDetails,
      toggleDetails,
      handleEditProject,
      handleDeleteProject,
      handleDone,
    };
  },
});
</script>
<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
</style>
