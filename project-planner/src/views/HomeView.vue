<template>
  <div class="home">
    <div v-if="projectList.length > 0">
      <div v-for="project in projectList" :key="project.id">
        <!-- <p>{{ project.title }}</p> -->
        <SingleProject :project="project" @delete="handleDelete" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import getProjectList from "@/composables/getProjectList";
import SingleProject from "@/components/SingleProject.vue";

export default defineComponent({
  components: {
    SingleProject,
  },
  setup() {
    const { projectList, error, load } = getProjectList();

    load();

    const handleDelete = (id: number) => {
      projectList.value = projectList.value.filter((p) => {
        return p.id !== id;
      });
    };

    return { projectList, error, handleDelete };
  },
});
</script>
