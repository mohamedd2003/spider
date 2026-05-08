"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

/* ─────────────────────────────────────────
   Custom Dropdown Component
───────────────────────────────────────── */
function Dropdown({ id, name, value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  const handleSelect = (optValue) => {
    onChange({ target: { name, value: optValue } });
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative w-full">
      {/* Trigger */}
      <button
        type="button"
        id={id}
        onClick={() => setOpen((v) => !v)}
        className={`w-full flex items-center justify-between bg-white/60 dark:bg-white/5 backdrop-blur-sm border rounded-xl px-4 py-3.5 text-left transition-all duration-300 hover:border-[#125e51]/60 focus:outline-none focus:ring-2 focus:ring-[#125e51]/50 ${
          open
            ? "border-[#125e51] ring-2 ring-[#125e51]/30"
            : "border-gray-200 dark:border-white/10"
        }`}
      >
        <span
          className={
            selected
              ? "text-gray-800 dark:text-white font-medium"
              : "text-gray-400 dark:text-gray-500"
          }
        >
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 dark:text-gray-400 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown List */}
      {open && (
        <div className="absolute z-50 mt-2 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl shadow-black/20 dark:shadow-black/60 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Empty / placeholder row */}
          <button
            type="button"
            onClick={() => handleSelect("")}
            className="w-full text-left px-4 py-3 text-sm text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-150 border-b border-gray-100 dark:border-white/5"
          >
            {placeholder}
          </button>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleSelect(opt.value)}
              className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-150 flex items-center justify-between group ${
                value === opt.value
                  ? "bg-[#125e51]/10 dark:bg-[#125e51]/20 text-[#125e51] dark:text-emerald-300"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
              }`}
            >
              {opt.label}
              {value === opt.value && (
                <svg
                  className="w-4 h-4 text-[#125e51] dark:text-emerald-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */
export default function JoinUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

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
          formData.append(key, value);
        });

        const { data } = await axios.post(
          "https://form-generating.vercel.app/api/spider-agency/apply",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        if (data.success) {
          toast.success(t("joinUs.successMessage"));
          resetForm();
          setTimeout(() => {
            setIsLoading(false);
            window.location.replace("/");
          }, 3500);
        } else {
          setIsLoading(false);
          toast.error(t("joinUs.errorMessage"));
        }
      } catch (err) {
        setIsLoading(false);
        toast.error(err.response?.data?.message);
      }
    },
  });

  const totalSteps = 3;
  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const inputClass =
    "w-full bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#125e51]/50 focus:border-[#125e51] transition-all duration-300 hover:border-[#125e51]/40";

  const labelClass =
    "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5";

  const genderOptions = [
    { value: "ذكر", label: t("joinUs.male") },
    { value: "أنثى", label: t("joinUs.female") },
  ];

  const experienceOptions = [
    { value: "نعم", label: t("joinUs.yes") },
    { value: "لا", label: t("joinUs.no") },
  ];

  return (
    <div
      className="min-h-screen pt-24 sm:pt-32 pb-16 px-4 sm:px-6 relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-emerald-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#125e51]/5 dark:bg-[#125e51]/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-100/40 dark:bg-emerald-900/10 rounded-full blur-3xl translate-y-1/2" />

      <Toaster position="top-center" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#125e51]/10 dark:bg-[#125e51]/20 text-[#125e51] dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <span>{t("joinUs.title")}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            {t("joinUs.title")}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-md mx-auto">
            {t("joinUs.subtitle")}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  step >= s
                    ? "bg-[#125e51] text-white shadow-lg shadow-[#125e51]/30"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                }`}
              >
                {step > s ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  s
                )}
              </div>
              {s < 3 && (
                <div className={`w-12 sm:w-20 h-1 rounded-full transition-all duration-300 ${step > s ? "bg-[#125e51]" : "bg-gray-200 dark:bg-gray-700"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-black/20 p-5 sm:p-8 lg:p-10">
          <form onSubmit={formik.handleSubmit}>

            {/* ── Step 1: Personal Info ── */}
            <div className={step === 1 ? "block" : "hidden"}>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#125e51]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#125e51]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                {isRTL ? "المعلومات الشخصية" : "Personal Information"}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    {t("joinUs.fullName")} <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="fullName" name="fullName" type="text"
                    placeholder={t("joinUs.fullNamePlaceholder")}
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                    className={inputClass} required
                  />
                </div>

                {/* Gender — custom dropdown */}
                <div>
                  <label htmlFor="gender" className={labelClass}>
                    {t("joinUs.gender")} <span className="text-red-400">*</span>
                  </label>
                  <Dropdown
                    id="gender"
                    name="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    placeholder={t("joinUs.selectGender")}
                    options={genderOptions}
                  />
                </div>

                {/* Birth Date */}
                <div>
                  <label htmlFor="birthDate" className={labelClass}>
                    {t("joinUs.birthDate")} <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="birthDate" name="birthDate" type="date"
                    onChange={formik.handleChange}
                    value={formik.values.birthDate}
                    className={inputClass} required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phoneNumber" className={labelClass}>
                    {t("joinUs.phone")} <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="phoneNumber" name="phoneNumber" type="tel"
                    placeholder={t("joinUs.phonePlaceholder")}
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    className={inputClass} required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    {t("joinUs.email")} <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email" name="email" type="email"
                    placeholder={t("joinUs.emailPlaceholder")}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className={inputClass} required
                  />
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className={labelClass}>
                    {t("joinUs.address")} <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="address" name="address" type="text"
                    placeholder={t("joinUs.addressPlaceholder")}
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    className={inputClass} required
                  />
                </div>
              </div>
            </div>

            {/* ── Step 2: Education & Experience ── */}
            <div className={step === 2 ? "block" : "hidden"}>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#125e51]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#125e51]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </span>
                {isRTL ? "التعليم والخبرة" : "Education & Experience"}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* University */}
                <div>
                  <label htmlFor="university" className={labelClass}>
                    {t("joinUs.university")} <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="university" name="university" type="text"
                    placeholder={t("joinUs.universityPlaceholder")}
                    onChange={formik.handleChange}
                    value={formik.values.university}
                    className={inputClass} required
                  />
                </div>

                {/* College */}
                <div>
                  <label htmlFor="college" className={labelClass}>
                    {t("joinUs.college")} <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="college" name="college" type="text"
                    placeholder={t("joinUs.collegePlaceholder")}
                    onChange={formik.handleChange}
                    value={formik.values.college}
                    className={inputClass} required
                  />
                </div>

                {/* Graduation Date */}
                <div>
                  <label htmlFor="graduationDate" className={labelClass}>
                    {t("joinUs.graduationDate")} <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="graduationDate" name="graduationDate" type="date"
                    onChange={formik.handleChange}
                    value={formik.values.graduationDate}
                    className={inputClass} required
                  />
                </div>

                {/* Has Marketing Experience — custom dropdown */}
                <div>
                  <label htmlFor="hasMarketingExperience" className={labelClass}>
                    {t("joinUs.hasExperience")} <span className="text-red-400">*</span>
                  </label>
                  <Dropdown
                    id="hasMarketingExperience"
                    name="hasMarketingExperience"
                    value={formik.values.hasMarketingExperience}
                    onChange={formik.handleChange}
                    placeholder={t("joinUs.selectOption")}
                    options={experienceOptions}
                  />
                </div>

                {/* Marketing Experience Details */}
                <div className="sm:col-span-2">
                  <label htmlFor="marketingExperience" className={labelClass}>
                    {t("joinUs.experienceDetails")}
                  </label>
                  <textarea
                    id="marketingExperience" name="marketingExperience"
                    placeholder={t("joinUs.experiencePlaceholder")}
                    onChange={formik.handleChange}
                    value={formik.values.marketingExperience}
                    className={`${inputClass} resize-none`}
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* ── Step 3: Goals & Upload ── */}
            <div className={step === 3 ? "block" : "hidden"}>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#125e51]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#125e51]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </span>
                {isRTL ? "الأهداف والمرفقات" : "Goals & Attachments"}
              </h3>

              <div className="space-y-5">
                {/* Training Goals */}
                <div>
                  <label htmlFor="trainingGoals" className={labelClass}>
                    {t("joinUs.trainingGoals")}
                  </label>
                  <textarea
                    id="trainingGoals" name="trainingGoals"
                    placeholder={t("joinUs.trainingGoalsPlaceholder")}
                    onChange={formik.handleChange}
                    value={formik.values.trainingGoals}
                    className={`${inputClass} resize-none`}
                    rows={3}
                  />
                </div>

                {/* Product Idea */}
                <div>
                  <label htmlFor="productIdea" className={labelClass}>
                    {t("joinUs.productIdea")}
                  </label>
                  <textarea
                    id="productIdea" name="productIdea"
                    placeholder={t("joinUs.productIdeaPlaceholder")}
                    onChange={formik.handleChange}
                    value={formik.values.productIdea}
                    className={`${inputClass} resize-none`}
                    rows={3}
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label htmlFor="image" className={labelClass}>
                    {t("joinUs.profilePhoto")} <span className="text-red-400">*</span>
                  </label>
                  <div className="relative group">
                    <div className="border-2 border-dashed border-gray-300 dark:border-white/20 rounded-xl p-6 text-center hover:border-[#125e51] dark:hover:border-[#125e51] transition-colors duration-300 cursor-pointer">
                      <input
                        id="image" name="image" type="file" accept="image/*"
                        onChange={(e) => {
                          if (e.currentTarget.files)
                            formik.setFieldValue("image", e.currentTarget.files[0]);
                        }}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        required
                      />
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-[#125e51]/10 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#125e51]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        {formik.values.image ? (
                          <p className="text-sm font-medium text-[#125e51]">
                            {formik.values.image.name}
                          </p>
                        ) : (
                          <>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                              {isRTL ? "اسحب الصورة هنا أو اضغط للرفع" : "Drag & drop or click to upload"}
                            </p>
                            <p className="text-xs text-gray-400">{t("joinUs.photoHint")}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Navigation ── */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-200 font-medium"
                >
                  <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  {isRTL ? "السابق" : "Back"}
                </button>
              ) : (
                <div />
              )}

              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#125e51] hover:bg-[#0f4d43] text-white font-medium shadow-lg shadow-[#125e51]/25 hover:shadow-xl hover:shadow-[#125e51]/30 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {isRTL ? "التالي" : "Next"}
                  <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base shadow-lg transition-all duration-200 hover:-translate-y-0.5 ${
                    isLoading
                      ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed text-gray-500"
                      : "bg-[#125e51] hover:bg-[#0f4d43] text-white shadow-[#125e51]/25 hover:shadow-xl hover:shadow-[#125e51]/30"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white" />
                      <span>{t("joinUs.submitting")}</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      {t("joinUs.submit")}
                    </>
                  )}
                </button>
              )}
            </div>

            {step === totalSteps && (
              <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-4">
                {t("joinUs.termsNote")}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
