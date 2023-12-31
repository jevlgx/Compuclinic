import React from "react";
import { connect } from "react-redux";
import imageuser from "../../assets/images/user.png";

class ProfileV1Setting extends React.Component {
  render() {
    return (
      <div>
        <div className="body">
          <h6>Profile Photo</h6>
          <div className="media">
            <div className="media-left m-r-15">
              <img
                alt="User"
                className="user-photo media-object"
                src={imageuser}
              />
            </div>
            <div className="media-body">
              <p>
                Upload your photo. <br />
                <em>Image should be at least 140px x 140px</em>
              </p>
              <button
                className="btn btn-default-dark"
                id="btn-upload-photo"
                type="button"
              >
                Upload Photo
              </button>
              <input className="sr-only" id="filePhoto" type="file" />
            </div>
          </div>
        </div>
        <div className="body">
          <h6>Basic Information</h6>
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="First Name"
                  type="text"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Last Name"
                  type="text"
                />
              </div>
              <div className="form-group">
                <div>
                  <label className="fancy-radio">
                    <input
                      name="gender2"
                      type="radio"
                      value="male"
                      onChange={() => {}}
                    />
                    <span>
                      <i></i>Male
                    </span>
                  </label>
                  <label className="fancy-radio">
                    <input
                      name="gender2"
                      type="radio"
                      value="female"
                      onChange={() => {}}
                    />
                    <span>
                      <i></i>Female
                    </span>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="icon-calendar"></i>
                    </span>
                  </div>
                  <input
                    className="form-control"
                    data-date-autoclose="true"
                    data-provide="datepicker"
                    placeholder="Birthdate"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="http://"
                  type="text"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Address Line 1"
                  type="text"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Address Line 2"
                  type="text"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="City"
                  type="text"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="State/Province"
                  type="text"
                />
              </div>
              <div className="form-group">
                <select className="form-control">
                  <option value="">-- Select Country --</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AX">Åland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia, Plurinational State of</option>
                  <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="BN">Brunei Darussalam</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo</option>
                  <option value="CD">
                    Congo, the Democratic Republic of the
                  </option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CI">Côte d'Ivoire</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curaçao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands (Malvinas)</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HM">Heard Island and McDonald Islands</option>
                  <option value="VA">Holy See (Vatican City State)</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran, Islamic Republic of</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="KP">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="KR">Korea, Republic of</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Lao People's Democratic Republic</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao</option>
                  <option value="MK">
                    Macedonia, the former Yugoslav Republic of
                  </option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia, Federated States of</option>
                  <option value="MD">Moldova, Republic of</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau</option>
                  <option value="PS">Palestinian Territory, Occupied</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="RE">Réunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russian Federation</option>
                  <option value="RW">Rwanda</option>
                  <option value="BL">Saint Barthélemy</option>
                  <option value="SH">
                    Saint Helena, Ascension and Tristan da Cunha
                  </option>
                  <option value="KN">Saint Kitts and Nevis</option>
                  <option value="LC">Saint Lucia</option>
                  <option value="MF">Saint Martin (French part)</option>
                  <option value="PM">Saint Pierre and Miquelon</option>
                  <option value="VC">Saint Vincent and the Grenadines</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">Sao Tome and Principe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SX">Sint Maarten (Dutch part)</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard and Jan Mayen</option>
                  <option value="SZ">Swaziland</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syrian Arab Republic</option>
                  <option value="TW">Taiwan, Province of China</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania, United Republic of</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad and Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks and Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="UM">
                    United States Minor Outlying Islands
                  </option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VE">Venezuela, Bolivarian Republic of</option>
                  <option value="VN">Viet Nam</option>
                  <option value="VG">Virgin Islands, British</option>
                  <option value="VI">Virgin Islands, U.S.</option>
                  <option value="WF">Wallis and Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
              </div>
            </div>
          </div>
          <button className="btn btn-primary" type="button">
            Update
          </button>{" "}
          &nbsp;&nbsp;
          <button className="btn btn-default" type="button">
            Cancel
          </button>
        </div>
        <div className="body">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12">
              <h6>Account Data</h6>
              <div className="form-group">
                <input
                  className="form-control"
                  disabled=""
                  placeholder="Username"
                  type="text"
                  value="alizeethomas"
                  onChange={() => {}}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  value="alizee.info@yourdomain.com"
                  onChange={() => {}}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Phone Number"
                  type="text"
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <h6>Change Password</h6>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Current Password"
                  type="password"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="New Password"
                  type="password"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Confirm New Password"
                  type="password"
                />
              </div>
            </div>
          </div>
          <button className="btn btn-primary" type="button">
            Update
          </button>{" "}
          &nbsp;&nbsp;
          <button className="btn btn-default">Cancel</button>
        </div>
        <div className="body">
          <h6>General Information</h6>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Phone Number"
                  type="text"
                />
              </div>
              <div className="form-group">
                <select className="form-control">
                  <option>--Select Language</option>
                  <option lang="en" value="en_US">
                    English (United States)
                  </option>
                  <option lang="ar" value="ar">
                    العربية
                  </option>
                  <option lang="ar" value="ary">
                    العربية المغربية
                  </option>
                  <option lang="az" value="az">
                    Azərbaycan dili
                  </option>
                  <option lang="az" value="azb">
                    گؤنئی آذربایجان
                  </option>
                  <option lang="be" value="bel">
                    Беларуская мова
                  </option>
                  <option lang="bg" value="bg_BG">
                    Български
                  </option>
                  <option lang="bn" value="bn_BD">
                    বাংলা
                  </option>
                  <option lang="bs" value="bs_BA">
                    Bosanski
                  </option>
                  <option lang="ca" value="ca">
                    Català
                  </option>
                  <option lang="ceb" value="ceb">
                    Cebuano
                  </option>
                  <option lang="cs" value="cs_CZ">
                    Čeština‎
                  </option>
                  <option lang="cy" value="cy">
                    Cymraeg
                  </option>
                  <option lang="da" value="da_DK">
                    Dansk
                  </option>
                  <option lang="de" value="de_CH_informal">
                    Deutsch (Schweiz, Du)
                  </option>
                  <option lang="de" value="de_CH">
                    Deutsch (Schweiz)
                  </option>
                  <option lang="de" value="de_DE">
                    Deutsch
                  </option>
                  <option lang="de" value="de_DE_formal">
                    Deutsch (Sie)
                  </option>
                  <option lang="el" value="el">
                    Ελληνικά
                  </option>
                  <option lang="en" value="en_GB">
                    English (UK)
                  </option>
                  <option lang="en" value="en_AU">
                    English (Australia)
                  </option>
                  <option lang="en" value="en_ZA">
                    English (South Africa)
                  </option>
                  <option lang="en" value="en_NZ">
                    English (New Zealand)
                  </option>
                  <option lang="en" value="en_CA">
                    English (Canada)
                  </option>
                  <option lang="eo" value="eo">
                    Esperanto
                  </option>
                  <option lang="es" value="es_CL">
                    Español de Chile
                  </option>
                  <option lang="es" value="es_MX">
                    Español de México
                  </option>
                  <option lang="es" value="es_GT">
                    Español de Guatemala
                  </option>
                  <option lang="es" value="es_AR">
                    Español de Argentina
                  </option>
                  <option lang="es" value="es_ES">
                    Español
                  </option>
                  <option lang="es" value="es_PE">
                    Español de Perú
                  </option>
                  <option lang="es" value="es_CO">
                    Español de Colombia
                  </option>
                  <option lang="es" value="es_VE">
                    Español de Venezuela
                  </option>
                  <option lang="et" value="et">
                    Eesti
                  </option>
                  <option lang="eu" value="eu">
                    Euskara
                  </option>
                  <option lang="fa" value="fa_IR">
                    فارسی
                  </option>
                  <option lang="fi" value="fi">
                    Suomi
                  </option>
                  <option lang="fr" value="fr_FR">
                    Français
                  </option>
                  <option lang="fr" value="fr_CA">
                    Français du Canada
                  </option>
                  <option lang="fr" value="fr_BE">
                    Français de Belgique
                  </option>
                  <option lang="gd" value="gd">
                    Gàidhlig
                  </option>
                  <option lang="gl" value="gl_ES">
                    Galego
                  </option>
                  <option lang="haz" value="haz">
                    هزاره گی
                  </option>
                  <option lang="he" value="he_IL">
                    עִבְרִית
                  </option>
                  <option lang="hi" value="hi_IN">
                    हिन्दी
                  </option>
                  <option lang="hr" value="hr">
                    Hrvatski
                  </option>
                  <option lang="hu" value="hu_HU">
                    Magyar
                  </option>
                  <option lang="hy" value="hy">
                    Հայերեն
                  </option>
                  <option lang="id" value="id_ID">
                    Bahasa Indonesia
                  </option>
                  <option lang="is" value="is_IS">
                    Íslenska
                  </option>
                  <option lang="it" value="it_IT">
                    Italiano
                  </option>
                  <option lang="ja" value="ja">
                    日本語
                  </option>
                  <option lang="ka" value="ka_GE">
                    ქართული
                  </option>
                  <option lang="ko" value="ko_KR">
                    한국어
                  </option>
                  <option lang="lt" value="lt_LT">
                    Lietuvių kalba
                  </option>
                  <option lang="mk" value="mk_MK">
                    Македонски јазик
                  </option>
                  <option lang="mr" value="mr">
                    मराठी
                  </option>
                  <option lang="ms" value="ms_MY">
                    Bahasa Melayu
                  </option>
                  <option lang="my" value="my_MM">
                    ဗမာစာ
                  </option>
                  <option lang="nb" value="nb_NO">
                    Norsk bokmål
                  </option>
                  <option lang="nl" value="nl_NL">
                    Nederlands
                  </option>
                  <option lang="nl" value="nl_NL_formal">
                    Nederlands (Formeel)
                  </option>
                  <option lang="nn" value="nn_NO">
                    Norsk nynorsk
                  </option>
                  <option lang="oc" value="oci">
                    Occitan
                  </option>
                  <option lang="pl" value="pl_PL">
                    Polski
                  </option>
                  <option lang="ps" value="ps">
                    پښتو
                  </option>
                  <option lang="pt" value="pt_BR">
                    Português do Brasil
                  </option>
                  <option lang="pt" value="pt_PT">
                    Português
                  </option>
                  <option lang="ro" value="ro_RO">
                    Română
                  </option>
                  <option lang="ru" value="ru_RU">
                    Русский
                  </option>
                  <option lang="sk" value="sk_SK">
                    Slovenčina
                  </option>
                  <option lang="sl" value="sl_SI">
                    Slovenščina
                  </option>
                  <option lang="sq" value="sq">
                    Shqip
                  </option>
                  <option lang="sr" value="sr_RS">
                    Српски језик
                  </option>
                  <option lang="sv" value="sv_SE">
                    Svenska
                  </option>
                  <option lang="th" value="th">
                    ไทย
                  </option>
                  <option lang="tl" value="tl">
                    Tagalog
                  </option>
                  <option lang="tr" value="tr_TR">
                    Türkçe
                  </option>
                  <option lang="ug" value="ug_CN">
                    Uyƣurqə
                  </option>
                  <option lang="uk" value="uk">
                    Українська
                  </option>
                  <option lang="vi" value="vi">
                    Tiếng Việt
                  </option>
                  <option lang="zh" value="zh_CN">
                    简体中文
                  </option>
                  <option lang="zh" value="zh_TW">
                    繁體中文
                  </option>
                </select>
              </div>
              <div className="form-group"></div>
              <div className="form-group">
                <label>Date Format</label>
                <div className="fancy-radio">
                  <label>
                    <input
                      name="dateFormat"
                      type="radio"
                      value=""
                      onChange={() => {}}
                    />
                    <span>
                      <i></i>May 18, 2018
                    </span>
                  </label>
                  &nbsp;&nbsp;
                  <label>
                    <input
                      name="dateFormat"
                      type="radio"
                      value=""
                      onChange={() => {}}
                    />
                    <span>
                      <i></i>2018, May, 18
                    </span>
                  </label>
                  &nbsp;&nbsp;
                  <label>
                    <input
                      name="dateFormat"
                      type="radio"
                      value=""
                      onChange={() => {}}
                    />
                    <span>
                      <i></i>2018-03-10
                    </span>
                  </label>
                  &nbsp;&nbsp;
                  <label>
                    <input
                      name="dateFormat"
                      type="radio"
                      value=""
                      onChange={() => {}}
                    />
                    <span>
                      <i></i>02/09/2018
                    </span>
                  </label>
                  &nbsp;&nbsp;
                  <label>
                    <input
                      name="dateFormat"
                      type="radio"
                      value=""
                      onChange={() => {}}
                    />
                    <span>
                      <i></i>10/05/2018
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <h6>Email from Lucid</h6>
              <p>I'd like to receive the following emails:</p>
              <ul className="list-unstyled list-email-received">
                <li>
                  <label className="fancy-checkbox">
                    <input type="checkbox" />
                    <span>Weekly account summary</span>
                  </label>
                </li>
                <li>
                  <label className="fancy-checkbox">
                    <input type="checkbox" />
                    <span>Campaign reports</span>
                  </label>
                </li>
                <li>
                  <label className="fancy-checkbox">
                    <input type="checkbox" />
                    <span>Promotional news such as offers or discounts</span>
                  </label>
                </li>
                <li>
                  <label className="fancy-checkbox">
                    <input type="checkbox" />
                    <span>
                      Tips for campaign setup, growth and client success stories
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(ProfileV1Setting);
