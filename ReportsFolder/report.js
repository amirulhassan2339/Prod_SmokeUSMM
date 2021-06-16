$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/SoapNote/SoapNotesCreate_AddHRA.feature");
formatter.feature({
  "name": "Soap Note Creation from Schedule flow",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to patient grid",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_PatientGrid.I_navigate_to_patient_grid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify deleting Scheduled Appointment",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke_USMM_DelateScheduleAppointment"
    }
  ]
});
formatter.step({
  "name": "I click on schedule tab",
  "keyword": "When "
});
formatter.match({
  "location": "SD_SoapNotes.I_click_on_scheduletab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see already scheduled appointment",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_SoapNotes.I_should_see_Already_Added_Appointment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on three dots",
  "keyword": "When "
});
formatter.match({
  "location": "SD_SoapNotes.I_Click_Three_Dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on delete appointment",
  "keyword": "And "
});
formatter.match({
  "location": "SD_SoapNotes.I_Click_delete_appointmentBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see delete appointment message",
  "keyword": "And "
});
formatter.match({
  "location": "SD_SoapNotes.I_should_see_appointment_DeleteMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});