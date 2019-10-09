import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Image
} from 'react-bootstrap';

import './Disclaimer.css';

const Disclaimer = () => {
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <h4>Terms of Use and Legal Disclaimer</h4>
      </Row>
      <Row>
        <p>
          Thank you for visiting the Wright Law Group, PLLC web site. Please
          note, the material located on our site is for informational purposes
          only, is general in nature, and is not intended to and should not be
          relied upon or construed as a legal opinion or legal advice regarding
          any specific issue or factual circumstance. Nor is this information
          intended to create, and receipt of it does not create, an
          attorney-client relationship between you and the firm. Therefore, you
          should consult an attorney in the event you want legal advice.
        </p>
      </Row>
      <Row>
        <p>
          This web site is also not intended as an advertisement and Wright Law
          Group, PLLC does not seek to represent anyone by means of this web
          site in a state where this site may fail to comply with all laws and
          ethical rules of that state.
        </p>
      </Row>
      <Row>
        <p>
          Please note, the content of any communication you send to the firm,
          electronically or by any other means, will not be considered
          confidential unless and until you have received written acceptance
          from the firm to undertake the legal services you may request. You
          should not send any confidential information to the firm by any means
          unless you have received such written confirmation and you should be
          aware that we can use any unsolicited information you send to us on
          behalf of our clients. We will neither accept requests for legal
          advice nor offer specific legal advice over the Internet.
        </p>
      </Row>
      <Row>
        <p>
          Wright Law Group, PLLC authorizes you to view and use the material at
          the website for personal non-commercial use but any reproduction,
          copying, or distribution of materials on the Wright Law Group, PLLC
          web site for commercial purposes is prohibited without the express
          written permission of Wright Law Group, PLLC.
        </p>
      </Row>
      <Row>
        <p>
          All information provided on this web site is provided "as is" without
          warranty of any kind, either express or implied, including without
          limitation, warranties of merchantability, fitness for a particular
          purpose, or non-infringement. Your use of this web site is at your own
          risk and Wright Law Group, PLLC assumes no liability or responsibility
          for any errors or omissions in the content of this web site. Under no
          circumstances shall Wright Law Group, PLLC be liable to you or any
          other person for any damages of any amount or character arising from
          your access to, or use of, this web site.
        </p>
      </Row>
      <Row>
        <p>
          As a convenience to you, some of the web pages may contain links to
          web sites not maintained by Wright Law Group, PLLC. The linked sites
          are not under the control of Wright Law Group, PLLC and, accordingly,
          Wright Law Group, PLLC is not responsible for the contents of any
          linked web site. The inclusion of any link does not imply endorsement,
          approval, or sponsorship by Wright Law Group, PLLC or the linked site
          of one another.
        </p>
      </Row>
    </Container>
  );
};

export default Disclaimer;
