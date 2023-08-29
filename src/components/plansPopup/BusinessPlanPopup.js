import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BusinessPlanPopup = ({ plan, onClose, onSubmit }) => {
  const initialValues = {
    profileImage: null,
    OrganizationName: "",
    address: "",
    phoneNumber: "",
    email: "",
    webURL: "",
  };

  const validationSchema = Yup.object().shape({
    profileImage: Yup.mixed(),
    OrganizationName: Yup.string().required("First name is required"),
    address: Yup.string().required("address is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    email: Yup.string().email().required("email is required"),
    webURL: Yup.string(),
  });

  return (
    <div className="popup-container fixed inset-0 flex justify-center
      items-center bg-gray-900 bg-opacity-70 z-50 overflow-y-auto"
    >
        <div className="popup p-6 rounded-lg shadow-md bg-white w-5/6 relative">
        <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white hover:text-red-500
            bg-red-600 px-2 py-2 rounded-full"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
        <h2 className="text-2xl font-semibold text-gray-500 mb-4">Business Details</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ touched, errors, setFieldValue }) => (
            <Form className="sm:grid sm:grid-cols-3 sm:gap-4">

              <div className="form-group mb-4">
                <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">
                  Business Logo
                </label>
                <input
                  type="file"
                  name="profileImage"
                  onChange={(e) => {
                    e.target.files.length && setFieldValue("profileImage", e.target.files[0]);
                  }}
                  className="mt-1 p-2 border rounded-md w-full"
                />
                <ErrorMessage name="profileImage" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="OrganizationName" className="block text-sm font-medium text-gray-700">
                  Organization Name
                </label>
                <Field type="text" name="OrganizationName" className="mt-1 p-2 border rounded-md w-full" />
                <ErrorMessage name="OrganizationName" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <Field type="text" name="address" className="mt-1 p-2 border rounded-md w-full" />
                <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <Field type="text" name="phoneNumber" className="mt-1 p-2 border rounded-md w-full" />
                <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Field type="text" name="email" className="mt-1 p-2 border rounded-md w-full" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="webURL" className="block text-sm font-medium text-gray-700">
                  Website URL
                </label>
                <Field type="text" name="webURL" className="mt-1 p-2 border rounded-md w-full" />
                <ErrorMessage name="webURL" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* ... Add more form fields here ... */}

              <button
                type="submit"
                className="bg-purple text-white p-2 rounded-md hover:bg-purple-dark
                col-span-3 transition-colors duration-300"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};








export default BusinessPlanPopup;
