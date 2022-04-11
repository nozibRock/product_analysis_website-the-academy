import React from 'react';

const Privacy = () => {
    return (
      <div className="my-5 py-4 py-md-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-flow-row">
            <div className="py-10">
              <div className="mb-9">
                <h1 className="text-4xl font-bold">Privacy Policy</h1>
              </div>
              <div>
                <p>Hi !</p>
                <p>I am Nozib.</p>
                <p>
                  Just to let you know, I care about your privacy as much as I
                  care for mine.
                </p>
                <p>What data do we collect from you?</p>
                <p>
                  When you send a login request – we can see your FB profile
                  picture and on the backend, we also see the email associated
                  with your Facebook account. We don’t see your Facebook
                  username or password – we only collect the FB profile picture
                  + email to verify whether you have actually purchased the
                  course before we give you the required access.
                </p>
                <p>
                  We also track how many courses you have seen, to what extend
                  and whether you are completing the courses or not.
                </p>
                <p>
                  You own 100% of your data. If you want us to remove any/all of
                  your data stored on our end, simply send us an email to
                  nozibuddowla@gmail.com and we will take care of it in 24
                  hours.
                </p>
                <p>
                  If you have a question about any of our tracking or data
                  collection, please email at nozibuddowla@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Privacy;