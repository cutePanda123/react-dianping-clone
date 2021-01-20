import React from "react";
import "./style.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <a className="foot__link" href="https://m.dianping.com/nmy/myinfo">
          My space
        </a>
        <em className="footer__seperator">|</em>
        <a className="footer__link" href="https://m.dianping.com/nmy/myinfo">
          Community
        </a>
        <em className="footer__seperator">|</em>
        <a className="footer__link" href="https://m.dianping.com/nmy/myinfo">
          Business partnership
        </a>
        <em className="footer__seperator">|</em>
        <a className="footer__link" href="https://m.dianping.com/nmy/myinfo">
          Feedback
        </a>
        <br />
        <a className="footer__link" href="https://m.dianping.com/nmy/myinfo">
          Meituan Web
        </a>
        <em className="footer__seperator">|</em>
        <a className="footer__link" href="https://m.dianping.com/nmy/myinfo">
          Meituan App
        </a>
        <em className="footer__seperator">|</em>
        <a className="footer__link" href="https://m.dianping.com/nmy/myinfo">
          Wedding
        </a>
        <em className="footer__seperator">|</em>
        <a className="footer__link" href="https://m.dianping.com/nmy/myinfo">
          Kids
        </a>
        <em className="footer__seperator">|</em>
        <a className="footer__link" href="https://m.dianping.com/nmy/myinfo">
          Home Improvement
        </a>
        <em className="footer__seperator">|</em>
        <a className="footer__link" href="https://m.dianping.com/nmy/myinfo">
        Catering
        </a>
        <em className="footer__seperator">|</em>
        <a className="footer__link" href="https://m.dianping.com/nmy/myinfo">
          Education
        </a>
        <br />
        <a className="footer__link" href="https://m.dianping.com/nmy/myinfo">
          PC App
        </a>
        <em className="footer__seperator">|</em>
        <a className="footer__link" href="https://m.dianping.com/nmy/myinfo">
          Client App
        </a>
        <em className="footer__seperator">|</em>
        <br />
        <p className="footer__copyright">copyright ©2018 dianping.com</p>
      </footer>
    );
  }
};

export default Footer;
