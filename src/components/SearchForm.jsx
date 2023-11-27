import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state == "submitting";

  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-control"
          autoComplete="off"
          placeholder="search for meal"
          defaultValue={searchTerm}
        />
        <button
          type="submit"
          className="btn btn-default"
          disabled={isSubmitting}
        >
          {isSubmitting ? "searching..." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
