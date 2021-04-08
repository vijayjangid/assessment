import { fetchOkrsRequest, fetchOkrsSuccess, fetchOkrsError } from "./actions";
// import { makeOkrHierarchy } from "./selectors";

export function fetchOkrs() {
  const uri = "https://okrcentral.github.io/sample-okrs/db.json";
  return (dispatch) => {
    dispatch(fetchOkrsRequest());
    fetch(uri)
      .then((res) => res.json())
      .then(
        (result) => {
          const { data } = result;
          // console.log(data);
          // console.log(makeOkrHierarchy(data));
          dispatch(fetchOkrsSuccess(data));
        },
        (error) => dispatch(fetchOkrsError(error))
      )
      .catch((error) => dispatch(fetchOkrsError(error)));
  };
}
