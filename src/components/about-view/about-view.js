import React from "react";
import "./about-view.css";

function AboutView() {
  return (
    <div class="profile">
      <h1 id="about">About me</h1>
      <p class="profile__about">
        I come from Italy and I have a background in Environmental Biology
        research and data analysis.
      </p>
      <p class="profile__about">
        I enjoy hiking, cooking, travelling and learning new languages,
        including programming languages of course!
      </p>
      <table class="profile__about">
        <thead>
          <tr>
            <th>Skills</th>
            <th>Years of Experience</th>
            <th>Level of Expertise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>R</td>
            <td>3</td>
            <td>Advanced</td>
          </tr>
          <tr>
            <td>QGIS</td>
            <td>2</td>
            <td>Intermediate</td>
          </tr>
          <tr>
            <td>MS Office</td>
            <td>3</td>
            <td>Advanced</td>
          </tr>
        </tbody>
      </table>
      <div class="button-parent">
        <a href="#" class="button" download>
          Check my Linkedin
        </a>
      </div>
    </div>
  );
}

export default AboutView;
