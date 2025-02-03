import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router"
import { signUp } from "@/utils/auth"
import { CognitoUserPool } from 'amazon-cognito-identity-js'
import { cognitoConfig } from '@/config/cognito'


export function SignUpForm({ className, ...props }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
    general: ""
  });

  const navigate = useNavigate()

  const handleLoginPage = () => {
    navigate("/login")
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear errors when user starts typing
    if (name === "password" || name === "confirmPassword") {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validatePasswords = () => {
    let isValid = true
    const newErrors = { password: "", confirmPassword: "" }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long"
      isValid = false
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePasswords()) {
      signUp(
        formData.name,
        formData.email,
        formData.password,
        (err, result) => {
          if (err) {
            console.error(err);
            setErrors({ ...errors, general: err.message });
            return;
          }
          navigate('/verify', { state: { email: formData.email } });
        }
      );
    }
  };


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>Create a new account to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
              {errors.general && (
                <p className="text-red-500 text-sm mb-4" role="alert">
                  {errors.general}
                </p>
              )}
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="text-sm text-red-500" role="alert">
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500" role="alert">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Button variant="ghost" onClick={handleLoginPage}>
                Log In
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

