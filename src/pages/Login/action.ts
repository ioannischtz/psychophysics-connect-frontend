import { ActionFunctionArgs, redirect } from "react-router-dom";

export const action = async ({ request }: ActionFunctionArgs) => {
  console.log("login action called!");
  const formData = await request.formData();
  console.log("formData = ", formData);

  const response = await fetch("http://localhost:8000/api/users/login", {
    method: "POST",
    body: formData,
    credentials: "same-origin",
  });

  if (response.ok) {
    const user = await response.json();
    if (user.userData.role === "subject") {
      return redirect("/subject-homepage");
    }
    if (user.userData.role === "experimenter") {
      return redirect("/experimenter-dashboard");
    }
  }
  return null;
};
