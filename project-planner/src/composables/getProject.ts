import { Project } from "@/entity/Project";
import { ref } from "vue";

const getProject = (id: number) => {
  const title = ref("");
  const details = ref("");

  const load = async () => {
    try {
      const response = await fetch(`http://localhost:3000/projects/${id}`);

      if (response.ok) {
        const json = await response.json();
        const project = <Project>JSON.parse(JSON.stringify(json));
        title.value = project.title;
        details.value = project.details;
      } else {
        throw Error("No data avaiable");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return {
    title,
    details,
    load,
  };
};

export default getProject;
