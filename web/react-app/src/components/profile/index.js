import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";

import { userService } from "../../services/user.service";

const CardGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
`;

const Profile = () => {
  const [user, setUser] = useState(null);
  const history = useHistory();
  let travel;

  if (user) {
    if (user.travel) {
      travel = user.travel;
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const fetchedUser = await userService.getUser();
    const user = await fetchedUser;

    setUser(user);
  };

  return (
    <div className="container my-4">
      <h2>
        Welcome to your profile, {user?.firstName} {user?.lastName}!
      </h2>
      <hr />
      <h3>Your personal information</h3>
      <Formik
        initialValues={{
          username: user?.username || "",
          firstName: user?.firstName || "",
          lastName: user?.lastName || "",
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required("Username is required"),
          firstName: Yup.string().required("First name is required"),
          lastName: Yup.string().required("Last name is required"),
        })}
        onSubmit={({ username, firstName, lastName }, { setSubmitting }) => {
          userService
            .updateUser(user.id, username, "hack", firstName, lastName)
            .then(
              (user) => {
                setSubmitting(false);
                setUser(user);
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
              <label htmlFor="username">Username</label>
              <Field
                name="username"
                type="text"
                className={
                  "form-control" +
                  (errors.username && touched.username ? " is-invalid" : "")
                }
                disabled
              />
              <p style={{ color: "gray" }}>
                Only administrator can edit username
              </p>
              <ErrorMessage
                name="username"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <Field
                name="firstName"
                type="text"
                className={
                  "form-control" +
                  (errors.firstName && touched.firstName ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <Field
                name="lastName"
                type="text"
                className={
                  "form-control" +
                  (errors.lastName && touched.lastName ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary my-2"
                disabled={isSubmitting}
              >
                Update
              </button>
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
      <hr />
      <h3 className="mb-4">Your travels</h3>

      {travel ? (
        <CardGrid>
          <Card>
            <Card.Img
              variant="top"
              src={travel.imageURL}
              style={{ height: "218px" }}
            />
            <Card.Body>
              <Card.Title>{travel.travelName}</Card.Title>
              <Card.Text>{travel.shortDescription}</Card.Text>
              <Card.Text style={{ color: "gray" }}>
                {travel.price} | {travel.transportation === "BUS" && "  🚌"}
                {travel.transportation === "PLANE" && "  ✈️"}
                {travel.transportation === "TRAIN" && "  🚂"}
              </Card.Text>
              <Link to={`travels/${travel.id}`}>
                <button className="btn btn-primary mr-3">Read more</button>
              </Link>
              {user && (
                <button
                  onClick={() =>
                    userService
                      .cancelTravel(user.id)
                      .then(history.push("/travels"))
                  }
                  className="btn btn-danger"
                >
                  Cancel reservation
                </button>
              )}
            </Card.Body>
          </Card>
        </CardGrid>
      ) : (
        <>
          <p>You currently don't have any travels.</p>
          <Link to="/travels" className="btn btn-success">
            Search travels
          </Link>
        </>
      )}
    </div>
  );
};

export default Profile;
