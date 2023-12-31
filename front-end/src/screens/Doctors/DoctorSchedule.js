import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import ProfileHeaderCard from "../../components/ProfileHeaderCard";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import AddEventModal from "../../components/AddEventModal";
import { events } from "../../Data/AppData";
import { onPresAddEvent } from "../../actions";
import { ScheduleCalendarData } from "../../dataComponents/ScheduleDataComponent";
import DoctorHeaderCardV1 from "../../components/DoctorHeaderCard";

class DoctorSchedule extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { isEventModal } = this.props;
    return (
      <div style={{ flex: 1 }}>
        <div style={{ opacity: isEventModal ? 0.3 : 1 }}>
          <div className="ng-star-inserted">
            <div className="container-fluid">
              <PageHeader
                HeaderText="Doctor Schedule"
                Breadcrumb={[
                  { name: "Doctors", navigate: `#` },
                  { name: "Schedule", navigate: `#` },
                ]}
                key="1"
              />
              <div className="row clearfix">
                <div className="col-lg-8">
                  <div className="card">
                    <div className="body">
                      {/* <FullCalendar
                        defaultView="dayGridMonth"
                        header={{
                          left: "prev,next today",
                          center: "title",
                          right:
                            "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                        }}
                        plugins={[
                          dayGridPlugin,
                          timeGridPlugin,
                          interactionPlugin,
                          listPlugin,
                        ]}
                        events={events}
                      /> */}
                      <ScheduleCalendarData />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="body">
                      <button
                        type="button"
                        onClick={() => {
                          this.props.onPresAddEvent();
                          //document.body.classList.add('modal-open');
                        }}
                        className="btn btn-primary btn-block"
                        data-toggle="modal"
                        data-target="#addevent"
                      >
                        Add New Event
                      </button>
                    </div>
                  </div>
                  <div className="card profile-header">
                    <DoctorHeaderCardV1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AddEventModal />
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({
  isEventModal: mailInboxReducer.isEventModal,
});

export default connect(mapStateToProps, { onPresAddEvent })(DoctorSchedule);
