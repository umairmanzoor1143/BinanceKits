import { cn } from "lib/utils"
import { Form as Rform } from "components/ui/form"
import { ComponentProps } from "react"
import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form"

interface FormProps<T extends FieldValues = any>
  extends Omit<ComponentProps<"form">, "onSubmit"> {
  form: UseFormReturn<T>
  onSubmit: SubmitHandler<T>
  className?: string
  fieldSetclassName?: string
}

const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  ref,
  fieldSetclassName,
  className,
  ...props
}: FormProps<T>) => {
  return (
    <Rform {...form}>
      {/* the `form` passed here is return value of useForm() hook */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
        className={cn("bg-transparent", className)}
        ref={ref as any}
      >
        <fieldset
          //   We disable form inputs when we are submitting the form!! A tiny detail
          //        that is missed a lot of times
          className={cn(
            "border-none outline-none bg-transparent",
            fieldSetclassName
          )}
          disabled={form.formState.isSubmitting}
        >
          {children}
        </fieldset>
      </form>
    </Rform>
  )
}
export default Form
