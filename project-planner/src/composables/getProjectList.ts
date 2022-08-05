import { Project } from "@/entity/Project";
import { ref } from "vue";

const getProjectList = () => {
  const projectList = ref<Project[]>([]);
  const error = ref<string | null>(null);

  const load = async () => {
    try {
      const response = await fetch("http://localhost:3000/projects");

      if (response.ok) {
        const json = await response.json();
        const parseProjectList = <Project[]>JSON.parse(JSON.stringify(json));
        projectList.value = parseProjectList;
      } else {
        throw Error("No data avaiable");
      }
    } catch (e) {
      error.value = (e as Error).message;
      console.log(error.value);
    }
  };

  return { projectList, error, load };
};

export default getProjectList;
