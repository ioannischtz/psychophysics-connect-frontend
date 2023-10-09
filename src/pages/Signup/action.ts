import { ActionFunctionArgs, redirect } from "react-router-dom";

export const action = async ({ request }: ActionFunctionArgs) => {
  console.log("signup action called!");
  const formData = await request.formData();
  const role = formData.get("role");
  console.log("formData = ", formData);
  console.log("role = ", role);

  const response = await fetch("http://127.0.0.1:8000/api/users/signup", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    if (role === "subject") {
      return redirect("/subject-homepage");
    }
    if (role === "experimenter") {
      return redirect("/experimenter-dashboard");
    }
  }
  return null;
};
