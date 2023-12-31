import React from "react";
import { connect } from "react-redux";
import {
  onPressTagDropdown,
  onPressMoreDropdown,
  onPressCompose,
} from "../actions";
import JoditEditor from "jodit-react";

class MailCompose extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="body">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="To" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="CC" />
              </div>
            </form>
            <JoditEditor
              value={
                "Hello there,<br /><p>The toolbar can be customized and it also supports various callbacks such as <code>oninit</code>, <code>onfocus</code> <code>onpaste</code> and many more.</p><p> Please try <b>paste some texts</b> here </p>"
              }
              config={{ readonly: false }}
              tabIndex={1}
              onBlur={(newContent) => {}}
              onChange={(newContent) => {}}
            />
            <div className="m-t-30">
              <button type="button" className="btn btn-success m-r-5">
                Send Message
              </button>
              <button type="button" className="btn btn-secondary  m-r-5">
                Draft
              </button>
              <a
                className="btn btn-outline-secondary"
                onClick={() => {
                  this.props.onPressCompose(true);
                }}
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MailCompose.propTypes = {};

const mapStateToProps = ({ mailInboxReducer }) => ({
  isTagDropDown: mailInboxReducer.isTagDropDown,
  isMoreDropDown: mailInboxReducer.isMoreDropDown,
});

export default connect(mapStateToProps, {
  onPressTagDropdown,
  onPressMoreDropdown,
  onPressCompose,
})(MailCompose);
