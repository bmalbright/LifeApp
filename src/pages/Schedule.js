import React from "react";
import $ from "jquery";
// import Moment from "react-moment";

import { Container, Col, Row } from "react-bootstrap";

import "../css/App.css";

// uses moment.js to set the day and put it at the top of the page
// var day = moment().format('MMMM Do YYYY');
// $("#currentDay").text(day)

// when the submit button is clicked, the task the user inputed and stores it in local storage
$(".saveBtn").click(function () {
  var task = $(this).siblings(".description").val();
  var id = $(this).parent().attr("id");

  localStorage.setItem(id, task);
});

//takes the task from local storage and shows it on the page.
$(".time-block").each(function () {
  var timeId = $(this).attr("id");
  console.log(timeId);

  var localTask = localStorage.getItem(timeId);
  $(this).children(".description").val(localTask);

  //this section changes the background color of the time blocks as the day progresses.
  //  var currentHour = moment().hour();
  let currentHour = 12;

  console.log(currentHour);

  if (currentHour < timeId) {
    $(this).addClass("future");
  } else if (currentHour == timeId) {
    $(this).addClass("present");
  } else if (currentHour > timeId) {
    $(this).addClass("past");
  }
});

export default function Schedule() {
  return (
    <div className="schedule">
      <Row>
        <Col>
          <header class="jumbotron">
            <h1 class="display-3">Day Scheduler</h1>
            <p class="lead">A simple calendar app for scheduling your day</p>
            <p id="currentDay" class="lead"></p>
            <p id="currentTime" class="lead"></p>
          </header>
        </Col>
      </Row>
      <Container class="container">
        <Row></Row>
        {/* <!-- Timeblocks go here --> */}
        <div id="7" class="row time-block">
          <div class="hour col-1">7am</div>
          <textarea class="description col-10"></textarea>
          <button class="saveBtn col-1">Submit</button>
        </div>
        <div id="8" class="row time-block">
          <div class="hour col-1">8am</div>
          <textarea class="description col-10"></textarea>
          <button class="saveBtn col-1">Submit</button>
        </div>
        <div id="9" class="row time-block">
          <div class="hour col-1">9am</div>
          <textarea class="description col-10"></textarea>
          <button class="saveBtn col-1">Submit</button>
        </div>
        <div id="10" class="row time-block">
          <div class="hour col-1">10am</div>
          <textarea class="description col-10"></textarea>
          <button class="saveBtn col-1">Submit</button>
        </div>
        <div id="11" class="row time-block">
          <div class="hour col-1">11am</div>
          <textarea class="description col-10"></textarea>
          <button class="saveBtn col-1">Submit</button>
        </div>
        <div id="12" class="row time-block">
          <div class="hour col-1">12pm</div>
          <textarea class="description col-10"></textarea>
          <button class="saveBtn col-1">Submit</button>
        </div>
        <div id="13" class="row time-block">
          <div class="hour col-1">1pm</div>
          <textarea class="description col-10"></textarea>
          <button class="saveBtn col-1">Submit</button>
        </div>
        <div id="14" class="row time-block">
          <div class="hour col-1">2pm</div>
          <textarea class="description col-10"></textarea>
          <button class="saveBtn col-1">Submit</button>
        </div>
        <div id="15" class="row time-block">
          <div class="hour col-1">3pm</div>
          <textarea class="description col-10"></textarea>
          <button class="saveBtn col-1">Submit</button>
        </div>
        <div id="16" class="row time-block">
          <div class="hour col-1">4pm</div>
          <textarea class="description col-10"></textarea>
          <button class="saveBtn col-1">Submit</button>
        </div>
        <div id="17" class="row time-block">
          <div class="hour col-1">5pm</div>
          <textarea class="description col-10"></textarea>
          <button class="saveBtn col-1">Submit</button>
        </div>
        <div id="18" class="row time-block">
          <div class="hour col-1">6pm</div>
          <textarea class="description col-10"></textarea>
          <button class="saveBtn col-1">Submit</button>
        </div>
        <div id="19" class="row time-block">
          <div class="hour col-1">7pm</div>
          <textarea class="description col-10"></textarea>
          <button class="saveBtn col-1">Submit</button>
        </div>
        <div id="20" class="row time-block">
          <div class="hour col-1">8pm</div>
          <textarea class="description col-10"></textarea>
          <button class="saveBtn col-1">Submit</button>
        </div>
        <div id="21" class="row time-block">
          <div class="hour col-1">9pm</div>
          <textarea class="description col-10"></textarea>
          <button class="saveBtn col-1">Submit</button>
        </div>
        <br />
        <br />
      </Container>
    </div>
  );
}
