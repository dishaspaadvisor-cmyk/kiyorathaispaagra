"use client";

import { FormEvent, useState } from "react";
import {
  FaCalendarCheck,
  FaCircleCheck,
  FaTriangleExclamation,
} from "react-icons/fa6";
import { trackGoogleAdsConversion } from "@/src/lib/googleAds";

type FormErrors = {
  name?: string;
  phone?: string;
  address?: string;
  notes?: string;
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  /*
   * Blocks:
   * https://example.com
   * http://example.com
   * www.example.com
   * example.com
   * example.in
   * example.net etc.
   */
  const containsUrl = (value: string) => {
    const urlPattern =
      /(https?:\/\/|www\.|[a-zA-Z0-9-]+\.(com|in|org|net|co|io|me|info|biz|xyz|online|site|store|app|link|live|shop|tech))(\S*)?/i;

    return urlPattern.test(value);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    const cleanName = name.trim();
    const cleanAddress = address.trim();
    const cleanNotes = notes.trim();

    // Name
    if (!cleanName) {
      newErrors.name = "Full name is required.";
    } else if (containsUrl(cleanName)) {
      newErrors.name = "Website links are not allowed.";
    }

    // Phone
    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    // Address
    if (!cleanAddress) {
      newErrors.address = "Address is required.";
    } else if (containsUrl(cleanAddress)) {
      newErrors.address = "Website links are not allowed.";
    }

    // Notes
    if (cleanNotes && containsUrl(cleanNotes)) {
      newErrors.notes = "Website links are not allowed.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://apibackend.mastercall.in/api/v1/web-leads/submit/",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            form_key: "frm_kiyora_thai_spa_agra_392893",
            name: name.trim(),
            phone,
            address: address.trim(),
            notes: notes.trim(),
            submitted_from_url: window.location.href,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      trackGoogleAdsConversion();

      setStatus("success");

      // Clear form
      setName("");
      setPhone("");
      setAddress("");
      setNotes("");
      setErrors({});
    } catch (error) {
      console.error("Lead submission error:", error);

      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-[30px] border border-yellow-100 bg-white p-6 shadow-[0_18px_55px_rgba(0,0,0,0.07)] sm:p-8 lg:p-10">
      {/* Heading */}
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
          Appointment Request
        </span>

        <h2 className="mt-3 text-3xl font-bold text-gray-900">
          Book Appointment
        </h2>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          Enter your details below and our team will contact you for your spa
          booking.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onPaste={(e) => e.preventDefault()}
            onChange={(e) => {
              const value = e.target.value;

              setName(value);

              if (errors.name) {
                setErrors((prev) => ({
                  ...prev,
                  name: undefined,
                }));
              }
            }}
            placeholder="Enter your name"
            autoComplete="name"
            className={`w-full rounded-2xl border bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
              errors.name
                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                : "border-gray-200 focus:border-yellow-400 focus:ring-yellow-100"
            }`}
          />

          {errors.name && (
            <p className="mt-2 text-xs font-medium text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={phone}
            maxLength={10}
            inputMode="numeric"
            pattern="[0-9]{10}"
            autoComplete="tel"
            onPaste={(e) => {
              e.preventDefault();
            }}
            onChange={(e) => {
              // Remove everything except numbers
              const value = e.target.value.replace(/\D/g, "").slice(0, 10);

              setPhone(value);

              if (errors.phone) {
                setErrors((prev) => ({
                  ...prev,
                  phone: undefined,
                }));
              }
            }}
            placeholder="Enter 10-digit phone number"
            className={`w-full rounded-2xl border bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
              errors.phone
                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                : "border-gray-200 focus:border-yellow-400 focus:ring-yellow-100"
            }`}
          />

          <div className="mt-2 flex items-center justify-between">
            {errors.phone ? (
              <p className="text-xs font-medium text-red-600">
                {errors.phone}
              </p>
            ) : (
              <span />
            )}

            <span
              className={`text-xs ${
                phone.length === 10
                  ? "font-semibold text-green-600"
                  : "text-gray-400"
              }`}
            >
              {phone.length}/10
            </span>
          </div>
        </div>

        {/* Address */}
        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <label
              htmlFor="address"
              className="text-sm font-semibold text-gray-700"
            >
              Address <span className="text-red-500">*</span>
            </label>

            <span className="text-xs text-gray-400">
              {address.length}/20
            </span>
          </div>

          <input
            id="address"
            name="address"
            type="text"
            required
            maxLength={20}
            value={address}
            onPaste={(e) => e.preventDefault()}
            onChange={(e) => {
              setAddress(e.target.value);

              if (errors.address) {
                setErrors((prev) => ({
                  ...prev,
                  address: undefined,
                }));
              }
            }}
            placeholder="Enter your area"
            autoComplete="street-address"
            className={`w-full rounded-2xl border bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
              errors.address
                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                : "border-gray-200 focus:border-yellow-400 focus:ring-yellow-100"
            }`}
          />

          {errors.address && (
            <p className="mt-2 text-xs font-medium text-red-600">
              {errors.address}
            </p>
          )}
        </div>

        {/* Notes */}
        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <label
              htmlFor="notes"
              className="text-sm font-semibold text-gray-700"
            >
              Notes
              <span className="ml-1 font-normal text-gray-400">
                (Optional)
              </span>
            </label>

            <span className="text-xs text-gray-400">
              {notes.length}/20
            </span>
          </div>

          <textarea
            id="notes"
            name="notes"
            rows={3}
            maxLength={20}
            value={notes}
            onPaste={(e) => e.preventDefault()}
            onChange={(e) => {
              setNotes(e.target.value);

              if (errors.notes) {
                setErrors((prev) => ({
                  ...prev,
                  notes: undefined,
                }));
              }
            }}
            placeholder="Massage preference"
            className={`w-full resize-none rounded-2xl border bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
              errors.notes
                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                : "border-gray-200 focus:border-yellow-400 focus:ring-yellow-100"
            }`}
          />

          {errors.notes && (
            <p className="mt-2 text-xs font-medium text-red-600">
              {errors.notes}
            </p>
          )}
        </div>

        {/* Success */}
        {status === "success" && (
          <div className="flex items-start gap-3 rounded-2xl border border-green-100 bg-green-50 p-4 text-sm font-medium text-green-700">
            <FaCircleCheck className="mt-0.5 shrink-0" />

            <p>
              Your booking request has been submitted successfully. Our team
              will contact you shortly.
            </p>
          </div>
        )}

        {/* Error */}
        {status === "error" && (
          <div className="flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm font-medium text-red-700">
            <FaTriangleExclamation className="mt-0.5 shrink-0" />

            <p>
              We could not submit your request. Please try again or contact us
              directly.
            </p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-yellow-500 px-6 py-4 text-sm font-bold text-gray-950 transition-all duration-300 hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <FaCalendarCheck size={16} />

          {loading ? "Submitting..." : "Send Booking Inquiry"}
        </button>
      </form>
    </div>
  );
}