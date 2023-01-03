import AllParticipate from "../AllParticipate/AllParticipate";
import DescribeOfEvent from "../DescribeOfEvent/DescribeOfEvent";
const AllDetalis = (props) => {
  return (
    <>
      <DescribeOfEvent id={props.id} />
      <AllParticipate id={props.id} />
    </>
  );
};
export default AllDetalis;
