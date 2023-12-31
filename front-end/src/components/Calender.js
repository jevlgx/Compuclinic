import React from "react";
import { connect } from "react-redux";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/sass/styles.scss";
import PropTypes from "prop-types";
import { onPressTagDropdown } from "../actions";

class Calender extends React.Component {
  render() {
    const { localizer, allViews, ColoredDateCellWrapper } = this.props;
    return (
      <div className="col-lg-8">
        <div className="card">
          <div className="body">
            {
              <Calendar
                selectable
                events={[
                  {
                    id: 0,
                    title: "All Day Event very long title",
                    allDay: true,
                    start: new Date(2019, 3, 0),
                    end: new Date(2019, 3, 1),
                  },
                ]}
                views={allViews}
                step={60}
                showMultiDayTimes
                max={new Date(2025, 17, 1)}
                defaultDate={new Date(2019, 3, 3)}
                components={{
                  timeSlotWrapper: ColoredDateCellWrapper,
                }}
                onPressSwitch={() => {}}
                localizer={localizer}
              />
            }
          </div>
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  onPressSwitch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {
  onPressTagDropdown,
})(Calendar);
