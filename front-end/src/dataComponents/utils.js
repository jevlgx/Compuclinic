import React from "react"

export const redirectTo = (url="#") => {
    window.location.assign(url)
}

export const CardModalHeader = ({headerText="Overview", btnText, modalId="updateModal"}) => {
    return (
        <>
            <div className="header row justify-content-between">

                <h6>{headerText}</h6>
                
                {btnText && <div className="rightheader">
                    <button
                    type="button"
                    onClick={() => {
                        document.getElementById(modalId).classList.toggle("show");
                    }}
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#"
                    >
                    {btnText}
                    </button>
                </div>}
            </div>
        </>
    )
}

export const ValidationModal = ({MessageTitle="Alert!", MessageText="Vous êtes sur le point de... Êtes vous sûr de vouloir continuer?", btnValidateText="Validate", btnCancelText="Cancel"}) => {
    return ( 
        <>
            <div
                id="validationModal"
                //className={isModalOpen ? "modal fade show" : "modal fade"}
                className={"modal fade"}
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="title" id="defaultModalLabel">
                        {MessageTitle}
                    </h4>
                    </div>
                    <div className="modal-body">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12">
                                
                                <h6 className="">
                                    {MessageTitle}
                                </h6>
                                
                            </div>
                            <div className="col-lg-12 col-md-12">
                            <p className="">
                                {MessageText}
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer row clearfix">
                        <div className="col">
                            <button type="button" className="btn btn-success btn-block"
                                onClick={() => {
                                    //this.props.onPresAddEvent();
                                    //setModalStatus(false)
                                    document.getElementById("validationModal").classList.toggle("show")
                                }}
                            >
                                {btnValidateText}
                            </button>
                    </div>
                    <div className="col">
                        <button
                            type="button"
                            onClick={() => {
                            //this.props.onPresAddEvent();
                            //setModalStatus(false)
                            document.getElementById("validationModal").classList.toggle("show")
                            }}
                            className="btn btn-simple btn-block btn-danger"
                            data-dismiss="modal"
                        >
                            {btnCancelText}
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export const ApiAction = ({action="", endpoint="", content=""}) => {}

export const SummerNoteEditor = () => {
    return (
        <div className="col-lg-12">
            <div className="card">
                <div className="header">
                    <h2>Inline Editor</h2>
                </div>
                <div className="body">
                    <div className="inline-editor" style="display: none;">
                        <p className="m-b-0">You can select content and edit inline</p>
                        <h5>Title Heading will be <b>apear here</b></h5>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                            opposed to using 'Content here, content here', making it look like readable English
                        </p>
                        <ul className="list-unstyled">
                            <li><i className="fa fa-hand-o-right text-success"></i> There are many variations of passages</li>
                            <li><i className="fa fa-hand-o-right text-success"></i> If you are going to use a passage of Ipsum</li>
                            <li><i className="fa fa-hand-o-right text-success"></i> Contrary to popular belief, Ipsum is not simply</li>
                        </ul>
                    </div>
                    <div className="note-editor">
                        <div className="note-dropzone">
                            <div className="note-dropzone-message"></div>
                        </div>
                        <div className="note-editing-area">
                            <div className="note-handle">
                                <div className="note-control-selection" style="display: none;">
                                    <div className="note-control-selection-bg"></div>
                                    <div className="note-control-holder note-control-nw"></div>
                                    <div className="note-control-holder note-control-ne"></div>
                                    <div className="note-control-holder note-control-sw"></div>
                                    <div className="note-control-sizing note-control-se"></div>
                                    <div className="note-control-selection-info"></div>
                                </div>
                            </div>
                            <div tabIndex="-1" style="position: absolute; left: -100000px; opacity: 0;" contentEditable="true"></div>
                            <div className="note-editable" contentEditable="true">
                                <p className="m-b-0">You can select content and edit inline</p>
                                <h5>Title Heading will be <b>apear here</b></h5>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                                    letters, as opposed to using 'Content here, content here', making it look like readable English
                                </p>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-hand-o-right text-success"></i> There are many variations of passages</li>
                                    <li><i className="fa fa-hand-o-right text-success"></i> If you are going to use a passage of Ipsum</li>
                                    <li><i className="fa fa-hand-o-right text-success"></i> Contrary to popular belief, Ipsum is not simply</li>
                                </ul>
                                <p>kalaue&gt;<br /></p>
                                <ul className="list-unstyled"></ul>
                            </div>
                        </div>
                        <div className="modal link-dialog" aria-hidden="false" tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <h4 className="modal-title">Insert Link</h4>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label>Text to display</label>
                                            <input className="note-link-text form-control" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label>To what URL should this link go?</label>
                                            <input className="note-link-url form-control" type="text" value="http://" />
                                        </div>
                                        <div className="checkbox">
                                            <label> <input type="checkbox" checked="" /> Open in new window </label>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button href="#" className="btn btn-primary note-link-btn disabled" disabled="">Insert Link</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal" aria-hidden="false" tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <h4 className="modal-title">Insert Image</h4>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group note-group-select-from-files">
                                            <label>Select from files</label>
                                            <input className="note-image-input form-control" type="file" name="files" accept="image/*" multiple="multiple" />
                                        </div>
                                        <div className="form-group note-group-image-url" style="overflow: auto;">
                                            <label>Image URL</label>
                                            <input className="note-image-url form-control col-md-12" type="text" />
                                        </div>
                                    </div>
                                    <div className="modal-footer"><button href="#" className="btn btn-primary note-image-btn disabled" disabled="">Insert Image</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="modal" aria-hidden="false" tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <h4 className="modal-title">Insert Video</h4>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group row-fluid">
                                            <label>Video URL? <small className="text-muted">(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)</small></label>
                                            <input className="note-video-url form-control span12" type="text" />
                                        </div>
                                    </div>
                                    <div className="modal-footer"><button href="#" className="btn btn-primary note-video-btn disabled" disabled="">Insert Video</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="modal" aria-hidden="false" tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                        <h4 className="modal-title">Help</h4>
                                    </div>
                                    <div className="modal-body" style="max-height: 300px; overflow: scroll;">
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}> <kbd>ENTER</kbd></label><span>Insert Paragraph</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+Z</kbd></label><span>Undoes the last command</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                                width:180,
                                                marginRight:10}}><kbd>CTRL+Y</kbd></label><span>Redoes the last command</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>TAB</kbd></label><span>Tab</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>SHIFT+TAB</kbd></label><span>Untab</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+B</kbd></label><span>Set a bold style</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+I</kbd></label><span>Set a italic style</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+U</kbd></label><span>Set a underline style</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+SHIFT+S</kbd></label><span>Set a strikethrough style</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+BACKSLASH</kbd></label><span>Clean a style</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+SHIFT+L</kbd></label><span>Set left align</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+SHIFT+E</kbd></label><span>Set center align</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+SHIFT+R</kbd></label><span>Set right align</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+SHIFT+J</kbd></label><span>Set full align</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+SHIFT+NUM7</kbd></label><span>Toggle unordered list</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+SHIFT+NUM8</kbd></label><span>Toggle ordered list</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+LEFTBRACKET</kbd></label><span>Outdent on current paragraph</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+RIGHTBRACKET</kbd></label><span>Indent on current paragraph</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+NUM0</kbd></label><span>Change current block's format as a paragraph(P tag)</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+NUM1</kbd></label><span>Change current block's format as H1</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+NUM2</kbd></label><span>Change current block's format as H2</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+NUM3</kbd></label><span>Change current block's format as H3</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+NUM4</kbd></label><span>Change current block's format as H4</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+NUM5</kbd></label><span>Change current block's format as H5</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+NUM6</kbd></label><span>Change current block's format as H6</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+ENTER</kbd></label><span>Insert horizontal rule</span>
                                        <div className="help-list-item"></div>
                                        <label style={{
                                            width:180,
                                            marginRight:10}}><kbd>CTRL+K</kbd></label><span>Show Link Dialog</span>
                                    </div>
                                    <div className="modal-footer">
                                        <p className="text-center">
                                            <a href="http://summernote.org/" target="_blank">Summernote 0.8.2</a> · <a href="https://github.com/summernote/summernote" target="_blank">Project</a> ·
                                            <a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export const LoadingWidget = () => {
    //Loading widget
      return (
        <div className="col">
        <div className="card">
          <div className="body d-flex align-items-center justify-content-center">
            <div className="chart easy-pie-chart-1 d-flex" data-percent="75">
              {/* Loading Widget */}
              <div className="d-flex align-items-center justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              {" "}
              <canvas height="10" width="10"></canvas>
            </div>            
          </div>
        </div>
       </div>
            
        )
}
