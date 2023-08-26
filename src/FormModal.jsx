import {useState} from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormModal = ({ onAddPost }) => {

  
  const [showModal, setShowModal] = useState(false);
  

  const handleSubmit = (values, { resetForm }) => {
    onAddPost(values); // Call the function to add the new post
    resetForm();
    setShowModal(false);
  };

  return (
    <div>
      <Formik
        initialValues={{ title: "", content: "" }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          content: Yup.string().required("Content is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          onAddPost(values);
          resetForm();
        }}
      >
        <Form>
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
            onClick={() => setShowModal(true)}
          >
            Add a Post
          </button>

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-center">
                  Add a New Post
                </h2>
                <div>
                  <label
                    htmlFor="title"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Title:
                  </label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                  <ErrorMessage name="title" component="div" className="error" />
                </div>

                <div>
                  <label
                    htmlFor="content"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Content:
                  </label>
                  <Field
                    as="textarea"
                    id="content"
                    name="content"
                    className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
                    rows="4"
                    required
                  />
                  <ErrorMessage name="content" component="div" className="error" />
                </div>

                <div className="flex flex-col sm:flex-row justify-center sm:justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-2 sm:mb-0 sm:mr-2"
                  >
                    Create Post
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
  
};

export default FormModal;
