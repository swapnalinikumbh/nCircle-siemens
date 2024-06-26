import React from 'react'
import "./About.css";
import SidebarDrawer from '../../../pages/SidebarDrawer';
const AboutComponent = () => {
  return (
    <div className="about-main">
      <div className="row">
        <div className="col-sm-2">
          <SidebarDrawer />
        </div>
        <div className="col-sm-10">
          <div className="card right-side">
            <h1 className="mt-4">About ReliScore</h1>
            <div className="top-content mt-2 mb-2">
              <div className="container mt-2">
                <span>
                  ReliScore is platform for use by companies for online
                  pre-filtering of candidates.
                </span>
                <p className="mt-2">
                  If you're hiring, most probably you are drowning in hundreds
                  of resumes of dubious quality as a result of newspaper
                  advertisements, job portal postings, and other referrals, and
                  you have no idea how to shortlist the most promising
                  candidates. Everyone looks good on paper, and your human
                  resources and technical hiring managers spend huge amounts of
                  time in the filtering process - only to reject most of the
                  candidates they speak to.
                </p>
                <div className="div-main">
                  Automated, Online Pre-Interview Filtering
                </div>
                <div className="mt-2">
                  <span className="Click-here text-primary me-1">
                    ReliScore
                  </span>
                  is a platform that significantly reduces the amount of time
                  spent in pre-interview filtering - by allowing a company to
                  create an online pre-interview test that can be sent to all
                  the potential candidates. The candidates can take the test in
                  the comfort of their own homes, at a time convenient to them,
                  and at the end of the testing period, the company gets an
                  ordered list of candidates, sorted by test scores, which makes
                  it easy to decide which candidates to shortlist
                </div>
                <div className="mt-2 div-main">
                  Programming Tasks and Subjective Questions too
                </div>
                <p className="mt-2">
                  A key feature of ReliScore is that it incorporates not just
                  standard objective (multiple-choice) questions, but also
                  programming tasks, and other subjective questions. This makes
                  it much more useful than a simple aptitude test. The
                  programming tasks are automatically evaluated and scored by
                  ReliScore, and the answers of all the subjective questions are
                  made available to the hiring manager to assist in the
                  shortlisting decision process
                </p>
                <div className="mt-2 div-main">Fully Private</div>
                <p className="mt-2">
                  Note: all the tests and all the candidate information is
                  totally private and is only available to authorized company
                  personnel. Neither the questions nor the candidates are
                  visible to the public.
                </p>
                <div className="mt-2 div-main">
                  Participate in our Beta Program
                </div>
                <p className="mt-2">
                  At this point, we are only working with selected companies.
                  Specifically, we are looking for companies who understand and
                  share our vision, who are working on interesting products, or
                  high quality services, and who are willing to spend a little
                  time with us to help shape the ReliScore platform as it
                  evolves.
                </p>
                <p className="mt-3">
                  If you're a company that fits this description, please
                  <span className="Click-here text-primary me-1 ms-1">
                    get in touch with us.
                  </span>
                </p>
                <div className="mt-2 div-main">About the Company</div>
                <p className="mt-2">
                  For more about us, check out
                  <span className="Click-here text-primary me-1 ms-1">
                    ReliScore.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent
