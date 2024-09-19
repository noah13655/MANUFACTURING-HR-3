import React from 'react'

const AttendanceInfo = () => {
  return (
    <div>
        <table>
          <thead>
          <tr>
                <th>Lastname</th>
                <th>Firstname</th>
                <th>Date</th>
                <th>Time-in</th>
                <th>Time-out</th>
                <th>Overtime</th>
                <th>Total work Hours</th>
                <th>Status</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                    <td>Borlagdatan</td>
                    <td>Johnlloyd</td>
                    <td>9-19-2024</td>
                    <td>8:00 AM</td>
                    <td>5:00PM</td>
                    <td>2:04</td>
                    <td>10 hours and 4 mins</td>
                    <td>Present</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default AttendanceInfo