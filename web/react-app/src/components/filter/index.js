import { Field, Form, Formik } from "formik";
import styled from "styled-components";
import { travelService } from "../../services/travel.service";

const FiltersLayout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  margin: 16px 0 24px 0;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 995px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Filter = ({ setTravels }) => {
  return (
    <Formik
      initialValues={{
        text: "",
        price: "",
        transportation: "",
      }}
      onSubmit={({ text, price, transportation }, { setSubmitting }) => {
        travelService.filterTravels(text, price, transportation).then(
          (travels) => {
            setTravels(travels);
            setSubmitting(false);
          },
          (error) => {
            setSubmitting(false);
          }
        );
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <FiltersLayout>
            <Field
              name="text"
              type="text"
              className="form-control mr-3"
              placeholder="What are you looking for?"
            />
            <Field
              name="price"
              type="number"
              className="form-control mr-3"
              placeholder="Enter your budget (€)"
            />
            <Field as="select" name="transportation" className="form-control">
              <option value="">Search by transportation</option>
              <option value="BUS">Bus</option>
              <option value="PLANE">Plane</option>
              <option value="TRAIN">Train</option>
            </Field>
            <button
              type="submit"
              className="btn btn-outline-primary"
              disabled={isSubmitting}
            >
              Search
            </button>
            {isSubmitting && (
              <img
                alt="loading"
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              />
            )}
          </FiltersLayout>
        </Form>
      )}
    </Formik>
  );
};

export default Filter;
