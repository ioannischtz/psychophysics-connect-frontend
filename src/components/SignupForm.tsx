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
import { Separator } from "./ui/Separator";
import { Button } from "./ui/Button";

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
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
  });

  function onSubmit(values: z.infer<typeof signupFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display username.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold pr-1">Select Role:</FormLabel>
              <FormControl>
                <ButtonGroup
                  defaultValue={field.value}
                  type="single"
                  onValueChange={field.onChange}
                >
                  <FormItem>
                    <FormControl>
                      <ButtonGroupItem value="subject">Subject</ButtonGroupItem>
                    </FormControl>
                  </FormItem>
                  <Separator orientation="vertical" />
                  <FormItem>
                    <FormControl>
                      <ButtonGroupItem value="experimenter">
                        Experimenter
                      </ButtonGroupItem>
                    </FormControl>
                  </FormItem>
                </ButtonGroup>
              </FormControl>
              <FormDescription>
                Help researchers by participating in their experiments as a
                subject.
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit" variant="success" size="xl" className="w-full">
          SUBMIT
        </Button>
      </form>
    </Form>
  );
}

export default SignupForm;
