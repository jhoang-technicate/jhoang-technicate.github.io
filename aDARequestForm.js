(function() {
function initGrievanceForm() {
    //build Grievance form
    let grievanceTemplate = `
        <style>
            .bd-66c8f6e11312c-control-group {
                display: block;
                margin-bottom: 24px;
            }
            .bd-66c8f6e11312c-control-label {
                float: left;
                width: 170px;
                padding-top: 5px;
                text-align: right;
            }
            .bd-66c8f6e11312c-controls {
                margin-left: 180px;
                padding-top: 5px;
            }
            #bd-66c8f6e11312c-grievanceForm.validated input:invalid,
            #bd-66c8f6e11312c-grievanceForm.validated select:invalid,
            #bd-66c8f6e11312c-raCameraForm.validated input:invalid,
            #bd-66c8f6e11312c-raCameraForm.validated select:invalid,
            #bd-66c8f6e11312c-raInterpreterForm.validated input:invalid,
            #bd-66c8f6e11312c-raInterpreterForm.validated select:invalid
            {
                border: 1px solid red;
            }
            .bd-66c8f6e11312c-required-label {
                color: red;
            }
        </style>
        <div id="bd-66c8f6e11312c-formSelector">
            <div>
                <label for="bd-66c8f6e11312c-RequestTypeID" class=""><span class="bd-66c8f6e11312c-required-label">*</span> Reasonable Accommodation Program Type:</label>
                <div style="padding: 10px 0;">
                    <span>
                        <select name="RequestTypeID" id="bd-66c8f6e11312c-RequestTypeID" required>
                            <option value="" selected="selected">Please Select...</option>
                            <option value="6">Grievance</option>
                            <option value="7">Reasonable Accommodation</option>
                            <option value="8">Audio/Video Recording Request</option>
                            <option value="9">Interpreting Service Request</option>
                        </select>
                    </span>
                </div>
            </div>
        </div>
        <hr />
        <form id="bd-66c8f6e11312c-grievanceForm" accept-charset="utf-8" style="display:none;">
            <h3 id="bd-66c8f6e11312c-grievanceFormTitle">Grievance</h3>
            <div>
                <h4>Requester Information</h4>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-RequesterFirstName" class="bd-66c8f6e11312c-control-label"><span class="bd-66c8f6e11312c-required-label">*</span> Name:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="text" name="RequesterFirstName" value="" id="bd-66c8f6e11312c-RequesterFirstName" placeholder="First Name" required />
                        <input type="text" name="RequesterLastName" value="" id="bd-66c8f6e11312c-RequesterLastName" placeholder="Last Name" aria-label="Last Name" required />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-RequesterPhone" class="bd-66c8f6e11312c-control-label">Phone Number:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="tel" name="RequesterPhone" class="bd-66c8f6e11312c-poc" value="" id="bd-66c8f6e11312c-RequesterPhone" required />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-RequesterEmail" class="bd-66c8f6e11312c-control-label">Email:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="email" name="RequesterEmail" class="bd-66c8f6e11312c-poc" value="" id="bd-66c8f6e11312c-RequesterEmail" required />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <div class="bd-66c8f6e11312c-controls">
                        <span class="bd-66c8f6e11312c-required-label">*</span> Please provide either an email or phone number.
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label class="bd-66c8f6e11312c-control-label" for="bd-66c8f6e11312c-SubmitterDifferent">Is submitter different:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <select name="SubmitterDifferent" id="bd-66c8f6e11312c-SubmitterDifferent" required>
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </select>
                    </div>
                </div>
                <div id="bd-66c8f6e11312c-submitterDetails" style="display: none;">
                    <hr />
                    <h4>Submitter Information</h4>
                    <div class="bd-66c8f6e11312c-control-group">
                        <label for="bd-66c8f6e11312c-SubmitterFirstName" class="bd-66c8f6e11312c-control-label"><span class="bd-66c8f6e11312c-required-label">*</span> Name:</label>
                        <div class="bd-66c8f6e11312c-controls">
                            <input type="text" name="SubmitterFirstName" value="" id="bd-66c8f6e11312c-SubmitterFirstName" placeholder="First Name" />
                            <input type="text" name="SubmitterLastName" value="" id="bd-66c8f6e11312c-SubmitterLastName" placeholder="Last Name" aria-label="Last Name" />
                        </div>
                    </div>
                    <div class="bd-66c8f6e11312c-control-group">
                        <label for="bd-66c8f6e11312c-SubmitterPhone" class="bd-66c8f6e11312c-control-label">Phone Number:</label>
                        <div class="bd-66c8f6e11312c-controls">
                            <input type="tel" name="SubmitterPhone" class="bd-66c8f6e11312c-poc" data-submitter="1" value="" id="bd-66c8f6e11312c-SubmitterPhone" />
                        </div>
                    </div>
                    <div class="bd-66c8f6e11312c-control-group">
                        <label for="bd-66c8f6e11312c-SubmitterEmail" class="bd-66c8f6e11312c-control-label">Email:</label>
                        <div class="bd-66c8f6e11312c-controls">
                            <input type="email" name="SubmitterEmail" class="bd-66c8f6e11312c-poc" data-submitter="1" value="" id="bd-66c8f6e11312c-SubmitterEmail" />
                        </div>
                    </div>
                    <div class="bd-66c8f6e11312c-control-group">
                        <div class="bd-66c8f6e11312c-controls">
                            <span class="bd-66c8f6e11312c-required-label">*</span> Please provide either an email or phone number.
                        </div>
                    </div>
                    <div class="bd-66c8f6e11312c-control-group" style="margin-bottom: 10px;">
                        <label for="bd-66c8f6e11312c-SubmitterTitle" class="bd-66c8f6e11312c-control-label">Relationship to Requester:</label>
                        <div class="bd-66c8f6e11312c-controls">
                            <input type="text" name="SubmitterTitle" value="" id="bd-66c8f6e11312c-SubmitterTitle" />
                        </div>
                    </div><br />
                </div>
                <hr />
                <h4>Location Information</h4>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-LocationAddress" class="bd-66c8f6e11312c-control-label"><span class="bd-66c8f6e11312c-required-label">*</span> Location:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="text" name="LocationAddress" value="" id="bd-66c8f6e11312c-LocationAddress" required />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-ActualAddress" class="bd-66c8f6e11312c-control-label"><span class="bd-66c8f6e11312c-required-label">*</span> Address:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <span>
                            <input type="text" name="ActualAddress" value="" id="bd-66c8f6e11312c-ActualAddress" required />
                        </span>
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label class="bd-66c8f6e11312c-control-label"><span class="bd-66c8f6e11312c-required-label">*</span> City/State/Zip:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <span>
                            <input type="text" name="LocationCity" value="" id="bd-66c8f6e11312c-LocationCity" aria-label="City" required />
                        </span>
                        <span>
                            <select name="LocationState" id="bd-66c8f6e11312c-LocationState" aria-label="State" required>
                                <option value="AL">AL</option><option value="AK">AK</option><option value="AS">AS</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FM">FM</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MH">MH</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="MP">MP</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PW">PW</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VI">VI</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option>                            </select>
                        </span>
                        <span>
                            <input type="text" name="LocationZip" pattern="^[0-9]{5}(?:-[0-9]{4})?$" value="" id="bd-66c8f6e11312c-LocationZip" aria-label="ZIP Code" required />
                        </span>
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-LocationNote" class="bd-66c8f6e11312c-control-label">Location Notes:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <textarea name="LocationNote" cols="40" rows="3" id="bd-66c8f6e11312c-LocationNote"></textarea>
                    </div>
                </div>
                <hr />
                <h4>Request Information</h4>
                <div class="bd-66c8f6e11312c-control-group">
                    <label class="bd-66c8f6e11312c-control-label" for="bd-66c8f6e11312c-ADAGrievance">Is this ADA-related:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <select name="ADAGrievance" id="bd-66c8f6e11312c-ADAGrievance" required>
                            <option value="-1">Undetermined</option>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label class="bd-66c8f6e11312c-control-label" for="bd-66c8f6e11312c-IncidentDate">Date of Incident:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="date" size="16" name="IncidentDate" id="bd-66c8f6e11312c-IncidentDate" />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-RequestReason" class="bd-66c8f6e11312c-control-label">Nature of Request:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <textarea name="RequestReason" cols="40" rows="3" id="bd-66c8f6e11312c-RequestReason"></textarea>
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-Notes" class="bd-66c8f6e11312c-control-label">Notes:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <textarea name="Notes" cols="40" rows="3" id="bd-66c8f6e11312c-Notes"></textarea>
                    </div>
                </div>
            </div>
            <div>
                <button id="bd-66c8f6e11312c-grievanceFormSubmitBtn">Submit</button>
            </div>
        </form>
        <form id="bd-66c8f6e11312c-raCameraForm" accept-charset="utf-8" style="display:none;">
            <h3>Audio/Video Recording Request</h3>
            <div>
                <p>Consistent with La. R.S. 17:1948, a parent or legal guardian may request the installation of an audio and video camera in a special education self-contained classroom or other special education setting. For more information, please visit the Exceptional Student Services webpage. This request will be in effect for one academic year.</p>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raCameraForm-AcademicYear" class="bd-66c8f6e11312c-control-label">Year:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="text" name="cf_811" value="" id="bd-66c8f6e11312c-raCameraForm-AcademicYear" />
                    </div>
                </div>
                <h3>Requestor Information:</h3>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raCameraForm-RequesterFirstName" class="bd-66c8f6e11312c-control-label"><span class="bd-66c8f6e11312c-required-label">*</span> Name:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="text" name="RequesterFirstName" value="" id="bd-66c8f6e11312c-raCameraForm-RequesterFirstName" placeholder="First Name" required />
                        <input type="text" name="RequesterLastName" value="" id="bd-66c8f6e11312c-raCameraForm-RequesterLastName" placeholder="Last Name" aria-label="Last Name" required />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raCameraForm-RequesterPhone" class="bd-66c8f6e11312c-control-label">Phone Number:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="tel" name="RequesterPhone" class="bd-66c8f6e11312c-poc" value="" id="bd-66c8f6e11312c-raCameraForm-RequesterPhone" required />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raCameraForm-RequesterEmail" class="bd-66c8f6e11312c-control-label">Email:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="email" name="RequesterEmail" class="bd-66c8f6e11312c-poc" value="" id="bd-66c8f6e11312c-raCameraForm-RequesterEmail" required />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <div class="bd-66c8f6e11312c-controls">
                        <span class="bd-66c8f6e11312c-required-label">*</span> Please provide either an email or phone number.
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label class="bd-66c8f6e11312c-control-label" for="bd-66c8f6e11312c-RelationshipToChild">Relationship to child:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <select name="cf_816" id="bd-66c8f6e11312c-RelationshipToChild" required>
                            <option value="Parents">Parent(s)</option>
                            <option value="Legal Guardians">Legal Guardian(s)</option>
                            <option value="Adult Student">Adult Student</option>
                        </select>
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raCameraForm-ChildName" class="bd-66c8f6e11312c-control-label"><span class="bd-66c8f6e11312c-required-label">*</span> Child's full name:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="text" name="cf_814" value="" id="bd-66c8f6e11312c-raCameraForm-ChildName" required />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raCameraForm-Dob" class="bd-66c8f6e11312c-control-label">Date of Birth:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="date" size="16" name="cf_815" value="" id="bd-66c8f6e11312c-raCameraForm-Dob" />
                    </div>
                </div>
                <h3>School Information:</h3>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raCameraForm-LocationAddress" class="bd-66c8f6e11312c-control-label"><span class="bd-66c8f6e11312c-required-label">*</span> School:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="text" name="LocationAddress" value="" id="bd-66c8f6e11312c-raCameraForm-LocationAddress" required />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raCameraForm-ActualAddress" class="bd-66c8f6e11312c-control-label"><span class="bd-66c8f6e11312c-required-label">*</span> Address:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <span>
                            <input type="text" name="ActualAddress" value="" id="bd-66c8f6e11312c-raCameraForm-ActualAddress" required />
                        </span>
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label class="bd-66c8f6e11312c-control-label"><span class="bd-66c8f6e11312c-required-label">*</span> City/State/Zip:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <span>
                            <input type="text" name="LocationCity" value="" id="bd-66c8f6e11312c-raCameraForm-LocationCity" aria-label="City" required />
                        </span>
                        <span>
                            <select name="LocationState" id="bd-66c8f6e11312c-raCameraForm-LocationState" aria-label="State" required>
                                <option value="AL">AL</option><option value="AK">AK</option><option value="AS">AS</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FM">FM</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MH">MH</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="MP">MP</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PW">PW</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VI">VI</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option>                            </select>
                        </span>
                        <span>
                            <input type="text" name="LocationZip" pattern="^[0-9]{5}(?:-[0-9]{4})?$" value="" id="bd-66c8f6e11312c-raCameraForm-LocationZip" aria-label="ZIP Code" required />
                        </span>
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raCameraForm-Grade" class="bd-66c8f6e11312c-control-label">Grade:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="text" name="cf_817" value="" id="bd-66c8f6e11312c-raCameraForm-Grade" />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raCameraForm-RoomNumber" class="bd-66c8f6e11312c-control-label">Classroom / Room Number:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="text" name="cf_813" value="" id="bd-66c8f6e11312c-raCameraForm-RoomNumber" />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raCameraForm-Teacher" class="bd-66c8f6e11312c-control-label">Teacher's name:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="text" name="cf_818" value="" id="bd-66c8f6e11312c-raCameraForm-Teacher" />
                    </div>
                </div>
            </div>
            <div>
                <button id="bd-66c8f6e11312c-raCameraSubmitBtn">Submit</button>
            </div>
            <hr />
            <ul>
                <li>This request is valid only for the school year indicated above. A new request must be submitted for any subsequent school years on a yearly basis.</li>
                <li>An acknowledgement letter will be sent to you within 5-7 days of receipt of the request.</li>
                <li>A Notice of acceptance or denial will be sent to you within ten (10) days.</li>
                <li>Please submit this form to the DDR utilizing the district's website/system.</li>
                <li>We will strive to install the camera within 30 days of the approved request under normal circumstances. The district will reach out to you to discuss requests made late in the school year for timelines and options</li>
            </ul>
        </form>
        <form id="bd-66c8f6e11312c-raInterpreterForm" accept-charset="utf-8" style="display:none;">
            <input type="hidden" name="SubmitterDifferent" value="yes" />
            <h3>Interpreting Service Request</h3>
            <div>
                <h4>Requester Information</h4>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raInterpreterForm-RequesterFirstName" class="bd-66c8f6e11312c-control-label"><span class="bd-66c8f6e11312c-required-label">*</span> Name:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="text" name="RequesterFirstName" value="" id="bd-66c8f6e11312c-raInterpreterForm-RequesterFirstName" placeholder="First Name" required />
                        <input type="text" name="RequesterLastName" value="" id="bd-66c8f6e11312c-raInterpreterForm-RequesterLastName" placeholder="Last Name" aria-label="Last Name" required />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raInterpreterForm-RequesterPhone" class="bd-66c8f6e11312c-control-label">Phone Number:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="tel" name="RequesterPhone" class="bd-66c8f6e11312c-poc" value="" id="bd-66c8f6e11312c-raInterpreterForm-RequesterPhone" required />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raInterpreterForm-RequesterEmail" class="bd-66c8f6e11312c-control-label">Email:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="email" name="RequesterEmail" class="bd-66c8f6e11312c-poc" value="" id="bd-66c8f6e11312c-raInterpreterForm-RequesterEmail" required />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <div class="bd-66c8f6e11312c-controls">
                        <span class="bd-66c8f6e11312c-required-label">*</span> Please provide either an email or phone number.
                    </div>
                </div>
                <h4>Contact Information</h4>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raInterpreterForm-SubmitterFirstName" class="bd-66c8f6e11312c-control-label"><span class="bd-66c8f6e11312c-required-label">*</span> Contact Person/Doctor:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="text" name="SubmitterFirstName" value="" id="bd-66c8f6e11312c-raInterpreterForm-SubmitterFirstName" placeholder="First Name" required />
                        <input type="text" name="SubmitterLastName" value="" id="bd-66c8f6e11312c-SubmitterLastName" placeholder="Last Name" aria-label="Last Name" required />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raInterpreterForm-SubmitterPhone" class="bd-66c8f6e11312c-control-label">Contact Phone:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="tel" name="SubmitterPhone" class="bd-66c8f6e11312c-poc" data-submitter="1" value="" id="bd-66c8f6e11312c-raInterpreterForm-SubmitterPhone" required />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raInterpreterForm-SubmitterEmail" class="bd-66c8f6e11312c-control-label">Contact Email:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="email" name="SubmitterEmail" class="bd-66c8f6e11312c-poc" data-submitter="1" value="" id="bd-66c8f6e11312c-raInterpreterForm-SubmitterEmail" required />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <div class="bd-66c8f6e11312c-controls">
                        <span class="bd-66c8f6e11312c-required-label">*</span> Please provide either an email or phone number.
                    </div>
                </div>
                <h4>Location Information</h4>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raInterpreterForm-LocationAddress" class="bd-66c8f6e11312c-control-label"><span class="bd-66c8f6e11312c-required-label">*</span> Location:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="text" name="LocationAddress" value="" id="bd-66c8f6e11312c-raInterpreterForm-LocationAddress" required />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raInterpreterForm-ActualAddress" class="bd-66c8f6e11312c-control-label"><span class="bd-66c8f6e11312c-required-label">*</span> Address:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <span>
                            <input type="text" name="ActualAddress" value="" id="bd-66c8f6e11312c-raInterpreterForm-ActualAddress" required />
                        </span>
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label class="bd-66c8f6e11312c-control-label"><span class="bd-66c8f6e11312c-required-label">*</span> City/State/Zip:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <span>
                            <input type="text" name="LocationCity" value="" id="bd-66c8f6e11312c-raInterpreterForm-LocationCity" aria-label="City" required />
                        </span>
                        <span>
                            <select name="LocationState" id="bd-66c8f6e11312c-raInterpreterForm-LocationState" aria-label="State" required>
                                <option value="AL">AL</option><option value="AK">AK</option><option value="AS">AS</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FM">FM</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MH">MH</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="MP">MP</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PW">PW</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VI">VI</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option>
                            </select>
                        </span>
                        <span>
                            <input type="text" name="LocationZip" pattern="^[0-9]{5}(?:-[0-9]{4})?$" value="" id="bd-66c8f6e11312c-raInterpreterForm-LocationZip" aria-label="ZIP Code" required />
                        </span>
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raInterpreterForm-FloorNumber" class="bd-66c8f6e11312c-control-label">Floor Number:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="text" name="cf_812" value="" id="bd-66c8f6e11312c-raInterpreterForm-FloorNumber" />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raInterpreterForm-RoomNumber" class="bd-66c8f6e11312c-control-label">Suite Number:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="text" name="cf_813" value="" id="bd-66c8f6e11312c-raInterpreterForm-RoomNumber" />
                    </div>
                </div>
                <h4>Client Information</h4>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raInterpreterForm-ChildName" class="bd-66c8f6e11312c-control-label">Client/Patient:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="text" name="cf_814" value="" id="bd-66c8f6e11312c-raInterpreterForm-ChildName" />
                    </div>
                </div>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raInterpreterForm-Dob" class="bd-66c8f6e11312c-control-label">Date of Birth:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <input type="date" size="16" name="cf_815" value="" id="bd-66c8f6e11312c-raInterpreterForm-Dob" />
                    </div>
                </div>
                <h4>Additional Information</h4>
                <div class="bd-66c8f6e11312c-control-group">
                    <label for="bd-66c8f6e11312c-raInterpreterForm-Notes" class="bd-66c8f6e11312c-control-label">Notes:</label>
                    <div class="bd-66c8f6e11312c-controls">
                        <textarea name="Notes" cols="40" rows="3" id="bd-66c8f6e11312c-raInterpreterForm-Notes"></textarea>
                    </div>
                </div>
            </div>
            <div>
                <button id="bd-66c8f6e11312c-raInterpreterSubmitBtn">Submit</button>
            </div>
        </form>
    `;
    document.getElementById("bd-grievance").innerHTML = grievanceTemplate;

    //add listeners
    document.getElementById("bd-66c8f6e11312c-RequestTypeID").addEventListener("change", swapGrievanceForms);
    document.getElementById("bd-66c8f6e11312c-grievanceFormSubmitBtn").addEventListener("click", submitGrievanceForm);
    document.getElementById("bd-66c8f6e11312c-raCameraSubmitBtn").addEventListener("click", submitGrievanceForm);
    document.getElementById("bd-66c8f6e11312c-raInterpreterSubmitBtn").addEventListener("click", submitGrievanceForm);
    document.getElementById("bd-66c8f6e11312c-SubmitterDifferent").addEventListener("change", submitterDifferent);
    const pocFields = document.querySelectorAll('.bd-66c8f6e11312c-poc');
    for (let i = 0; i < pocFields.length; i++) {
        pocFields[i].addEventListener('change', requesterPhoneEmailValidation);
    }
}
initGrievanceForm();

function submitGrievanceForm(e) {
    e.preventDefault();

    const selectedForm = document.getElementById("bd-66c8f6e11312c-RequestTypeID").value;
    let formId = false;

    if (selectedForm == 6 || selectedForm == 7) {
        formId = "grievanceForm";
    } else if (selectedForm == 8) {
        formId = "raCameraForm";
    } else if (selectedForm == 9) {
        formId = "raInterpreterForm";
    }

    if (!formId) {
        return;
    }

    const form = document.getElementById("bd-66c8f6e11312c-" + formId);
    form.classList.add('validated');
    if (form.checkValidity()) {
        const formFields = document.getElementById("bd-66c8f6e11312c-" + formId).elements;
        const selectedForm = document.getElementById("bd-66c8f6e11312c-RequestTypeID").value;
        let postObj = { RequestTypeID: selectedForm };
        let customFields = {};
        for (let i = 0; i < formFields.length; i++) {
            const item = formFields.item(i);
            if (item.name) {
                if (item.name.startsWith('cf_')) {
                    customFields[item.name.substring(3)] = item.value;
                } else {
                    postObj[item.name] = item.value;
                }
            }
        }
        if (Object.keys(customFields).length > 0) {
            postObj.ExtraData = { Custom: customFields };
        }

        //POST to BlueDAG API
        var xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    document.getElementById("bd-grievance").innerHTML = "Your grievance has been submitted.";
                } else {
                    let failureContent = "An error occurred while submitting your grievance. Please try again later. <button onclick=\"window.location.reload()\">Retry</button>";
                    document.getElementById("bd-grievance").innerHTML = failureContent;
                }
            }
        };
        xhr.open("POST", '"https:\/\/api.dev.bluedag.com\/js\/grievance\/submit?jsAuth=Bj0twoiOr3hGp0imzwFmYvVXoeK9SftCBwMBaYZR8Ww4Y4MgQAR8ZoZbw35kx1lp"');
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(postObj));

        document.getElementById("bd-grievance").innerHTML = "Submitting your grievance...";
    } else {
        console.log("Form validation failed. Ensure all required form fields are completed.");
    }
}

function submitterDifferent(e) {
    const isSubmitterDifferent = e.target.value;
    if (typeof isSubmitterDifferent !== "undefined") {
        let submitterFields = document.getElementById("bd-66c8f6e11312c-submitterDetails");
        if (typeof submitterFields !== "undefined") {
            const submitterEmail = document.getElementById("bd-66c8f6e11312c-SubmitterEmail");
            const submitterPhone = document.getElementById("bd-66c8f6e11312c-SubmitterPhone");
            const submitterFirstName = document.getElementById("bd-66c8f6e11312c-SubmitterFirstName");
            const submitterLastName = document.getElementById("bd-66c8f6e11312c-SubmitterLastName");
            if (isSubmitterDifferent == "yes") {
                submitterFields.style.display = "block";
                submitterFirstName.setAttribute('required', true);
                submitterLastName.setAttribute('required', true);
                submitterEmail.setAttribute('required', true);
                submitterPhone.setAttribute('required', true);
            } else {
                submitterFields.style.display = "none";
                submitterFirstName.removeAttribute('required');
                submitterLastName.removeAttribute('required');
                submitterEmail.removeAttribute('required');
                submitterPhone.removeAttribute('required');
            }
        }
    }
}

function requesterPhoneEmailValidation(e) {
    const type = e.target.dataset.submitter ? "Submitter" : "Requester";
    const formId = e.target.closest('form').getAttribute('id');
    const form = document.querySelector('#' + formId);
    const email = form.querySelector('[name="'+type+'Email"]');
    const phone = form.querySelector('[name="'+type+'Phone"]');

    if (email.value.trim()) {
        phone.removeAttribute('required');
        email.setAttribute('required', true);
    } else if (phone.value.trim()) {
        email.removeAttribute('required');
        phone.setAttribute('required', true);
    } else {
        email.setAttribute('required', true);
        phone.setAttribute('required', true);
    }
}

function swapGrievanceForms() {
    //get forms
    const grievanceForm = document.getElementById("bd-66c8f6e11312c-grievanceForm");
    const cameraForm = document.getElementById("bd-66c8f6e11312c-raCameraForm");
    const interpreterForm = document.getElementById("bd-66c8f6e11312c-raInterpreterForm");

    //get the value of the request type
    const selectedValue = document.getElementById("bd-66c8f6e11312c-RequestTypeID").value;

    if (typeof selectedValue === "undefined") {
        return;
    }

    grievanceForm.style.display = "none";
    cameraForm.style.display = "none";
    interpreterForm.style.display = "none";

    //show and hide the correct form
    if (selectedValue == 6 || selectedValue == 7) {
        document.getElementById("bd-66c8f6e11312c-grievanceFormTitle").innerHTML = selectedValue == 6 ? "Grievance" : "Reasonable Accommodation";
        grievanceForm.style.display = "block";
    } else if (selectedValue == 8) {
        cameraForm.style.display = "block";
    } else if (selectedValue == 9) {
        interpreterForm.style.display = "block";
    }
}
})();