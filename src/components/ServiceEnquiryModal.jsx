import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "../data/servicesData";
import {
    CAR_MANUFACTURERS,
    HEAR_ABOUT_OPTIONS,
    INDIAN_STATES_AND_UTS,
} from "../data/enquiryOptions";

const WEBHOOK_URL = "https://at.ddmn.in/webhook/vahan-contact-form-alerts";
// If your webhook supports routing to a specific email, set it here and it will be included in payload.
const ENQUIRY_TO_EMAIL = "info@vahandetailing.com";

const years = (() => {
    const now = new Date().getFullYear();
    const start = 1990;
    const list = [];
    for (let y = now; y >= start; y -= 1) list.push(String(y));
    return list;
})();

const initialForm = {
    fullName: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    pincode: "",
    manufacturer: "",
    manufacturerOther: "",
    modelName: "",
    unregistered: false,
    registrationNumber: "",
    year: "",
    requiredService: "",
    hearAbout: "",
    hearAboutOther: "",
    comments: "",
};

const inputBase =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[15px] outline-none transition-shadow focus:ring-2 focus:ring-yellow-400";

const disabledInput =
    "w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-3 text-[15px] text-gray-500 outline-none";

function SelectField({ className = "", children, ...props }) {
    return (
        <div className={`relative ${className}`}>
            <select
                {...props}
                className={`${inputBase} pr-10 appearance-none`}
            >
                {children}
            </select>
            <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    );
}

export default function ServiceEnquiryModal({ open, onClose }) {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState({ state: "idle", message: "" }); // idle | submitting | success | error

    const serviceOptions = useMemo(() => {
        return Object.entries(servicesData).map(([slug, s]) => ({
            slug,
            title: s?.title ?? slug,
        }));
    }, []);

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") onClose?.();
        };
        window.addEventListener("keydown", onKeyDown);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [open, onClose]);

    const scrollRef = useState(null); // Use state to hold ref to ensure re-render ? No, straight useRef is better for DOM manipulation

    // We need to import useRef
    // I can't change the imports easily with this tool without replacing the top of the file.
    // I will use querySelector or assume useRef is available?
    // Wait, line 1 imports: `import { useEffect, useMemo, useState } from "react";`
    // I need to add useRef.
    // I will use a separate Replace call for imports? Or use `document.getElementById`?
    // Using an ID is safer without changing imports.

    useEffect(() => {
        if (open) {
            // Reset scroll position when modal opens
            const scrollContainer = document.getElementById("enquiry-scroll-container");
            if (scrollContainer) {
                scrollContainer.scrollTop = 0;
            }
            setStatus({ state: "idle", message: "" });
        }
    }, [open]);

    const setField = (name, value) => {
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setField(name, type === "checkbox" ? checked : value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status.state === "submitting") return;

        const payload = {
            toEmail: ENQUIRY_TO_EMAIL,
            createdAt: new Date().toISOString(),
            source: "vahan-website",
            enquiry: {
                fullName: form.fullName.trim(),
                phone: form.phone.trim(),
                email: form.email.trim(),
                state: form.state,
                city: form.city.trim(),
                pincode: form.pincode.trim(),
                manufacturer:
                    form.manufacturer === "Other"
                        ? form.manufacturerOther.trim()
                        : form.manufacturer,
                modelName: form.modelName.trim(),
                unregistered: Boolean(form.unregistered),
                registrationNumber: form.unregistered
                    ? ""
                    : form.registrationNumber.trim(),
                year: form.year,
                requiredService: form.requiredService,
                hearAbout:
                    form.hearAbout === "Other"
                        ? form.hearAboutOther.trim()
                        : form.hearAbout,
                comments: form.comments.trim(),
            },
        };

        setStatus({ state: "submitting", message: "" });
        try {
            const response = await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Request failed: ${response.status}`);
            }

            setStatus({
                state: "success",
                message: "Submitted successfully. We will contact you shortly.",
            });
            setForm(initialForm);
        } catch (err) {
            setStatus({
                state: "error",
                message:
                    err?.message ||
                    "Something went wrong while submitting. Please try again.",
            });
        }
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    aria-modal="true"
                    role="dialog"
                >
                    {/* Overlay */}
                    <button
                        type="button"
                        aria-label="Close enquiry form"
                        onClick={onClose}
                        className="absolute inset-0 bg-black/70 backdrop-blur-[2px] cursor-pointer"
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="relative w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white text-black shadow-2xl"
                    >
                        {/* Header bar */}
                        <div className="shrink-0 relative z-10 flex items-center justify-between bg-yellow-400 px-5 py-3">
                            <h3 className="text-lg sm:text-xl font-extrabold tracking-wide">
                                Service Enquiry Form
                            </h3>
                            <button
                                type="button"
                                onClick={onClose}
                                className="h-10 w-10 grid place-items-center rounded-full hover:bg-black/10 transition-colors"
                                aria-label="Close"
                            >
                                <span className="text-2xl leading-none">×</span>
                            </button>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col flex-1 min-h-0"
                        >
                            {/* Scrollable fields */}
                            <div id="enquiry-scroll-container" className="flex-1 overflow-y-auto p-4 sm:p-5 md:p-6">

                                <div className="grid grid-cols-12 gap-3">

                                    <input
                                        name="fullName"
                                        value={form.fullName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Full Name*"
                                        className={`${inputBase} col-span-12 md:col-span-6`}
                                    />
                                    <input
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="Phone Number*"
                                        className={`${inputBase} col-span-12 md:col-span-6`}
                                    />

                                    <input
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        type="email"
                                        placeholder="Email*"
                                        className={`${inputBase} col-span-12`}
                                    />

                                    <SelectField
                                        className="col-span-12 md:col-span-4"
                                        name="state"
                                        value={form.state}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">State / UT*</option>
                                        {INDIAN_STATES_AND_UTS.map((s) => (
                                            <option key={s} value={s}>
                                                {s}
                                            </option>
                                        ))}
                                    </SelectField>

                                    <input
                                        name="city"
                                        value={form.city}
                                        onChange={handleChange}
                                        required
                                        placeholder="City*"
                                        className={`${inputBase} col-span-12 md:col-span-4`}
                                    />
                                    <input
                                        name="pincode"
                                        value={form.pincode}
                                        onChange={handleChange}
                                        required
                                        inputMode="numeric"
                                        placeholder="Pincode*"
                                        className={`${inputBase} col-span-12 md:col-span-4`}
                                    />

                                    <SelectField
                                        className="col-span-12 md:col-span-6"
                                        name="manufacturer"
                                        value={form.manufacturer}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Car Manufacturer*</option>
                                        {CAR_MANUFACTURERS.map((m) => (
                                            <option key={m} value={m}>
                                                {m}
                                            </option>
                                        ))}
                                    </SelectField>

                                    <div className="relative col-span-12 md:col-span-6">
                                        <input
                                            name="modelName"
                                            value={form.modelName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Model Name*"
                                            className={`${inputBase} pr-10`}
                                        />
                                        {/* visual caret like the screenshot */}
                                        <svg
                                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>

                                    {form.manufacturer === "Other" && (
                                        <input
                                            name="manufacturerOther"
                                            value={form.manufacturerOther}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter Manufacturer Name*"
                                            className={`${inputBase} col-span-12`}
                                        />
                                    )}

                                    <label className="col-span-12 flex items-center gap-3 rounded-lg border border-gray-300 px-4 py-3">
                                        <input
                                            type="checkbox"
                                            name="unregistered"
                                            checked={form.unregistered}
                                            onChange={handleChange}
                                            className="h-5 w-5 accent-yellow-400"
                                        />
                                        <span className="text-sm sm:text-base">
                                            My Vehicle is Un-Registered
                                        </span>
                                    </label>

                                    <input
                                        name="registrationNumber"
                                        value={form.registrationNumber}
                                        onChange={handleChange}
                                        disabled={form.unregistered}
                                        required={!form.unregistered}
                                        placeholder="Registration No."
                                        className={`${form.unregistered ? disabledInput : inputBase} col-span-12 md:col-span-6`}
                                    />

                                    <SelectField
                                        className="col-span-12 md:col-span-6"
                                        name="year"
                                        value={form.year}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">
                                            Year of Manufacturing / Registration*
                                        </option>
                                        {years.map((y) => (
                                            <option key={y} value={y}>
                                                {y}
                                            </option>
                                        ))}
                                    </SelectField>

                                    <SelectField
                                        className="col-span-12 md:col-span-6"
                                        name="requiredService"
                                        value={form.requiredService}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Required Service*</option>
                                        {serviceOptions.map((s) => (
                                            <option key={s.slug} value={s.title}>
                                                {s.title}
                                            </option>
                                        ))}
                                        <option value="Other">Other</option>
                                    </SelectField>

                                    <SelectField
                                        className="col-span-12 md:col-span-6"
                                        name="hearAbout"
                                        value={form.hearAbout}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">How Did You Hear About Us*</option>
                                        {HEAR_ABOUT_OPTIONS.map((o) => (
                                            <option key={o} value={o}>
                                                {o}
                                            </option>
                                        ))}
                                    </SelectField>

                                    {form.hearAbout === "Other" && (
                                        <input
                                            name="hearAboutOther"
                                            value={form.hearAboutOther}
                                            onChange={handleChange}
                                            required
                                            placeholder="Please specify*"
                                            className={`${inputBase} col-span-12`}
                                        />
                                    )}

                                    <textarea
                                        name="comments"
                                        value={form.comments}
                                        onChange={handleChange}
                                        placeholder="Comments or Special Requirements"
                                        rows={4}
                                        className={`${inputBase} col-span-12 resize-none`}
                                    />
                                </div>
                            </div>



                            {/* Fixed footer (always visible) */}
                            <div className="shrink-0 px-4 sm:px-5 md:px-6 py-4 border-t border-gray-200 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                <div className="text-sm min-h-[20px]">
                                    {status.state === "error" && (
                                        <p className="text-red-600 font-semibold">
                                            {status.message}
                                        </p>
                                    )}
                                    {status.state === "success" && (
                                        <p className="text-green-700 font-semibold">
                                            {status.message}
                                        </p>
                                    )}
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={status.state === "submitting"}
                                    className="ml-auto w-full sm:w-auto rounded-lg bg-yellow-400 px-10 py-3 font-bold tracking-wide text-black disabled:opacity-60 shadow-[0_10px_30px_rgba(250,204,21,0.25)]"
                                >
                                    {status.state === "submitting"
                                        ? "Submitting..."
                                        : "SUBMIT FORM"}
                                </motion.button>
                            </div>

                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

