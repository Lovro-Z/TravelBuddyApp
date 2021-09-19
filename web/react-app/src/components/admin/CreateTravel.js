import { ErrorMessage, Field, Form, Formik } from "formik";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { travelService } from "../../services/travel.service";

const CreateTravel = () => {
  const history = useHistory();
  return (
    <div className="container my-4">
      <Formik
        initialValues={{
          travelName: "",
          shortDescription: "",
          price: 0,
          spaceLeft: 0,
          transportation: "BUS",
          description: "",
          imageUrl: "",
        }}
        validationSchema={Yup.object().shape({
          travelName: Yup.string().required("Travel name is required"),
          shortDescription: Yup.string().required(
            "Short description is required"
          ),
          price: Yup.number().required("Price is required"),
          spaceLeft: Yup.number().required("Number of spaces left is required"),
          transportation: Yup.string().required("Transportation is required"),
          description: Yup.string().required("Description is required"),
          imageUrl: Yup.string().required("Image url is required"),
        })}
        onSubmit={(
          {
            travelName,
            shortDescription,
            price,
            spaceLeft,
            transportation,
            description,
            imageUrl,
          },
          { setSubmitting }
        ) => {
          travelService
            .createTravel(
              travelName,
              shortDescription,
              price,
              spaceLeft,
              transportation,
              description,
              imageUrl
            )
            .then(
              (travel) => {
                setSubmitting(false);
                history.push("/travels");
              },
              (error) => {
                setSubmitting(false);
              }
            );
        }}
        enableReinitialize
      >
        {({ errors, status, touched, isSubmitting }) => (
          <Form style={{ width: "50%" }}>
            <div className="form-group">
              <label htmlFor="travelName">Travel name</label>
              <Field
                name="travelName"
                type="text"
                className={
                  "form-control" +
                  (errors.travelName && touched.travelName ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="travelName"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="shortDescription">Short description</label>
              <Field
                as="textarea"
                name="shortDescription"
                className={
                  "form-control" +
                  (errors.shortDescription && touched.shortDescription
                    ? " is-invalid"
                    : "")
                }
              />
              <ErrorMessage
                name="shortDescription"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price (€)</label>
              <Field
                name="price"
                type="number"
                className={
                  "form-control" +
                  (errors.price && touched.price ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="price"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="travelName">Space left</label>
              <Field
                name="spaceLeft"
                type="number"
                className={
                  "form-control" +
                  (errors.spaceLeft && touched.spaceLeft ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="spaceLeft"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="travelName">Transportation</label>
              <Field
                as="select"
                name="transportation"
                className={
                  "form-control" +
                  (errors.transportation && touched.transportation
                    ? " is-invalid"
                    : "")
                }
              >
                <option value="BUS">Bus</option>
                <option value="TRAIN">Train</option>
                <option value="PLANE">Plane</option>
              </Field>
              <ErrorMessage
                name="transportation"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <Field
                as="textarea"
                rows="20"
                name="description"
                className={
                  "form-control" +
                  (errors.description && touched.description
                    ? " is-invalid"
                    : "")
                }
              />
              <ErrorMessage
                name="description"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="imageUrl">Image URL</label>
              <Field
                name="imageUrl"
                type="text"
                className={
                  "form-control" +
                  (errors.imageUrl && touched.imageUrl ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="imageUrl"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success my-2"
                disabled={isSubmitting}
              >
                Add
              </button>
              <Link to="/travels" className="btn btn-primary ml-2">
                Back
              </Link>
              {isSubmitting && (
                <img
                  alt="loading"
                  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                />
              )}
            </div>
            {status && <div className={"alert alert-danger"}>{status}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTravel;
