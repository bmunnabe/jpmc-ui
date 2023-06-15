import style from "./CreateProject.module.css";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.owner) {
    errors.owner = "Required";
  } else if (values.owner.length <= 7) {
    errors.owner = "Must be 7 characters or more";
  }

  if (!values.projectTitle) {
    errors.projectTitle = "Required";
  } else if (values.projectTitle.length > 20) {
    errors.projectTitle = "Must be 20 characters or less";
  }

  if (!values.projectDescription) {
    errors.projectDescription = "Required";
  } else if (values.projectDescription.length < 20) {
    errors.projectDescription = "Must be 20 characters or more";
  }

//   if (!values.TemplateId) {
//     errors.TemplateId = "Required";
//   }

  return errors;
};

const CreateProject = (props) => {
  const [templateData, setTemplatData] = useState([]);
  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch("./data/templates.json");
      const body = await response.json();
      //   const contacts = body.results
      console.log(body);
      setTemplatData(body);
    };
    doFetch();
  }, []);

  const formik = useFormik({
    initialValues: {
      owner: "",
      projectTitle: "",
      projectDescription: "",
      TemplateId: ""
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <h3>Project List</h3>
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="owner">Owner</label>
          <input
            className="form-control"
            id="owner"
            name="owner"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.owner}
          />
          {formik.errors.owner ? (
            <small className={style.errors}>{formik.errors.owner}</small>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="projectTitle">Project Title</label>
          <input
            className="form-control"
            id="projectTitle"
            name="projectTitle"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.projectTitle}
          />
          {formik.errors.projectTitle ? (
            <small className={style.errors}>{formik.errors.projectTitle}</small>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="projectDescription">Project Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="projectDescription"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.projectDescription}
          ></textarea>

          {formik.errors.projectDescription ? (
            <small className={style.errors}>
              {formik.errors.projectDescription}
            </small>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="TemplateId">Template Id</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            name="TemplateId"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.TemplateId}
          >
            {templateData.map((template) => (
              <option value={template.templateId} key={template.templateId}>
                {template.templateTitle}
              </option>
            ))}
          </select>

          {formik.errors.TemplateId ? (
            <small className={style.errors}>{formik.errors.TemplateId}</small>
          ) : null}
        </div>
        <div className={style.btnCont}>
          <button
            className="rounded-md border-white font-medium text-black-800 my-2 p-2"
            type="button"
            onClick={props.onClick}
          >
            Cancel
          </button>
          <button
            className="rounded-md bg-green-800 font-medium text-white my-2 p-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateProject;
