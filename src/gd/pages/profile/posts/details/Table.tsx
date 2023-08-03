import React from "react";

interface OrderDetailsTableProps {
  data: Record<string, any>;
}

const Table: React.FC<OrderDetailsTableProps> = ({ data }) => {
  console.log("dataTable", data);

  return (
    <div className="overflow-x-auto max-w-full">
      <table style={{ borderSpacing: "2rem", borderCollapse: "separate" }}>
        <tbody className="text-gray-900">
          <tr>
            <td>Total Donations</td>
            <td>{data.total_donations}</td>
          </tr>
          <tr>
            <td>Application For</td>
            <td>{data.application_for}</td>
          </tr>
          <tr>
            <td>Mode</td>
            <td>{data.mode}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>{data.category}</td>
          </tr>
          <tr>
            <td>First Name</td>
            <td>{data.first_name}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{data.last_name}</td>
          </tr>
          <tr>
            <td>Father's Name</td>
            <td>{data.fathers_name}</td>
          </tr>
          <tr>
            <td>Mother's Name</td>
            <td>{data.mothers_name}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{data.country}</td>
          </tr>
          <tr>
            <td>Province</td>
            <td>{data.province}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{data.city}</td>
          </tr>
          <tr>
            <td>Zip</td>
            <td>{data.zip}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{data.address}</td>
          </tr>
          <tr>
            <td>Marital Status</td>
            <td>{data.marital_status}</td>
          </tr>
          <tr>
            <td>Specific Marital Status</td>
            <td>{data.specific_marital_status}</td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td>{data.date_of_birth}</td>
          </tr>
          <tr>
            <td>Sex</td>
            <td>{data.sex}</td>
          </tr>
          <tr>
            <td>Specific Sex</td>
            <td>{data.specific_sex}</td>
          </tr>
          <tr>
            <td>Blood Group</td>
            <td>{data.blood_group}</td>
          </tr>
          <tr>
            <td>Occupation</td>
            <td>{data.occupation}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{data.email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{data.phone}</td>
          </tr>
          <tr>
            <td>Identification Card</td>
            <td>
              <a
                href={data.identification_card}
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
            </td>
          </tr>
          <tr>
            <td>Certificate from City Council</td>
            <td>
              <a
                href={data.certificate_from_city_council}
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
            </td>
          </tr>
          <tr>
            <td>Medical Report</td>
            <td>
              <a href={data.medical_report} target="_blank" rel="noreferrer">
                View
              </a>
            </td>
          </tr>
          <tr>
            <td>Permission Letter</td>
            <td>
              <a href={data.permission_letter} target="_blank" rel="noreferrer">
                View
              </a>
            </td>
          </tr>
          <tr>
            <td>Test Results</td>
            <td>
              <a href={data.test_results} target="_blank" rel="noreferrer">
                View
              </a>
            </td>
          </tr>
          <tr>
            <td>Name of Employment</td>
            <td>{data.name_of_employment}</td>
          </tr>
          <tr>
            <td>Credential Photos</td>
            <td>
              {data?.credential_photos?.map((src: any, index: number) => (
                <img
                  src={src}
                  alt=""
                  key={index}
                  className="w-[200px] h-[200px] pr-5"
                />
              ))}
            </td>
          </tr>
          <tr>
            <td>Other Documents</td>
            <td>
              <a href={data.other_documents} target="_blank" rel="noreferrer">
                View
              </a>
            </td>
          </tr>
          <tr>
            <td>Title</td>
            <td>{data.title}</td>
          </tr>
          <tr>
            <td>Photo</td>
            <td>
              {" "}
              <img
                src={data.photo}
                alt=""
                className="w-[200px] h-[200px]"
              />{" "}
            </td>
          </tr>
          <tr>
            <td>Live Description</td>
            <td>
              <video width="400" controls>
                <source src={data.live_description} type="video/mp4" />
              </video>
            </td>
          </tr>
          <tr>
            <td>Written Description</td>
            <td>{data.written_description}</td>
          </tr>
          <tr>
            <td>Time Limit</td>
            <td>{data.time_limit}</td>
          </tr>
          <tr>
            <td>Fixed Time</td>
            <td>{data.fixed_time}</td>
          </tr>
          <tr>
            <td>Donation Needed</td>
            <td>{data.donation_needed}</td>
          </tr>
          <tr>
            <td>Created At</td>
            <td>{data.created_at}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{data.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
