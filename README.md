# Minimal.Js
many features that can be implemented with a simple script
<img width="631" alt="image" src="https://user-images.githubusercontent.com/62328337/112219125-e4301600-8c24-11eb-905a-2226e8b69898.png">

  <script src="minimal.js"></script>

## Minimal.Js
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>FIRST_ORDER()</td>
      <td>sort that gets the best path</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>SECOND_ORDER()</td>
      <td>sorting that obtains the best route taking into account the possibility of blocking with a priority the points in the map (which will not be sorted)</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>LINK_CREATOR()</td>
      <td>create a link of the created map, to be opened directly in google maps</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>GETDIST(LAT1, LON1, LAT2, LON2)</td>
      <td>indispensable function for sorting (calculates the distance from point to point starting from the latitude and longitude of two points)</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>GETDISTKM(LAT1, LON1, LAT2, LON2)</td>
      <td>alternative to distance calculation (the result is returned in kilomentres)</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>ADD_ITEM(LAT,LON)</td>
      <td>insertion of a stage within the route</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>GO_TO(URL)</td>
      <td>opens the link provided in a new browser tab</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>SEND_EMAIL(EMAIL, SUBJECT, BODY)</td>
      <td>send an email via the default app of the device (passing email, subject and body)

N.B. also implements the script "https://smtpjs.com/v3/smtp.js"</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>READER_FILE()</td>
      <td>reading a file</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>WRITE_FILE(TEXT)</td>
      <td>writing a file</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>DOCUMENT.ONKEYUP = FUNCTION(E)</td>
      <td>keyboard combokey management</td>
    </tr>
  </tbody>
</table>

<footer>© Minimal.Js</footer>
