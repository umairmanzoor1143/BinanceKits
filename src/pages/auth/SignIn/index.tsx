import { Button } from "components/ui/button"
import Input from "components/ui/forms/Input"
import { Label } from "components/ui/label"
import { Link } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "components/ui/card"
import useZodForm from "hooks/useZodForm"
import Form from "components/ui/forms/Form"
import Loader from "components/Loader"
import { z } from "zod" // Ensure you import z from zod

const SignUpPage = () => {
  const form = useZodForm({
    mode: "onChange",
    defaultValues: {
      apiKey: "",
      secretKey: "",
    },
    schema: z.object({
      apiKey: z.string().nonempty("API Key is required"),
      secretKey: z.string().nonempty("Secret Key is required"),
    }),
  })

  const handleFormSubmit = (values: any) => {
    console.log({ values })
  }

  const isSubmitting = form.formState.isSubmitting

  return (
    <div className="flex items-center justify-center h-[100dvh]">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Stream Tracking</CardTitle>
          <CardDescription>
            Enter your BINANCE API Key and Secret Key for tracking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form
            form={form}
            onSubmit={handleFormSubmit}
            fieldSetclassName="flex flex-col gap-6"
          >
            <Input
              name="apiKey"
              type="text"
              placeholder="API Key"
              label="API Key"
            />
            <Input
              name="secretKey"
              type="password"
              placeholder="Secret Key"
              label="Secret Key"
            />
            <Button type="submit" className="w-full">
              {isSubmitting ? (
                <>
                  <Loader
                    loading={true}
                    className="mr-2 h-4 w-4 animate-spin"
                  />
                  Tracking
                </>
              ) : (
                "Track"
              )}
            </Button>
          </Form>
          <Button
            type="submit"
            className="w-full mt-2"
            onClick={() => window.open("https://www.binance.com/en", "_blank")}
          >
            Generate Keys
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignUpPage
