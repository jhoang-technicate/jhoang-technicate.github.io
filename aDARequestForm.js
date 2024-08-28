function initGrievanceForm() {
    //build Grievance form
    let grievanceTemplate = `
        <style>
            .bd-66cf5ada3b4aa-control {
                margin-top: 10px;
            }
            .bd-66cf5ada3b4aa-control-label,
            .bd-66cf5ada3b4aa-control-label-inline {
                font-weight: bold;
            }
            .bd-66cf5ada3b4aa-control-label-inline {
                width: 140px;
                float: left;
            }
            #bd-66cf5ada3b4aa-grievanceForm.validated input:invalid,
            #bd-66cf5ada3b4aa-grievanceForm.validated select:invalid,
            #bd-66cf5ada3b4aa-grievanceForm.validated textarea:invalid,
            .bd-66cf5ada3b4aa-invalidField {
                border: 1px solid red;
            }
            .bd-66cf5ada3b4aa-required-label {
                color: red;
            }
            .bd-66cf5ada3b4aa-table {
                border-collapse: collapse;
                width: 100%;
            }
            .bd-66cf5ada3b4aa-table th,
            .bd-66cf5ada3b4aa-table td {
                padding: 8px;
                text-align: left;
            }
            .bd-66cf5ada3b4aa-table td {
                border: 1px solid black;
            }
            #bd-66cf5ada3b4aa-grievanceForm h4 {
                text-align: center;
            }
            #bd-66cf5ada3b4aa-grievance-type-options {
                margin-left: 10px;
                padding-top: 5px;
                padding-bottom: 5px;
            }
            #bd-66cf5ada3b4aa-grievance-type-container {
                border: 1px solid black;
                padding: 8px;
            }
            #bd-66cf5ada3b4aa-grievanceFormSubmitContainer {
                margin-top: 10px;
                text-align: center;
            }
            #bd-66cf5ada3b4aa-grievanceFormSubmitBtn {
                padding: 8px;
            }
            #bd-66cf5ada3b4aa-grievanceForm textarea {
                width: 100%;
            }
            #bd-66cf5ada3b4aa-grievanceForm select{
                height: 21px;
            }
        </style>
        <form id="bd-66cf5ada3b4aa-grievanceForm" accept-charset="utf-8">
            <div id="bd-66cf5ada3b4aa-grievance-type-container">
                <div class="bd-66cf5ada3b4aa-control-label">Type of Grievance (select any that apply):</div>
                <div id="bd-66cf5ada3b4aa-grievance-type-options">
                    <div>
                        <label><input type="checkbox" name="GrievanceType[]" value="Accommodation Request" /> Accommodation Request</label>
                    </div>
                    <div>
                        <label><input type="checkbox" name="GrievanceType[]" value="Program/Service" /> Program/Service</label>
                    </div>
                    <div>
                        <label><input type="checkbox" name="GrievanceType[]" value="Facility Accessibility" /> Facility Accessibility</label>
                    </div>
                    <div>
                        <label><input type="checkbox" name="GrievanceType[]" value="Other" /> Other:</label>
                        <input type="text" name="GrievanceTypeOther" value="" />
                    </div>
                </div>
                <div>
                    <label for="bd-66cf5ada3b4aa-cf_993" class="bd-66cf5ada3b4aa-control-label">Department/Program:</label>
                    <input type="text" name="cf_993" value="" id="bd-66cf5ada3b4aa-cf_993" required />
                </div>
            </div>
            <div>
                <h4>CONTACT INFORMATION</h4>
                <table class="bd-66cf5ada3b4aa-table">
                    <tr>
                        <th>Reporting Individual</th>
                        <th>On Behalf of:<br><sub>(if different than Reporting Individual)</sub></th>
                    </tr>
                    <tr>
                        <td>
                            <div><label>Full Name:</label></div>
                            <div>
                                <input type="text" name="RequesterFirstName" value="" id="bd-66cf5ada3b4aa-RequesterFirstName" placeholder="First Name" aria-label="Reporting Individual First Name" required />
                                <input type="text" name="RequesterLastName" value="" id="bd-66cf5ada3b4aa-RequesterLastName" placeholder="Last Name" aria-label="Reporting Individual Last Name" required />
                            </div>
                        </td>
                        <td>
                            <div><label>Full Name:</label></div>
                            <div>
                                <input type="text" name="SubmitterFirstName" value="" id="bd-66cf5ada3b4aa-SubmitterFirstName" placeholder="First Name" aria-label="On Behalf of First Name" />
                                <input type="text" name="SubmitterLastName" value="" id="bd-66cf5ada3b4aa-SubmitterLastName" placeholder="Last Name" aria-label="On Behalf of Last Name" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><label>Address:</label></div>
                            <div><input type="text" name="RequesterAddress" value="" id="bd-66cf5ada3b4aa-RequesterAddress" placeholder="Address" aria-label="Reporting Individual Address" required /></div>
                        </td>
                        <td>
                            <div><label>Address:</label></div>
                            <div><input type="text" name="SubmitterAddress" value="" id="bd-66cf5ada3b4aa-SubmitterAddress" placeholder="Address" aria-label="On Behalf of Address" /></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><label>City, State, and Zip Code:</label></div>
                            <div>
                                <input type="text" name="RequesterCity" value="" id="bd-66cf5ada3b4aa-RequesterCity" placeholder="City" aria-label="Reporting Individual City" required />
                                <select name="RequesterState" id="bd-66cf5ada3b4aa-RequesterState" aria-label="Reporting Individual State" required>
                                                                    <option value="AL">AL</option>
                                                                    <option value="AK">AK</option>
                                                                    <option value="AS">AS</option>
                                                                    <option value="AZ">AZ</option>
                                                                    <option value="AR">AR</option>
                                                                    <option value="CA">CA</option>
                                                                    <option value="CO">CO</option>
                                                                    <option value="CT">CT</option>
                                                                    <option value="DE">DE</option>
                                                                    <option value="DC">DC</option>
                                                                    <option value="FM">FM</option>
                                                                    <option value="FL">FL</option>
                                                                    <option value="GA">GA</option>
                                                                    <option value="GU">GU</option>
                                                                    <option value="HI">HI</option>
                                                                    <option value="ID">ID</option>
                                                                    <option value="IL">IL</option>
                                                                    <option value="IN">IN</option>
                                                                    <option value="IA">IA</option>
                                                                    <option value="KS">KS</option>
                                                                    <option value="KY">KY</option>
                                                                    <option value="LA">LA</option>
                                                                    <option value="ME">ME</option>
                                                                    <option value="MH">MH</option>
                                                                    <option value="MD">MD</option>
                                                                    <option value="MA">MA</option>
                                                                    <option value="MI">MI</option>
                                                                    <option value="MN">MN</option>
                                                                    <option value="MS">MS</option>
                                                                    <option value="MO">MO</option>
                                                                    <option value="MT">MT</option>
                                                                    <option value="NE">NE</option>
                                                                    <option value="NV">NV</option>
                                                                    <option value="NH">NH</option>
                                                                    <option value="NJ">NJ</option>
                                                                    <option value="NM">NM</option>
                                                                    <option value="NY">NY</option>
                                                                    <option value="NC">NC</option>
                                                                    <option value="ND">ND</option>
                                                                    <option value="MP">MP</option>
                                                                    <option value="OH">OH</option>
                                                                    <option value="OK">OK</option>
                                                                    <option value="OR">OR</option>
                                                                    <option value="PW">PW</option>
                                                                    <option value="PA">PA</option>
                                                                    <option value="PR">PR</option>
                                                                    <option value="RI">RI</option>
                                                                    <option value="SC">SC</option>
                                                                    <option value="SD">SD</option>
                                                                    <option value="TN">TN</option>
                                                                    <option value="TX">TX</option>
                                                                    <option value="UT">UT</option>
                                                                    <option value="VT">VT</option>
                                                                    <option value="VI">VI</option>
                                                                    <option value="VA" selected="selected">VA</option>
                                                                    <option value="WA">WA</option>
                                                                    <option value="WV">WV</option>
                                                                    <option value="WI">WI</option>
                                                                    <option value="WY">WY</option>
                                                                </select>
                                <input type="text" name="RequesterZip" value="" id="bd-66cf5ada3b4aa-RequesterZip" placeholder="Zip Code" aria-label="Reporting Individual Zip Code" required />
                            </div>
                        </td>
                        <td>
                            <div><label>City, State, and Zip Code:</label></div>
                            <div>
                                <input type="text" name="SubmitterCity" value="" id="bd-66cf5ada3b4aa-SubmitterCity" placeholder="City" aria-label="On Behalf of City" />
                                <select name="SubmitterState" id="bd-66cf5ada3b4aa-SubmitterState" aria-label="On Behalf of State">
                                    <option value="">State</option>
                                                                        <option value="AL">AL</option>
                                                                        <option value="AK">AK</option>
                                                                        <option value="AS">AS</option>
                                                                        <option value="AZ">AZ</option>
                                                                        <option value="AR">AR</option>
                                                                        <option value="CA">CA</option>
                                                                        <option value="CO">CO</option>
                                                                        <option value="CT">CT</option>
                                                                        <option value="DE">DE</option>
                                                                        <option value="DC">DC</option>
                                                                        <option value="FM">FM</option>
                                                                        <option value="FL">FL</option>
                                                                        <option value="GA">GA</option>
                                                                        <option value="GU">GU</option>
                                                                        <option value="HI">HI</option>
                                                                        <option value="ID">ID</option>
                                                                        <option value="IL">IL</option>
                                                                        <option value="IN">IN</option>
                                                                        <option value="IA">IA</option>
                                                                        <option value="KS">KS</option>
                                                                        <option value="KY">KY</option>
                                                                        <option value="LA">LA</option>
                                                                        <option value="ME">ME</option>
                                                                        <option value="MH">MH</option>
                                                                        <option value="MD">MD</option>
                                                                        <option value="MA">MA</option>
                                                                        <option value="MI">MI</option>
                                                                        <option value="MN">MN</option>
                                                                        <option value="MS">MS</option>
                                                                        <option value="MO">MO</option>
                                                                        <option value="MT">MT</option>
                                                                        <option value="NE">NE</option>
                                                                        <option value="NV">NV</option>
                                                                        <option value="NH">NH</option>
                                                                        <option value="NJ">NJ</option>
                                                                        <option value="NM">NM</option>
                                                                        <option value="NY">NY</option>
                                                                        <option value="NC">NC</option>
                                                                        <option value="ND">ND</option>
                                                                        <option value="MP">MP</option>
                                                                        <option value="OH">OH</option>
                                                                        <option value="OK">OK</option>
                                                                        <option value="OR">OR</option>
                                                                        <option value="PW">PW</option>
                                                                        <option value="PA">PA</option>
                                                                        <option value="PR">PR</option>
                                                                        <option value="RI">RI</option>
                                                                        <option value="SC">SC</option>
                                                                        <option value="SD">SD</option>
                                                                        <option value="TN">TN</option>
                                                                        <option value="TX">TX</option>
                                                                        <option value="UT">UT</option>
                                                                        <option value="VT">VT</option>
                                                                        <option value="VI">VI</option>
                                                                        <option value="VA">VA</option>
                                                                        <option value="WA">WA</option>
                                                                        <option value="WV">WV</option>
                                                                        <option value="WI">WI</option>
                                                                        <option value="WY">WY</option>
                                                                    </select>
                                <input type="text" name="SubmitterZip" value="" id="bd-66cf5ada3b4aa-SubmitterZip" placeholder="Zip Code" aria-label="On Behalf of Zip Code" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><label>Phone:</label></div>
                            <div><input type="tel" name="RequesterPhone" value="" class="bd-66cf5ada3b4aa-poc" id="bd-66cf5ada3b4aa-RequesterPhone" placeholder="Phone Number" aria-label="Reporting Individual Phone" required /></div>
                        </td>
                        <td>
                            <div><label>Phone:</label></div>
                            <div><input type="tel" name="SubmitterPhone" value="" class="bd-66cf5ada3b4aa-poc" id="bd-66cf5ada3b4aa-SubmitterPhone" placeholder="Phone Number" aria-label="On Behalf of Phone" data-submitter="1" /></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><label>E-mail:</label></div>
                            <div><input type="email" name="RequesterEmail" value="" class="bd-66cf5ada3b4aa-poc" id="bd-66cf5ada3b4aa-RequesterEmail" placeholder="Email" aria-label="Reporting Individual Email" required /></div>
                        </td>
                        <td>
                            <div><label>E-mail:</label></div>
                            <div><input type="email" name="SubmitterEmail" value="" class="bd-66cf5ada3b4aa-poc" id="bd-66cf5ada3b4aa-SubmitterEmail" placeholder="Email" aria-label="On Behalf of Email" data-submitter="1" /></div>
                        </td>
                    </tr>
                </table>

                <h4>COMPLAINT/INCIDENT DETAILS</h4>
                <div class="bd-66cf5ada3b4aa-control">
                    <label class="bd-66cf5ada3b4aa-control-label-inline">Date of Incident:</label>
                    <input type="date" name="IncidentDate" id="bd-66cf5ada3b4aa-IncidentDate" size="16" required />
                </div>
                <div class="bd-66cf5ada3b4aa-control">
                    <label for="bd-66cf5ada3b4aa-ActualAddress" class="bd-66cf5ada3b4aa-control-label-inline">Address:</label>
                    <input type="text" name="ActualAddress" value="" id="bd-66cf5ada3b4aa-ActualAddress" required />
                </div>
                <div class="bd-66cf5ada3b4aa-control">
                    <div>
                        <label class="bd-66cf5ada3b4aa-control-label-inline">City/State/Zip:</label>
                        <span>
                            <input type="text" name="LocationCity" value="" id="bd-66cf5ada3b4aa-LocationCity" aria-label="City" required />
                        </span>
                        <span>
                            <select name="LocationState" id="bd-66cf5ada3b4aa-LocationState" aria-label="State" required>
                                <option value="VA">VA</option>
                            </select>
                        </span>
                        <span>
                            <input type="text" name="LocationZip" pattern="^[0-9]{5}(?:-[0-9]{4})?$" value="" id="bd-66cf5ada3b4aa-LocationZip" aria-label="ZIP Code" required />
                        </span>
                    </div>
                </div>
                <div class="bd-66cf5ada3b4aa-control">
                    <div><label for="bd-66cf5ada3b4aa-Description" class="bd-66cf5ada3b4aa-control-label">Describe the complaint/incident:</label></div>
                    <div><textarea name="cf_994" cols="40" rows="3" id="bd-66cf5ada3b4aa-Description" required></textarea><div>
                </div>
                <div class="bd-66cf5ada3b4aa-control">
                    <div><label for="bd-66cf5ada3b4aa-PriorResolution" class="bd-66cf5ada3b4aa-control-label">Have efforts been made to resolve this complaint through the Department in which the alleged discrimination took place? If yes, please describe the efforts that have been made:</label></div>
                    <div>
                        <textarea name="cf_995" cols="40" rows="4" id="bd-66cf5ada3b4aa-PriorResolution" required></textarea>
                    </div>
                </div>
                <div class="bd-66cf5ada3b4aa-control">
                    <div><label for="bd-66cf5ada3b4aa-RemedySought" class="bd-66cf5ada3b4aa-control-label">Remedy Sought:</label></div>
                    <div>
                        <textarea name="cf_996" cols="40" rows="3" id="bd-66cf5ada3b4aa-RemedySought" required></textarea>
                    </div>
                </div>
            </div>
            <div id="bd-66cf5ada3b4aa-grievanceFormSubmitContainer">
                <button id="bd-66cf5ada3b4aa-grievanceFormSubmitBtn">Submit</button>
            </div>
        </form>
    `;
    document.getElementById("bd-grievance").innerHTML = grievanceTemplate;

    document.getElementById("bd-66cf5ada3b4aa-grievanceFormSubmitBtn").addEventListener("click", submitGrievanceForm);
    const pocFields = document.querySelectorAll('.bd-66cf5ada3b4aa-poc');
    for (let i = 0; i < pocFields.length; i++) {
        pocFields[i].addEventListener('change', requesterPhoneEmailValidation);
    }
}
initGrievanceForm();

function submitGrievanceForm(e) {
    e.preventDefault();

    let submitterDifferent = submitterDifferentCheck();

    let form = document.getElementById("bd-66cf5ada3b4aa-grievanceForm");
    form.classList.add('validated');

    if (grievanceTypeValidation() && form.checkValidity()) {
        const formFields = document.getElementById("bd-66cf5ada3b4aa-grievanceForm").elements;
        let postObj = {};
        let customFields = {};
        let grievanceTypes = [];
        for (let i = 0; i < formFields.length; i++) {
            const item = formFields.item(i);
            if (item.name) {
                if (item.name.startsWith('cf_')) {
                    customFields[item.name.substring(3)] = item.value;
                } else if (item.type === 'radio') {
                    if (item.checked) {
                        postObj[item.name] = item.value;
                    }
                } else if (item.type === 'checkbox' && item.name === 'GrievanceType[]') {
                    if (item.checked) {
                        grievanceTypes.push(item.value);
                    }
                } else {
                    postObj[item.name] = item.value;
                }
            }
        }

        if (!postObj.SubmitterCity) {
            postObj.SubmitterState = "";
        }

        //Handle Grievance types custom field
        if (grievanceTypes.length > 0) {
            let grievanceTypesString = grievanceTypes.join(', ');
            if (postObj.GrievanceTypeOther) {
                grievanceTypesString += `: ${postObj.GrievanceTypeOther}`;
            }
            customFields[992] = grievanceTypesString;
        }
        delete postObj.GrievanceTypeOther;

        //Add Additional required fields
        postObj.RequestTypeID = '3';
        postObj.ADAGrievance = '-1';
        postObj.LocationAddress = 'General Location';
        postObj.SubmitterDifferent = submitterDifferent;
        postObj.ExtraData = { Custom: customFields};
        if (77) {
            postObj.CompanyID = '77';
        }

        // If both "Reporting Individual" and "On Behalf Of" are filled out,
        // set the Requester field to the "On Behalf Of" data and the Submitter field to the "Reporting Individual" data.
        if (submitterDifferent == "yes") {
            let tempFirstName = postObj.RequesterFirstName;
            let tempLastName = postObj.RequesterLastName;
            let tempAddress = postObj.RequesterAddress;
            let tempCity = postObj.RequesterCity;
            let tempState = postObj.RequesterState;
            let tempZip = postObj.RequesterZip;
            let tempPhone = postObj.RequesterPhone;
            let tempEmail = postObj.RequesterEmail;

            postObj.RequesterFirstName = postObj.SubmitterFirstName;
            postObj.RequesterLastName = postObj.SubmitterLastName;
            postObj.RequesterAddress = postObj.SubmitterAddress;
            postObj.RequesterCity = postObj.SubmitterCity;
            postObj.RequesterState = postObj.SubmitterState;
            postObj.RequesterZip = postObj.SubmitterZip;
            postObj.RequesterPhone = postObj.SubmitterPhone;
            postObj.RequesterEmail = postObj.SubmitterEmail;

            postObj.SubmitterFirstName = tempFirstName;
            postObj.SubmitterLastName = tempLastName;
            postObj.SubmitterAddress = tempAddress;
            postObj.SubmitterCity = tempCity;
            postObj.SubmitterState = tempState;
            postObj.SubmitterZip = tempZip;
            postObj.SubmitterPhone = tempPhone;
            postObj.SubmitterEmail = tempEmail;
        }

        //POST to BlueDAG API
        var xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                let failureContent = "An error occurred while submitting your grievance. Please try again later. <button onclick=\"window.location.reload()\">Retry</button>";
                if (this.status == 200) {
                    if (this.response.success) {
                        document.getElementById("bd-grievance").innerHTML = "            </pre>
                <style>
            .errorTable,
            .debugTable {
                font-family: monospace;
                width: 100%;
                line-height: 1.5em;
            }

            .errorTable {
                color: white;
                background-color: black;
                margin-bottom: 15px;
            }

            .debugTable {
                color: lightgray;
                background-color: #4949b3;
            }

            .errorTable th,
            .debugTable th {
                color: yellow;
                background-color: maroon;
                font-size: 1.2em;
            }

            .debugTable tr {
                border-top: 1px solid yellow;
            }

            .errorField {
                text-align: right;
            }

            .errorValue {
                text-align: left;
                padding-left: 15px;
            }

            .errorContainer {
                border: 1px dashed gray;
                padding: 5px;
            }
        </style>
        <div id="container" class="errorContainer">
            <h1>500 Server error</h1>
            <p>Oops! Something went wrong. We're working on it.</p>
            <p class="errorOut">Error code: 0x13</p>
            <div class=" errorSpacing">
                <table class="errorTable">
                    <thead>
                        <th class="errorValue">Type:</th>
                        <th class="errorValue">Message:</th>
                        <th class="errorField">File:</th>
                        <th class="errorValue">Line:</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="errorValue">Warning</td>
                            <td class="errorValue">Array to string conversion</td>
                            <td class="errorField">custom/loudounWebform.php</td>
                            <td class="errorValue">332</td>
                        </tr>
                    </tbody>
                </table>
                <table class="debugTable">
                    <thead>
                        <th class="errorValue">#</th>
                        <th class="errorValue">Call</th>
                        <th class="errorValue">File</th>
                        <th class="errorValue">Line</th>
                    </thead>
                                                <tr>
                                <td class="errorValue">1</td>
                                <td class="errorValue">_error_handler(integer,string,string,integer)</td>
                                <td class="errorValue">custom/loudounWebform.php</td>
                                <td class="errorValue">ln 332</td>
                            </tr>
                                                    <tr>
                                <td class="errorValue">2</td>
                                <td class="errorValue">include(string)</td>
                                <td class="errorValue">core/Loader.php</td>
                                <td class="errorValue">ln 969</td>
                            </tr>
                                                    <tr>
                                <td class="errorValue">3</td>
                                <td class="errorValue">CI_Loader->_ci_load(array)</td>
                                <td class="errorValue">core/TS_Loader.php</td>
                                <td class="errorValue">ln 26</td>
                            </tr>
                                                    <tr>
                                <td class="errorValue">4</td>
                                <td class="errorValue">TS_Loader->view(string,array,boolean)</td>
                                <td class="errorValue">controllers/Client.php</td>
                                <td class="errorValue">ln 1872</td>
                            </tr>
                                                    <tr>
                                <td class="errorValue">5</td>
                                <td class="errorValue">Client->loudounGrievanceForm(array)</td>
                                <td class="errorValue">controllers/Client.php</td>
                                <td class="errorValue">ln 1632</td>
                            </tr>
                                                    <tr>
                                <td class="errorValue">6</td>
                                <td class="errorValue">Client->getExternalIntakeFile(array)</td>
                                <td class="errorValue">controllers/Client.php</td>
                                <td class="errorValue">ln 1540</td>
                            </tr>
                                                    <tr>
                                <td class="errorValue">7</td>
                                <td class="errorValue">Client->getCustomExternalIntakeFile(string)</td>
                                <td class="errorValue">core/CodeIgniter.php</td>
                                <td class="errorValue">ln 533</td>
                            </tr>
                                                    <tr>
                                <td class="errorValue">8</td>
                                <td class="errorValue">require_once(string)</td>
                                <td class="errorValue">bluedag.dev/index.php</td>
                                <td class="errorValue">ln 62</td>
                            </tr>
                                        </table>
            </div>
        </div>
                <pre>
Array";
                                            } else {
                        console.log(this.response.message);
                        document.getElementById("bd-grievance").innerHTML = failureContent;
                    }
                } else {
                    document.getElementById("bd-grievance").innerHTML = failureContent;
                }
            }
        };
        xhr.open("POST", "https:\/\/api.dev.bluedag.com\/js\/grievance\/submit?jsAuth=phLOUekoMdL1McMaYbFWjYv64aUiMegUUosbMwDvYykALLp6ZTuiWAahciSXxlML");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(postObj));

        document.getElementById("bd-grievance").innerHTML = "Submitting your grievance...";
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

function submitterDifferentCheck() {
    let isSubmitterDifferent = "no";
    let submitterFields = document.getElementById("bd-66cf5ada3b4aa-submitterDetails");
    let submitterFirstNameField = document.getElementById("bd-66cf5ada3b4aa-SubmitterFirstName");
    let submitterLastNameField = document.getElementById("bd-66cf5ada3b4aa-SubmitterLastName");
    let submitterEmail = document.getElementById("bd-66cf5ada3b4aa-SubmitterEmail");
    let submitterPhone = document.getElementById("bd-66cf5ada3b4aa-SubmitterPhone");

    if (submitterFirstNameField && submitterFirstNameField.value) {
        if (submitterFirstNameField !== null) submitterFirstNameField.required = true;
        if (submitterLastNameField !== null) submitterLastNameField.required = true;
        if (submitterEmail !== null) {
            submitterEmail.required = false;
        }
        if (submitterPhone !== null) {
            submitterPhone.required = false;
        }
        if (submitterEmail !== null && !submitterEmail.value && submitterPhone !== null && !submitterPhone.value) {
            submitterEmail.required = true;
            submitterPhone.required = true;
        }
        isSubmitterDifferent = "yes"
    } else {
        if (submitterFirstNameField !== null) submitterFirstNameField.required = false;
        if (submitterLastNameField !== null) submitterLastNameField.required = false;
        if (submitterEmail !== null) submitterEmail.required = false;
        if (submitterPhone !== null) submitterPhone.required = false;
    }

    return isSubmitterDifferent;
}

function grievanceTypeValidation() {
    let validated = false;
    let checkboxes = document.querySelectorAll('input[name="GrievanceType[]"]');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            validated = true;
            break;
        }
    }
    let grievanceTypeOptions = document.getElementById("bd-66cf5ada3b4aa-grievance-type-options");
    if (grievanceTypeOptions) {
        if (!validated) {
            grievanceTypeOptions.classList.add('bd-66cf5ada3b4aa-invalidField');
        } else {
            grievanceTypeOptions.classList.remove('bd-66cf5ada3b4aa-invalidField');
        }
    }

    let otherCheckbox = document.querySelector('input[name="GrievanceType[]"][value="Other"]');
    let otherInput = document.querySelector('input[name="GrievanceTypeOther"]');
    if (otherCheckbox && otherInput) {
        if (otherCheckbox.checked) {
        otherInput.setAttribute('required', 'required');
        } else {
            otherInput.removeAttribute('required');
        }
    }

    return validated;
}
