import React from 'react';
import {
  Container,
  Col,
  Image,
  Form,
  FormGroup,
  Button
} from 'react-bootstrap';

import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div>
      <h2>PRIVACY POLICY</h2>
      <p>
        This privacy notice discloses the privacy practices for
        <a href="www.wrightlawgroup.com"> www.wrightlawgroup.com</a>. This
        privacy notice applies solely to information collected by this website.
        It will notify you of the following:
      </p>{' '}
      <ol>
        <li>
          What personally identifiable information is collected from you through
          the website, how it is used and with whom it may be shared.
        </li>
        <li>
          What choices are available to you regarding the use of your data.
        </li>
        <li>
          The security procedures in place to protect the misuse of your
          information.
        </li>
        <li>How you can correct any inaccuracies in the information.</li>
      </ol>{' '}
      <h4>Information Collection, Use, and Sharing</h4>{' '}
      <p>
        We are the sole owners of the information collected on this site. We
        only have access to/collect information that you voluntarily give us via
        email or other direct contact from you. We will use your information to
        respond to you, regarding the reason you contacted us. We will not share
        your information with any third party outside of our organization, other
        than as necessary to fulfill your request.
      </p>{' '}
      <p>
        Unless you ask us not to, we may contact you via email in the future to
        tell you about specials, new products or services, or changes to this
        privacy policy.
      </p>{' '}
      <h4>Your Access to and Control Over Information</h4>{' '}
      <p>
        You may opt out of any future contacts from us at any time. You can do
        the following at any time by contacting us via the email address or
        phone number given on our website:
      </p>
      <ul>
        <li>See what data we have about you, if any.</li>
        <li>Change/correct any data we have about you.</li>
        <li>Have us delete any data we have about you.</li>
        <li>Express any concern you have about our use of your data.</li>
      </ul>
      <h4>Security</h4>{' '}
      <p>
        We take precautions to protect your information. When you submit
        sensitive information via the website, your information is protected
        both online and offline.
      </p>{' '}
      <p>
        While we may use encryption to protect sensitive information transmitted
        online, we also protect your information offline. Only employees who
        need the information to perform a specific job are granted access to
        personally identifiable information. The computers/servers in which we
        store personally identifiable information are kept in a secure
        environment.
      </p>{' '}
      <p>
        We may use "cookies" on this site. A cookie is a piece of data stored on
        a site visitor's hard drive to help us improve your access to our site
        and identify repeat visitors to our site. For instance, when we use a
        cookie to identify you, you would not have to log in a password more
        than once, thereby saving time while on our site. Cookies can also
        enable us to track and target the interests of our users to enhance the
        experience on our site. Usage of a cookie is in no way linked to any
        personally identifiable information on our site.
      </p>{' '}
      <h4>Sharing</h4>{' '}
      <p>
        We share aggregated demographic information with our partners and
        advertisers. This is not linked to any personal information that can
        identify any individual person.
      </p>{' '}
      <h4>Links</h4>{' '}
      <p>
        This website may contain links to other sites. Please be aware that we
        are not responsible for the content or privacy practices of such other
        sites. We encourage our users to be aware when they leave our site and
        to read the privacy statements of any other site that collects
        personally identifiable information.
      </p>{' '}
      <p>
        If you feel that we are not abiding by this privacy policy, you should
        contact us immediately via telephone at 480.270.4926 or
        info@wrightlawgroup.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
