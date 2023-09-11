import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "./ui/Form";
import { Input } from "./ui/Input";
import { ButtonGroup, ButtonGroupItem } from "./ButtonGroup";
import { Button } from "./ui/Button";
import { useLanguage } from "./language-provider";
import signupPageText from "../constants/signup-page-text.json";
import Muted from "./typography/Muted";

const signupFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Too short! Must be at least 6 characters long." }),
  role: z.enum(["subject", "experimenter"]),
});

function SignupForm() {
  const { language } = useLanguage();

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      role: "subject",
    },
  });

  function onSubmit(values: z.infer<typeof signupFormSchema>) {
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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {language === "EN"
                    ? signupPageText.form.username.label.en
                    : signupPageText.form.username.label.gr}
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  {language === "EN"
                    ? signupPageText.form.username.description.en
                    : signupPageText.form.username.description.gr}
                </FormDescription>
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold pr-1">
                  {language === "EN"
                    ? signupPageText.form.role.label.en
                    : signupPageText.form.role.label.gr}
                </FormLabel>
                <FormControl>
                  <ButtonGroup
                    defaultValue={field.value}
                    type="single"
                    onValueChange={field.onChange}
                  >
                    <FormItem>
                      <FormControl>
                        <ButtonGroupItem value="subject">
                          {language === "EN"
                            ? signupPageText.form.role.subject.en
                            : signupPageText.form.role.subject.gr}
                        </ButtonGroupItem>
                      </FormControl>
                    </FormItem>
                    <FormItem>
                      <FormControl>
                        <ButtonGroupItem value="experimenter">
                          {language === "EN"
                            ? signupPageText.form.role.experimenter.en
                            : signupPageText.form.role.experimenter.gr}
                        </ButtonGroupItem>
                      </FormControl>
                    </FormItem>
                  </ButtonGroup>
                </FormControl>
                <FormDescription>
                  {language === "EN"
                    ? signupPageText.form.role.description.en
                    : signupPageText.form.role.description.gr}
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit" variant="success" size="xl" className="w-full">
            {language === "EN"
              ? signupPageText.form.submit.en
              : signupPageText.form.submit.gr}
          </Button>
        </form>
      </Form>
      <div className="flex w-fit space-x-4 items-center">
        <Muted>
          {language === "EN"
            ? signupPageText.form["prompt"].en
            : signupPageText.form["prompt"].gr}
        </Muted>
        <Button variant="link" size="sm">
          <a className="text-sm font-bold text-success">
            {language === "EN"
              ? signupPageText.form["prompt-action"].en
              : signupPageText.form["prompt-action"].gr}
          </a>
        </Button>
      </div>
    </>
  );
}

export default SignupForm;
