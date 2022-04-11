import React from 'react';

const RefundPolicy = () => {
    return (
      <div className="my-5 py-4 py-md-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-flow-row">
            <h3 className="text-4xl font-bold">
              <strong>Refund and Return Policy</strong>
            </h3>
            <p>
              <br />
            </p>
            <p className="text-xl font-bold">
              Our refund policy is very simple.
            </p>
            <ol>
              <li>
                You can request a refund within 48 hours of purchasing the
                course.
              </li>
              <li>
                For refund request, email nozibuddowla@gmail.com with details.
              </li>
              <li>
                We will respond within 3 to 7 days after the email and ask for
                some more details.
              </li>
              <li>
                Since our main focus is on teaching, any refund request process
                may take 7-15 days.
              </li>
              <li>
                Since we work on batch systems. So when the orientation of a
                course starts, we mainly focus on teaching the course and after
                that no refund request is accepted.
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
};

export default RefundPolicy;