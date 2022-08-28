import { Project } from "@/entity/Project";
import { ref } from "vue";

const handleDeleteProject = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:3000/projects/${id}`, {
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
  }
};

export default handleDeleteProject;
