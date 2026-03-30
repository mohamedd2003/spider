"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function JoinUs() {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  
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
      setIsLoading(true);
      
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
          toast.success(t('joinUs.successMessage'));
          resetForm();
          
          // Wait 5 seconds before redirecting
          setTimeout(() => {
            setIsLoading(false);
            window.location.replace("/");
          }, 3500);
        } else {
          setIsLoading(false);
          toast.error(t('joinUs.errorMessage'));
        }
      } catch (err) {
        setIsLoading(false);
        toast.error(err.response?.data?.message );
      }
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pt-20 sm:pt-28 pb-12 px-3 sm:px-4">
        <Toaster/>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#125e51] px-4 sm:px-8 py-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">{t('joinUs.title')}</h2>
            <p className="text-blue-100 text-center mt-2">{t('joinUs.subtitle')}</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="p-4 sm:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {t('joinUs.fullName')} <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder={t('joinUs.fullNamePlaceholder')}
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                  className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {t('joinUs.gender')} <span className="text-red-500">*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                  className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="">{t('joinUs.selectGender')}</option>
                  <option value="ذكر">{t('joinUs.male')}</option>
                  <option value="أنثى">{t('joinUs.female')}</option>
                </select>
              </div>

              {/* Birth Date */}
              <div className="space-y-2">
                <label htmlFor="birthDate" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {t('joinUs.birthDate')} <span className="text-red-500">*</span>
                </label>
                <input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.birthDate}
                  className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {t('joinUs.phone')}<span className="text-red-500">*</span>
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder={t('joinUs.phonePlaceholder')}
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {t('joinUs.email')} <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t('joinUs.emailPlaceholder')}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* University */}
              <div className="space-y-2">
                <label htmlFor="university" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {t('joinUs.university')} <span className="text-red-500">*</span>
                </label>
                <input
                  id="university"
                  name="university"
                  type="text"
                  placeholder={t('joinUs.universityPlaceholder')}
                  onChange={formik.handleChange}
                  value={formik.values.university}
                  className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* College */}
              <div className="space-y-2">
                <label htmlFor="college" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {t('joinUs.college')} <span className="text-red-500">*</span>
                </label>
                <input
                  id="college"
                  name="college"
                  type="text"
                  placeholder={t('joinUs.collegePlaceholder')}
                  onChange={formik.handleChange}
                  value={formik.values.college}
                  className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Graduation Date */}
              <div className="space-y-2">
                <label htmlFor="graduationDate" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {t('joinUs.graduationDate')} <span className="text-red-500">*</span>
                </label>
                <input
                  id="graduationDate"
                  name="graduationDate"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.graduationDate}
                  className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Address */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {t('joinUs.address')} <span className="text-red-500">*</span>
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder={t('joinUs.addressPlaceholder')}
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Has Marketing Experience */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="hasMarketingExperience" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {t('joinUs.hasExperience')} <span className="text-red-500">*</span>
                </label>
                <select
                  id="hasMarketingExperience"
                  name="hasMarketingExperience"
                  onChange={formik.handleChange}
                  value={formik.values.hasMarketingExperience}
                  className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="">{t('joinUs.selectOption')}</option>
                  <option value="نعم">{t('joinUs.yes')}</option>
                  <option value="لا">{t('joinUs.no')}</option>
                </select>
              </div>

              {/* Marketing Experience */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="marketingExperience" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {t('joinUs.experienceDetails')}
                </label>
                <textarea
                  id="marketingExperience"
                  name="marketingExperience"
                  placeholder={t('joinUs.experiencePlaceholder')}
                  onChange={formik.handleChange}
                  value={formik.values.marketingExperience}
                  className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  rows={3}
                />
              </div>

              {/* Training Goals */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="trainingGoals" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Training Goals
                </label>
                <textarea
                  id="trainingGoals"
                  name="trainingGoals"
                  placeholder={t('joinUs.trainingGoalsPlaceholder')}
                  onChange={formik.handleChange}
                  value={formik.values.trainingGoals}
                  className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  rows={3}
                />
              </div>

              {/* Product Idea */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="productIdea" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Product Idea
                </label>
                <textarea
                  id="productIdea"
                  name="productIdea"
                  placeholder={t('joinUs.productIdeaPlaceholder')}
                  onChange={formik.handleChange}
                  value={formik.values.productIdea}
                  className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  rows={3}
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="image" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {t('joinUs.profilePhoto')} <span className="text-red-500">*</span>
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
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-gray-200"
                    required
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t('joinUs.photoHint')}</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-lg transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#125e51] hover:bg-[#0f4d43] text-white'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>{t('joinUs.submitting')}</span>
                  </div>
                ) : (
                  t('joinUs.submit')
                )}
              </button>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
                {t('joinUs.termsNote')}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
