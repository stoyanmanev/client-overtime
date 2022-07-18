import React from "react";
import { ListGroup } from "react-bootstrap";
import { Hour } from "../../generated/graphql";
import HourListItem from "./HourListItem";
import CurrentUser from "../../interfaces/CurrectUser";

interface Props {
  hours: Hour[];
  user: CurrentUser;
  onDelete: (_id: string) => void;
}

const HourList: React.FC<Props> = ({ hours, user, onDelete }) => {
  console.log(hours.filter((hour) => hour.flag === true))
  const flagHours = hours.filter((hour) => hour.flag !== true);
  const userHours = flagHours.filter((hour) => hour.createdBy === user._id).reverse();

  console.log(userHours)

  if (userHours.length === 0) {
    return (
      <ListGroup>
        <div className="list-group-item">Result not found</div>
      </ListGroup>
    );
  }

  return (
    <ListGroup>
      {userHours &&
        userHours.map((data) => (
          <HourListItem key={data._id} hour={data} onDelete={onDelete} />
        ))}
    </ListGroup>
  );
};

export default HourList;
