"use client";

import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function JoinUs() {
  const formik = useFormik({
    initialValues: {
      gender: "",
      birthDate: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      university: "",
      college: "",
      graduationDate: "",
      address: "",
      hasMarketingExperience: "",
      marketingExperience: "",
      trainingGoals: "",
      productIdea: "",
      image: null,
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value );
        });

       const {data}= await axios.post(
          "https://form-generating.vercel.app/api/spider-agency/apply",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
if(data.success){
    window.location.replace("/")
}

        toast.success("Form submitted successfully!");
        resetForm();
      } catch (err) {
       
        toast.error(err.response.data.message);
      }
    },
  });

  return (
    <div className="min-h-screen bg-black py-12 px-4">
        <Toaster/>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#125e51] px-8 py-6">
            <h2 className="text-3xl font-bold text-white text-center">Join Our Team</h2>
            <p className="text-blue-100 text-center mt-2">We're excited to learn more about you!</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <label htmlFor="gender" className="block text-sm font-semibold text-gray-700">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="ذكر">Male</option>
                  <option value="أنثى">Female</option>
                </select>
              </div>

              {/* Birth Date */}
              <div className="space-y-2">
                <label htmlFor="birthDate" className="block text-sm font-semibold text-gray-700">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.birthDate}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700">
                  Phone Number (Whats App)<span className="text-red-500">*</span>
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* University */}
              <div className="space-y-2">
                <label htmlFor="university" className="block text-sm font-semibold text-gray-700">
                  University <span className="text-red-500">*</span>
                </label>
                <input
                  id="university"
                  name="university"
                  type="text"
                  placeholder="Enter your university name"
                  onChange={formik.handleChange}
                  value={formik.values.university}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* College */}
              <div className="space-y-2">
                <label htmlFor="college" className="block text-sm font-semibold text-gray-700">
                  College/Faculty <span className="text-red-500">*</span>
                </label>
                <input
                  id="college"
                  name="college"
                  type="text"
                  placeholder="Enter your college/faculty"
                  onChange={formik.handleChange}
                  value={formik.values.college}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Graduation Date */}
              <div className="space-y-2">
                <label htmlFor="graduationDate" className="block text-sm font-semibold text-gray-700">
                  Graduation Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="graduationDate"
                  name="graduationDate"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.graduationDate}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Address */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Enter your full address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Has Marketing Experience */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="hasMarketingExperience" className="block text-sm font-semibold text-gray-700">
                  Do you have marketing experience? <span className="text-red-500">*</span>
                </label>
                <select
                  id="hasMarketingExperience"
                  name="hasMarketingExperience"
                  onChange={formik.handleChange}
                  value={formik.values.hasMarketingExperience}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="نعم">Yes</option>
                  <option value="لا">No</option>
                </select>
              </div>

              {/* Marketing Experience */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="marketingExperience" className="block text-sm font-semibold text-gray-700">
                  Marketing Experience Details
                </label>
                <textarea
                  id="marketingExperience"
                  name="marketingExperience"
                  placeholder="Describe your marketing experience, projects, or skills (optional)"
                  onChange={formik.handleChange}
                  value={formik.values.marketingExperience}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  rows={3}
                />
              </div>

              {/* Training Goals */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="trainingGoals" className="block text-sm font-semibold text-gray-700">
                  Training Goals
                </label>
                <textarea
                  id="trainingGoals"
                  name="trainingGoals"
                  placeholder="What do you hope to achieve through this training program?"
                  onChange={formik.handleChange}
                  value={formik.values.trainingGoals}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  rows={3}
                />
              </div>

              {/* Product Idea */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="productIdea" className="block text-sm font-semibold text-gray-700">
                  Product Idea
                </label>
                <textarea
                  id="productIdea"
                  name="productIdea"
                  placeholder="Share any product or service ideas you have in mind"
                  onChange={formik.handleChange}
                  value={formik.values.productIdea}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  rows={3}
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="image" className="block text-sm font-semibold text-gray-700">
                  Profile Photo <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.currentTarget.files) {
                        formik.setFieldValue("image", e.currentTarget.files[0]);
                      }
                    }}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Upload a clear photo of yourself (JPG, PNG, max 5MB)</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="w-full bg-[#125e51] text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Submit Application
              </button>
              <p className="text-center text-sm text-gray-500 mt-3">
                By submitting this form, you agree to our terms and conditions
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
