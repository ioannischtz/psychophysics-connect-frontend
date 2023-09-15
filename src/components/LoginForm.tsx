import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useLanguage } from "../contexts/language-provider";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/Form";
import { Input } from "./ui/Input";

import loginPageText from "../constants/login-page-text.json";
import signupPageText from "../constants/signup-page-text.json";
import { Button } from "./ui/Button";
import Muted from "./typography/Muted";
import { Link } from "react-router-dom";

const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Too short! Must be at least 6 characters long." }),
});

function LoginForm() {
  const { language } = useLanguage();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {language === "EN"
                    ? signupPageText.form.email.label.en
                    : signupPageText.form.email.label.gr}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={language === "EN"
                      ? signupPageText.form.email.placeholder.en
                      : signupPageText.form.email.placeholder.gr}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {language === "EN"
                    ? signupPageText.form.password.label.en
                    : signupPageText.form.password.label.gr}
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" variant="success" size="xl" className="w-full">
            {language === "EN"
              ? loginPageText.form["sumbit-text"].en
              : loginPageText.form["sumbit-text"].gr}
          </Button>
        </form>
      </Form>
      <div className="flex w-fit space-x-4 items-center">
        <Muted>
          {language === "EN"
            ? loginPageText.form["prompt"].en
            : loginPageText.form["prompt"].gr}
        </Muted>
        <Button variant="link" size="sm">
          <Link to="/auth/signup" className="text-sm font-bold text-success">
            {language === "EN"
              ? loginPageText.form["prompt-action"].en
              : loginPageText.form["prompt-action"].gr}
          </Link>
        </Button>
      </div>
    </>
  );
}

export default LoginForm;
