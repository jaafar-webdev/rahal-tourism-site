import React from "react";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/Button";
import { FaLock, FaSignInAlt } from "react-icons/fa";

// Server action placeholder
async function authenticate(formData: FormData) {
  "use server";
  console.log("Authenticating...");
  console.log("Username:", formData.get("username"));
  console.log("Password:", formData.get("password"));
}

export default function AdminLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
          {/* Header Section */}
          <div className="bg-linear-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 px-8 py-6 text-center">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <FaLock className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Admin Login</h1>
            </div>
            <p className="text-blue-100 text-sm">
              Access the administration panel
            </p>
          </div>

          {/* Form Section */}
          <div className="px-8 py-8">
            <form action={authenticate} className="space-y-6">
              {/* Username Field */}
              <div className="space-y-2">
                <InputField
                  label="Username"
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <InputField
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button variant="outline" type="submit" fullWidth className="">
                  <span className="flex items-center justify-center space-x-2">
                    <FaSignInAlt className="w-5 h-5" />
                    <span>Sign In</span>
                  </span>
                </Button>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Forgot your credentials?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  Contact administrator
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
